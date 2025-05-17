import { useEffect, useRef, useState } from "react";
import { useThemeStore } from "../../store/useThemeStore";

function MobileHackerShake() {
  const [isMobile, setIsMobile] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const { setThemeByName, theme } = useThemeStore();
  const previousTheme = useRef(theme);
  const [hackerMode, setHackerMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const isShakingRef = useRef(false);
  const intervalRef = useRef(null);
  const lastShakeTimeRef = useRef(0);

  const hackerAudioRef = useRef(null);
  const chargingAudioRef = useRef(null);

  const initializeAudio = async () => {
    if (!hackerAudioRef.current) {
      hackerAudioRef.current = new Audio("/assets/sounds/click.mp3");
    }
    if (!chargingAudioRef.current) {
      chargingAudioRef.current = new Audio("/assets/sounds/loading.mp3");
      chargingAudioRef.current.loop = true;
    }

    try {
      await hackerAudioRef.current.play().catch(() => {});
      hackerAudioRef.current.pause();
      hackerAudioRef.current.currentTime = 0;

      await chargingAudioRef.current.play().catch(() => {});
      chargingAudioRef.current.pause();
      chargingAudioRef.current.currentTime = 0;
    } catch (e) {
      console.warn("No se pudo desbloquear el audio:", e);
    }
  };

  const playHackerSound = () => {
    if (hackerAudioRef.current) {
      hackerAudioRef.current.currentTime = 0;
      hackerAudioRef.current.volume = 0.4;
      hackerAudioRef.current.play().catch((e) => {
        console.warn("Error al reproducir hacker:", e);
      });
    }
  };

  const activateHackerMode = () => {
    playHackerSound();
    previousTheme.current = theme;
    setThemeByName("hacker");
    setHackerMode(true);
    setProgress(0);
    clearInterval(intervalRef.current);
    setTimeout(() => {
      setHackerMode(false);
      setThemeByName(previousTheme.current);
    }, 5000);
  };

  const handleShakeMotion = (event) => {
    const { x, y, z } = event.accelerationIncludingGravity || {};
    if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number")
      return;

    const totalAcceleration = Math.sqrt(x * x + y * y + z * z);
    const now = Date.now();

    if (totalAcceleration > 14) {
      lastShakeTimeRef.current = now;
      isShakingRef.current = true;
    }
  };

  useEffect(() => {
    if (permissionGranted) {
      initializeAudio();
    }
  }, [permissionGranted]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && permissionGranted) {
        initializeAudio();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [permissionGranted]);

  useEffect(() => {
    if (!permissionGranted || !isMobile) return;

    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const timeSinceLastShake = now - lastShakeTimeRef.current;

      if (hackerMode) {
        isShakingRef.current = false;
        return;
      }

      setProgress((prev) => {
        let newProgress;

        if (isShakingRef.current && timeSinceLastShake < 500) {
          newProgress = Math.min(prev + 2, 100);
        } else {
          isShakingRef.current = false;
          newProgress = Math.max(prev - 2, 0);
        }

        // Control sonido
        if (chargingAudioRef.current) {
          if (newProgress > 0 && chargingAudioRef.current.paused) {
            chargingAudioRef.current.currentTime = 0;
            chargingAudioRef.current
              .play()
              .catch((e) =>
                console.warn("Error al reproducir sonido de carga:", e)
              );
          } else if (newProgress === 0 && !chargingAudioRef.current.paused) {
            chargingAudioRef.current.pause();
            chargingAudioRef.current.currentTime = 0;
          }
        }

        return newProgress;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [permissionGranted, isMobile, hackerMode]);

  useEffect(() => {
    if (progress >= 100 && !hackerMode) {
      activateHackerMode();
    }
  }, [progress]);

  const requestPermission = async () => {
    try {
      const response =
        typeof DeviceMotionEvent?.requestPermission === "function"
          ? await DeviceMotionEvent.requestPermission()
          : "granted";

      if (response === "granted") {
        window.addEventListener("devicemotion", handleShakeMotion);
        setPermissionGranted(true);
        localStorage.setItem("motion-permission", "granted");
        await initializeAudio();
      } else {
        alert("Permiso de sensor no concedido");
      }
    } catch (err) {
      console.error("Error al pedir permiso de movimiento:", err);
    }
  };

  useEffect(() => {
    const checkPermission = async () => {
      setIsMobile(window.innerWidth <= 768);

      if (
        typeof DeviceMotionEvent !== "undefined" &&
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        try {
          const permission = await DeviceMotionEvent.requestPermission();
          if (permission === "granted") {
            window.addEventListener("devicemotion", handleShakeMotion);
            setPermissionGranted(true);
          } else {
            setPermissionGranted(false);
          }
        } catch (err) {
          console.warn("No se pudo comprobar permiso de sensor:", err);
          setPermissionGranted(false);
        }
      } else {
        window.addEventListener("devicemotion", handleShakeMotion);
        setPermissionGranted(true);
      }
    };

    checkPermission();

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("devicemotion", handleShakeMotion);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && !permissionGranted && (
        <button
          onClick={requestPermission}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 24px",
            background: "#000",
            color: "#0f0",
            border: "2px solid #0f0",
            borderRadius: "10px",
            zIndex: 9999,
            fontSize: "16px",
          }}
        >
          Activar sensores secretos 🕵️
        </button>
      )}

      {permissionGranted && progress > 0 && !hackerMode && (
        <div
          style={{
            position: "fixed",
            bottom: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100vw - 40px)",
            maxWidth: "400px",
            height: "6px",
            background: "#111",
            border: "1px solid #0f0",
            borderRadius: "4px",
            overflow: "hidden",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "#0f0",
              transition: "width 0.1s linear",
            }}
          />
        </div>
      )}

      {hackerMode && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            padding: "12px",
            background: "#000",
            color: "#0f0",
            textAlign: "center",
            zIndex: 9999,
            fontWeight: "bold",
          }}
        >
          🕶️ MODO HACKER ACTIVADO
        </div>
      )}
    </>
  );
}

export default MobileHackerShake;

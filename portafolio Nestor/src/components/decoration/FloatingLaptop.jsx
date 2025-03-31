import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import laptopAnimation from "../../assets/lottie/laptop.json";
import { useThemeStore } from "../../store/useThemeStore";

function FloatingLaptop() {
  const [isMobile, setIsMobile] = useState(false);
  const lottieRef = useRef();
  const { scrollY } = useScroll();
  const frameCount = laptopAnimation.op;
  const maxScroll = 800;

  const y = useTransform(scrollY, [0, maxScroll], [0, 100]);
  const scale = useTransform(scrollY, [0, maxScroll], [1, 1.05]);
  const rotate = useTransform(scrollY, [0, maxScroll], [0, 5]);
  const opacity = useTransform(scrollY, [maxScroll * 0.9, maxScroll], [0.2, 0]);

  const [messageVisible, setMessageVisible] = useState(false);
  const [clicks, setClicks] = useState([]);
  const [hackerMode, setHackerMode] = useState(false);
  const { setThemeByName, theme } = useThemeStore();
  const previousTheme = useRef(theme);

  const lastProgressRef = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    return scrollY.on("change", (latest) => {
      const progress = Math.min(Math.max(latest / maxScroll, 0), 1);
      const frame = Math.floor(progress * frameCount);
      lottieRef.current?.goToAndStop(frame, true);
      lastProgressRef.current = progress;
    });
  }, [scrollY, isMobile]);

  const playSound = () => {
    const audio = new Audio("/src/assets/sounds/click.mp3"); // asegúrate de que esté en public/sounds
    audio.volume = 0.4;
    audio.play();
  };

  const handleLaptopClick = () => {
    const now = Date.now();
    const recentClicks = [...clicks, now].filter((t) => now - t < 4000);
    setClicks(recentClicks);

    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 2000);

    if (recentClicks.length >= 5 && !hackerMode) {
      playSound();
      previousTheme.current = theme;
      setThemeByName("hacker");
      setHackerMode(true);

      setTimeout(() => {
        setHackerMode(false);
        setThemeByName(previousTheme.current);
        setClicks([]);
      }, 5000);
    }
  };

  if (isMobile) return null;

  return (
    <motion.div
      onClick={handleLaptopClick}
      style={{ y, scale, rotate, opacity }}
      className="fixed left-10 top-20 z-[50] w-[250px] pointer-events-auto cursor-pointer"
    >
      {hackerMode ? (
        <div className="bg-black text-green-400 font-mono text-sm p-4 rounded-xl shadow-lg animate-pulse">
          <p>&gt; Iniciando protocolo creativo...</p>
          <p>&gt; Accediendo a ideas visuales...</p>
          <p>&gt; 💻 Modo Hacker Activado</p>
        </div>
      ) : (
        <>
          <Lottie
            lottieRef={lottieRef}
            animationData={laptopAnimation}
            loop={false}
            autoplay={false}
          />
          {messageVisible && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-[rgb(var(--color-secondary))] text-white text-sm shadow-lg"
            >
              ¡Hola, soy tu portátil creativo! 💻
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  );
}
export default FloatingLaptop;

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import laptopAnimation from "../../assets/lottie/laptop.json";

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

  const [particleBursts, setParticleBursts] = useState([]);
  const lastProgressRef = useRef(0);

  // Detectar si es móvil
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

      if (progress === 1 && lastProgressRef.current < 1) {
        const id = Date.now();
        setParticleBursts((prev) => [...prev, id]);
      }

      lastProgressRef.current = progress;
    });
  }, [scrollY, isMobile]);

  const removeBurst = (id) => {
    setParticleBursts((prev) => prev.filter((b) => b !== id));
  };

  if (isMobile) return null;

  return (
    <motion.div
      style={{ y, scale, rotate, opacity }}
      className="fixed left-10 top-20 z-[50] w-[250px] pointer-events-none"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={laptopAnimation}
        loop={false}
        autoplay={false}
      />

      {particleBursts.map((burstId) => (
        <ParticleBurst key={burstId} id={burstId} onComplete={removeBurst} />
      ))}
    </motion.div>
  );
}

function ParticleBurst({ id, onComplete }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      onComplete(id);
    }, 1600);
    return () => clearTimeout(timer);
  }, [id, onComplete]);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[999] pointer-events-none overflow-visible">
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            backgroundColor: "rgb(var(--color-secondary))",
          }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: Math.random() * 800 - 400,
            y: Math.random() * 800 - 400,
            scale: 0.5 + Math.random() * 0.5,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default FloatingLaptop;

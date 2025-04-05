import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";

function HeroBanner() {
  const imgRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { theme } = useThemeStore();

  const glowStyle = useTransform([mouseX, mouseY], ([x, y]) => {
    return `radial-gradient(300px circle at ${x}px ${y}px, rgba(var(--color-secondary), 0.15), transparent 70%)`;
  });

  const handleMouseMove = (e) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 60]);
  const bgParallax = useTransform(scrollY, [0, 500], ["0%", "20%"]);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 px-4 md:px-10 lg:px-20 text-[rgb(var(--color-text))]">
      {/* Fondo parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ backgroundPositionY: bgParallax }}
      >
        <div className="absolute inset-0 bg-[rgb(var(--color-background))]" />

        {theme === "hacker" && (
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            {Array.from({ length: 150 }).map((_, i) => {
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const chars = "01$%#@&*+-";
              const char = chars[Math.floor(Math.random() * chars.length)];
              const size = Math.floor(Math.random() * 16) + 10;
              const baseOpacity = Math.random() * 0.15 + 0.05;
              const shouldBlink = Math.random() < 0.3; // ~30% parpadean
              const motionX = (Math.random() - 0.5) * 20;
              const motionY = (Math.random() - 0.5) * 20;

              return (
                <motion.span
                  key={i}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: baseOpacity,
                  }}
                  animate={{
                    x: motionX,
                    y: motionY,
                    opacity: shouldBlink
                      ? [baseOpacity, 0, baseOpacity]
                      : baseOpacity,
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="absolute text-[rgb(0,255,70)] font-mono"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    fontSize: `${size}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    whiteSpace: "pre",
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        )}

        <motion.svg
          style={{ y: y1 }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgb(var(--color-secondary))"
            d="M45.8,-62.9C59.2,-53.5,69.3,-39.6,72.6,-24.8C75.9,-10,72.5,5.7,66.2,20.3C59.9,34.9,50.6,48.3,38.4,58.6C26.3,68.8,11.1,75.8,-3.5,80.3C-18.1,84.7,-36.3,86.6,-49.7,78C-63.2,69.4,-72,50.2,-76.3,32.1C-80.7,14,-80.5,-2.9,-73.9,-16.8C-67.3,-30.8,-54.3,-41.9,-40.9,-51.8C-27.5,-61.7,-13.7,-70.5,1.4,-72.5C16.5,-74.6,33,-69.7,45.8,-62.9Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </motion.div>

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 z-10 relative">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[rgb(var(--color-primary))] leading-tight">
            ¡Hola! Soy{" "}
            <span className="text-[rgb(var(--color-secondary))]">
              Néstor Calderón Pérez
            </span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-xl">
            Desarrollador web enfocado en crear experiencias digitales con alma.
            Apasionado del código limpio, la animación con propósito y el diseño
            funcional. Transformo ideas en interfaces vivas con React, Tailwind
            y Framer Motion.
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary-hover))] text-white px-7 py-3 rounded-full transition duration-300 font-semibold shadow-md hover:shadow-lg"
          >
            🚀 Ver mis proyectos
          </motion.a>
        </motion.div>

        {/* IMAGEN con glow */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 relative"
        >
          <div
            ref={imgRef}
            onMouseMove={handleMouseMove}
            className="relative w-full max-w-md mx-auto rounded-full overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none mix-blend-soft-light blur-2xl opacity-50"
              style={{ backgroundImage: glowStyle }}
              animate={{ opacity: [0.98, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className={`relative z-10 rounded-full transition-all duration-300 ${
                theme === "hacker"
                  ? "p-3 bg-[rgba(0,255,70,0.1)] border-2 border-[rgb(0,255,70)] shadow-[0_0_20px_rgba(0,255,70,0.4)]"
                  : "p-0"
              }`}
            >
              <motion.div
                className={`relative z-10 rounded-full transition-all duration-300 ${
                  theme === "hacker"
                    ? "pt-2 pb-2 px-3 bg-[rgba(0,255,70,0.08)] border border-[rgb(0,255,70)] shadow-[0_0_20px_rgba(0,255,70,0.4)]"
                    : ""
                }`}
              >
                <motion.img
                  src={
                    theme === "hacker"
                      ? "/assets/img/nestor-hacker.png"
                      : "/assets/img/nestor.png"
                  }
                  alt="Foto de Néstor Calderón"
                  className={`rounded-full w-full h-auto transition-all duration-300 ${
                    theme === "hacker" ? "scale-110" : ""
                  }`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Glow inferior estático */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute -bottom-10 -left-10 w-72 h-72 bg-[rgb(var(--color-secondary))] rounded-full blur-3xl"
      />
    </section>
  );
}

export default HeroBanner;

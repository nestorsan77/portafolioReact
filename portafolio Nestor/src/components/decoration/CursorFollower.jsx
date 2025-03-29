import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ translateX: x, translateY: y }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none w-10 h-10 rounded-full"
    >
      {/* Capa difusa que hereda el color dinámico del tema */}
      <div className="w-full h-full rounded-full bg-[rgb(var(--color-secondary))] opacity-30 blur-[16px]" />
    </motion.div>
  );
}

export default CursorFollower;

// src/components/decoration/CursorGlow.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function CursorGlow({ radius = 600 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const secondaryColor =
    getComputedStyle(document.documentElement).getPropertyValue(
      "--color-secondary"
    ) || "132, 204, 22";

  const background = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(${radius}px circle at ${latestX}px ${latestY}px, rgba(${secondaryColor.trim()}, 0.2), transparent 70%)`
  );

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <motion.div className="w-full h-full" style={{ background }} />
    </div>
  );
}

export default CursorGlow;

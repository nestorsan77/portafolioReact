import React from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./utils/FadeInWhenVisible";

function ProjectCard({ title, description, image, delay = 0 }) {
  return (
    <FadeInWhenVisible delay={delay} direction="up">
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
          boxShadow: "0 15px 40px rgba(var(--color-secondary-rgb), 0.25)",
        }}
        whileTap={{ scale: 0.98 }}
        className="group relative bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        {/* Imagen con parallax hover */}
        <div className="relative h-48 overflow-hidden rounded-xl mb-4">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          />
          {/* Sombra parallax superior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Título */}
        <h3 className="text-2xl font-extrabold text-[rgb(var(--color-primary))] group-hover:text-[rgb(var(--color-secondary))] transition-colors duration-300">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-[rgb(var(--color-text-muted))] mt-2 text-base leading-relaxed">
          {description}
        </p>

        {/* Línea decorativa animada */}
        <motion.div
          className="mt-4 h-1 w-16 bg-[rgb(var(--color-secondary))] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          layout
        />
      </motion.div>
    </FadeInWhenVisible>
  );
}

export default ProjectCard;

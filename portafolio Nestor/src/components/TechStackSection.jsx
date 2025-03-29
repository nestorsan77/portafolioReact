import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiGithub,
  SiTypescript,
} from "react-icons/si";
import FadeInWhenVisible from "./utils/FadeInWhenVisible";
import CursorGlow from "./decoration/CursorGlow";

const techStack = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    description: "ES6+, asincronía, manejo de errores, lógica compleja.",
    level: 95,
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-400" />,
    description: "Hooks, componentes, optimización, rutas, contextos.",
    level: 90,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    description: "Estilizado utilitario, responsive, dark mode.",
    level: 85,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />,
    description: "APIs REST, Express, middlewares.",
    level: 75,
  },
  {
    name: "Git",
    icon: <SiGit className="text-red-500" />,
    description: "Flujo GitFlow, ramas, merges, conflictos.",
    level: 90,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-pink-500" />,
    description: "Wireframes, prototipos, componentes UI.",
    level: 80,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-gray-800" />,
    description: "Repos, CI básico, GitHub Pages.",
    level: 85,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    description: "Interfaces, tipado, generics, React+TS.",
    level: 70,
  },
];

function TechStackSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="tech"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-20 bg-[rgb(var(--color-background))] border-t border-[rgb(var(--color-border))]"
    >
      {/* Glow dinámico al cursor */}
      <CursorGlow />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible direction="up">
          <h2 className="text-4xl font-bold text-[rgb(var(--color-primary))] mb-12 text-center">
            Tecnologías y Herramientas
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => {
            const isActive = index === activeIndex;

            return (
              <FadeInWhenVisible
                key={tech.name}
                delay={index * 0.1}
                direction="up"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`cursor-pointer bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition relative ${
                    isActive ? "ring-2 ring-[rgb(var(--color-secondary))]" : ""
                  }`}
                >
                  <div className="text-4xl mb-2 flex justify-center">
                    {tech.icon}
                  </div>
                  <p className="font-semibold text-[rgb(var(--color-primary))] text-lg">
                    {tech.name}
                  </p>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-left"
                      >
                        <p className="text-sm text-[rgb(var(--color-text))] mb-2">
                          {tech.description}
                        </p>
                        <div className="w-full h-2 bg-[rgb(var(--color-border))] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="h-full bg-[rgb(var(--color-secondary))]"
                          />
                        </div>
                        <p className="text-xs text-[rgb(var(--color-muted))] mt-1 text-right">
                          Nivel: {tech.level}%
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;

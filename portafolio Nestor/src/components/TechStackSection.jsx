import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiKotlin,
  SiSwift,
  SiSpring,
  SiUnity,
  SiDocker,
} from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import FadeInWhenVisible from "./utils/FadeInWhenVisible";
import CursorGlow from "./decoration/CursorGlow";

const techStackGrouped = {
  "🖥️ Frontend": [
    {
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500" />,
      description: "Semántico, accesible, estructurado.",
      level: 90,
    },
    {
      name: "CSS",
      icon: <SiCss3 className="text-blue-500" />,
      description: "Layout, responsive, animaciones.",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      description: "ES6+, asincronía, lógica compleja en frontend.",
      level: 95,
    },
    {
      name: "React",
      icon: <SiReact className="text-cyan-400" />,
      description: "Hooks, estados, props, arquitectura UI.",
      level: 90,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
      description: "CSS utilitario, responsive, dark mode.",
      level: 85,
    },
  ],
  "⚙️ Backend": [
    {
      name: "Java",
      icon: <FaJava className="text-orange-600" />,
      description: "OOP, backend con Spring Boot, aplicaciones robustas.",
      level: 85,
    },
    {
      name: "Spring Boot",
      icon: <SiSpring className="text-green-500" />,
      description: "REST APIs, seguridad, servicios escalables.",
      level: 80,
    },
    {
      name: "PHP",
      icon: <SiPhp className="text-indigo-500" />,
      description: "Backends clásicos, formularios, bases de datos.",
      level: 70,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600" />,
      description: "APIs, Express, middlewares.",
      level: 75,
    },
  ],
  "📱 Mobile": [
    {
      name: "Kotlin",
      icon: <SiKotlin className="text-purple-500" />,
      description: "Android apps modernas, sintaxis fluida.",
      level: 75,
    },
    {
      name: "Swift",
      icon: <SiSwift className="text-orange-400" />,
      description: "iOS apps, tipado fuerte, diseño limpio.",
      level: 65,
    },
  ],
  "🐳 DevOps": [
    {
      name: "Git",
      icon: <SiGit className="text-red-500" />,
      description: "Control de versiones, ramas, flujo GitFlow.",
      level: 90,
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-gray-800" />,
      description: "Repos, CI/CD básico, colaboraciones.",
      level: 85,
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-400" />,
      description: "Contenedores, imágenes, Docker Compose.",
      level: 70,
    },
  ],
  "🎮 Otros": [
    {
      name: "Unity",
      icon: <SiUnity className="text-gray-700" />,
      description: "Videojuegos en 2D/3D, scripting en C#.",
      level: 70,
    },
    {
      name: "C#",
      icon: <FaMicrosoft className="text-purple-600" />,
      description: "Programación OOP, desarrollo en Unity y .NET.",
      level: 75,
    },
  ],
};

function TechStackSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", ...Object.keys(techStackGrouped)];

  return (
    <section
      id="tech"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-20 bg-[rgb(var(--color-background))] border-t border-[rgb(var(--color-border))]"
    >
      <CursorGlow />
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible direction="up">
          <h2 className="text-4xl font-bold text-[rgb(var(--color-primary))] mb-6 text-center">
            Tecnologías y Herramientas
          </h2>
        </FadeInWhenVisible>

        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                filter === cat
                  ? "bg-[rgb(var(--color-secondary))] text-white border-transparent"
                  : "border-[rgb(var(--color-border))] text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-card))]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {(filter === "Todos"
          ? Object.entries(techStackGrouped)
          : [[filter, techStackGrouped[filter]]]
        ).map(([groupName, groupTechs]) => (
          <div key={groupName} className="mb-12">
            <h3 className="text-2xl font-bold text-[rgb(var(--color-primary))] mb-6 border-b border-[rgb(var(--color-border))] pb-2">
              {groupName}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {groupTechs.map((tech, index) => {
                const id = `${groupName}-${tech.name}`;
                const isActive = activeIndex === id;

                return (
                  <FadeInWhenVisible
                    key={id}
                    delay={index * 0.1}
                    direction="up"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      onClick={() => setActiveIndex(isActive ? null : id)}
                      className={`cursor-pointer bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition relative ${
                        isActive
                          ? "ring-2 ring-[rgb(var(--color-secondary))]"
                          : ""
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
                                transition={{
                                  duration: 0.6,
                                  ease: "easeInOut",
                                }}
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
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;

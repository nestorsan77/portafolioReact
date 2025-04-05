import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiX, FiCheckCircle } from "react-icons/fi";
import FadeInWhenVisible from "./utils/FadeInWhenVisible";

const experiences = [
  {
    role: "Desarrollador de Software FullStack",
    company: "GalagaAgency",
    period: "2024 - Actualidad",
    description: "Desarrollo del backend web, aplicaciones móviles y DevOps.",
    fullDescription:
      "Lideré el backend completo de la aplicación PWA de Energía Solar Canarias, mejorando la seguridad, rendimiento y vinculando las apis de monitorización de 8 proveedores. Desarrollé unas automatizaciones con la api de Notion y ZohoCRM manteniendo una estructura de datos.",
    image: "/assets/img/galaga.png",
    tech: [
      "React",
      "Tailwind",
      "PHP",
      "NodeJS",
      "Zoho",
      "Notion",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    color: "#0ea5e9",
  },
  {
    role: "Desarrollador de Aplicaciones",
    company: "Gyleven",
    period: "2023 - 2024",
    description: "Desarrollo de Software y soluciones para empresas a medida.",
    fullDescription:
      "Participé en varios proyectos diseñando las plantillas móviles interfaces para ecommerce y apps. Colaboré en sprints ágiles y validaciones de diseño con el equipo de desarrollo.",
    image: "/assets/img/gyleven.png",
    tech: ["Figma", "Prototyping", "UX Writing", "CSS Grid"],
    color: "#f59e0b",
  },
  {
    role: "Desarrollador Web",
    company: "Publicidad Mediterránea",
    period: "2022 - 2023",
    description:
      "Desarrollo de webs con WordPress y gestión de dominios en arsys",
    fullDescription:
      "Mi primer contacto profesional. Trabajé en mejoras de SEO, programación de publicaciones de Instagram, Meta y Tik Tok, diseño del footer de la empresa, gestión de correos en Mailchimp y gestión de la seguridad y almacenamiento de la empresa.",
    image: "/assets/img/publicidadmediterranea.jpeg",
    tech: ["React", "Git", "SEO", "HTML"],
    color: "#10b981",
  },
  {
    role: "Soporte IT",
    company: "CRACK24",
    period: "2020 - 2021",
    description: "Apoyo en el soporte IT de la empresa.",
    fullDescription:
      "Mi primer contacto profesional. Trabajé gestionando los servidores de la empresa, dando de alta los clientes en la base de datos y dando soporte a los montadores de alarmas comunicando las mismas por GPRS.",
    image: "/assets/img/crack24.png",
    tech: ["React", "Git", "SEO", "HTML"],
    color: "#10b981",
  },
];

function ExperienceSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="experience"
      className="py-16 border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-background))]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeInWhenVisible direction="up">
          <h2 className="text-4xl font-bold text-[rgb(var(--color-primary))] mb-12 flex items-center gap-3">
            <FiBriefcase className="text-[rgb(var(--color-secondary))]" />
            Experiencia Laboral
          </h2>
        </FadeInWhenVisible>

        <div className="grid gap-8">
          {experiences.map((exp, idx) => (
            <FadeInWhenVisible key={idx} delay={idx * 0.1} direction="up">
              <div
                onClick={() => setSelected(idx)}
                className="cursor-pointer bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-[rgb(var(--color-primary))]">
                  {exp.role} —{" "}
                  <span className="text-[rgb(var(--color-text))] font-normal">
                    {exp.company}
                  </span>
                </h3>
                <p className="text-sm text-[rgb(var(--color-muted))] mb-2">
                  {exp.period}
                </p>
                <p className="text-base text-[rgb(var(--color-text))]">
                  {exp.description}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-gradient-to-br from-[rgb(var(--color-background))] to-[rgb(var(--color-secondary)/0.1)] backdrop-blur-xl overflow-y-auto"
            >
              <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 relative">
                <motion.button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 text-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-secondary))] transition"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FiX size={28} />
                </motion.button>

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[rgb(var(--color-card))] max-w-5xl w-full rounded-2xl shadow-2xl border border-[rgb(var(--color-border))] p-10 flex flex-col lg:flex-row gap-10"
                >
                  <motion.img
                    src={experiences[selected].image}
                    alt={experiences[selected].company}
                    className="w-full max-w-md rounded-xl shadow-lg object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  />

                  <div className="flex-1 flex flex-col justify-center">
                    <h3
                      className="text-3xl font-bold mb-1"
                      style={{ color: experiences[selected].color }}
                    >
                      {experiences[selected].role}
                    </h3>
                    <p className="text-sm text-[rgb(var(--color-muted))] mb-4">
                      {experiences[selected].company} ·{" "}
                      {experiences[selected].period}
                    </p>
                    <p className="text-base text-[rgb(var(--color-text))] leading-relaxed mb-4">
                      {experiences[selected].fullDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {experiences[selected].tech.map((tech, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 bg-[rgb(var(--color-background))] text-[rgb(var(--color-primary))] text-sm px-3 py-1 rounded-full border border-[rgb(var(--color-border))]"
                        >
                          <FiCheckCircle className="text-[rgb(var(--color-secondary))]" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ExperienceSection;

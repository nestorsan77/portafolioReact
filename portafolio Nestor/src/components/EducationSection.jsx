import React from "react";
import { FiBook, FiAward, FiCheckCircle } from "react-icons/fi";
import FadeInWhenVisible from "./utils/FadeInWhenVisible";

const formalEducation = [
  {
    degree: "Máster en Desarrollo Web Full Stack",
    institution: "Universidad Tecnológica de Madrid",
    period: "2021 - 2022",
    description:
      "Especialización en desarrollo frontend/backend con React, Node.js y despliegue en la nube.",
  },
  {
    degree: "Grado en Ingeniería Informática",
    institution: "Universidad de Sevilla",
    period: "2017 - 2021",
    description:
      "Fundamentos sólidos en programación, estructuras de datos y sistemas distribuidos.",
  },
];

const courses = [
  {
    title: "Curso Profesional de React",
    provider: "Platzi",
    period: "2023",
    description:
      "Componentes, hooks, enrutamiento, contexto y patrones de diseño en React moderno.",
  },
  {
    title: "JavaScript Moderno ES6+",
    provider: "Udemy",
    period: "2022",
    description:
      "Domina las características modernas del lenguaje JavaScript, incluyendo async/await, destructuring y más.",
  },
];

function EducationSection() {
  return (
    <section
      id="education"
      className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-[rgb(var(--color-background))] border-t border-[rgb(var(--color-border))]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <FadeInWhenVisible direction="up">
          <h2 className="text-4xl font-bold text-[rgb(var(--color-primary))] mb-16 text-center">
            Formación Académica
          </h2>
        </FadeInWhenVisible>

        {/* Estudios Oficiales */}
        <div className="mb-20">
          <FadeInWhenVisible direction="left">
            <h3 className="text-2xl font-semibold text-[rgb(var(--color-primary))] mb-10 flex items-center gap-2">
              <FiBook className="text-[rgb(var(--color-secondary))]" />
              Estudios Oficiales
            </h3>
          </FadeInWhenVisible>

          <div className="relative border-l-4 border-[rgb(var(--color-secondary))] pl-6 space-y-12">
            {formalEducation.map((item, index) => (
              <FadeInWhenVisible
                key={index}
                delay={index * 0.15}
                direction="left"
              >
                <div className="relative bg-[rgb(var(--color-card))] rounded-xl shadow-lg p-6 border border-[rgb(var(--color-border))] group hover:ring-2 hover:ring-[rgb(var(--color-secondary))] transition">
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-[rgb(var(--color-secondary))] rounded-full border-4 border-white group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl sm:text-2xl font-bold text-[rgb(var(--color-primary))] mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-[rgb(var(--color-muted))] mb-2 font-medium">
                    {item.institution} &middot; {item.period}
                  </p>
                  <p className="text-base text-[rgb(var(--color-text))] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>

        {/* Cursos y Certificaciones */}
        <FadeInWhenVisible direction="up">
          <h3 className="text-2xl font-semibold text-[rgb(var(--color-primary))] mb-10 flex items-center gap-2">
            <FiAward className="text-[rgb(var(--color-secondary))]" />
            Cursos y Certificaciones
          </h3>
        </FadeInWhenVisible>

        <div className="grid sm:grid-cols-2 gap-8">
          {courses.map((item, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2} direction="up">
              <div className="bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-2 text-[rgb(var(--color-primary))] font-semibold text-lg mb-1">
                  <FiCheckCircle className="text-[rgb(var(--color-secondary))]" />
                  {item.title}
                </div>
                <p className="text-sm text-[rgb(var(--color-muted))] mb-2 font-medium">
                  {item.provider} &middot; {item.period}
                </p>
                <p className="text-base text-[rgb(var(--color-text))] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;

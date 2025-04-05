import React from "react";
import { FiBook, FiAward, FiCheckCircle } from "react-icons/fi";
import {
  SiSpringboot,
  SiKotlin,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiLinux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRobotframework,
  SiRasa,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import FadeInWhenVisible from "./utils/FadeInWhenVisible";

// 🧠 Mapeo de tecnologías a iconos
const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "java":
      return <FaJava title="Java" />;
    case "springboot":
      return <SiSpringboot title="Spring Boot" />;
    case "kotlin":
      return <SiKotlin title="Kotlin" />;
    case "php":
      return <SiPhp title="PHP" />;
    case "javascript":
      return <SiJavascript title="JavaScript" />;
    case "html":
      return <SiHtml5 title="HTML" />;
    case "css":
      return <SiCss3 title="CSS" />;
    case "linux":
      return <SiLinux title="Linux" />;
    case "windows server":
      return <FaWindows title="Windows Server" />;
    case "node.js":
    case "nodejs":
      return <SiNodedotjs title="Node.js" />;
    case "express":
      return <SiExpress title="Express" />;
    case "mongodb":
      return <SiMongodb title="MongoDB" />;
    case "rpa":
      return <SiRobotframework title="RPA" />;
    case "ia":
    case "ai":
      return <SiRasa title="IA" />;
    default:
      return <span className="text-xs">{tech}</span>;
  }
};

// 🧾 Datos de estudios y cursos
const formalEducation = [
  {
    degree: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "Universidad Internacional de la Rioja (UNIR)",
    period: "2023 - 2024",
    description:
      "Especialización en desarrollo de aplicaciones móviles con Java, SpringBoot y Kotlin principalmente.",
    techs: ["Java", "SpringBoot", "Kotlin"],
  },
  {
    degree: "Grado Superior en Desarrollo de Aplicaciones Web",
    institution: "IES Macia Abela",
    period: "2021 - 2023",
    description:
      "Fundamentos sólidos en programación, Java, PHP, JavaScript, HTML, CSS y bases de datos.",
    techs: ["Java", "PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    degree: "Grado Medio en Sistemas Microinformáticos y Redes",
    institution: "IES Macia Abela",
    period: "2019 - 2021",
    description:
      "Especialización en redes, sistemas operativos y hardware. Aprendizaje de Linux y Windows Server.",
    techs: ["Linux", "Windows Server"],
  },
];

const courses = [
  {
    title: "Bootcamp Backend con Node.js",
    provider: "Qualentum",
    period: "2023 - 2024",
    description:
      "Aprende a desarrollar aplicaciones backend con Node.js, Express y MongoDB. Incluye proyectos prácticos.",
    techs: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Master en Robotic Process Automatication + IA",
    provider: "NTT Data / EOI",
    period: "2022 - 2023",
    description:
      "Domina la automatización de procesos con RPA y su integración con IA. Incluye proyectos prácticos.",
    techs: ["RPA", "IA"],
  },
];

function EducationCard({ title, subtitle, period, description, techs }) {
  return (
    <div className="relative z-10 bg-[rgb(var(--color-card))] rounded-xl shadow-lg p-6 border border-[rgb(var(--color-border))] group hover:ring-2 hover:ring-[rgb(var(--color-secondary))] transition overflow-visible">
      {/* Cartas en abanico con hover animado */}
      <div className="absolute -top-6 -right-8 flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-50">
        {techs.map((tech, idx) => {
          const angle = (idx - (techs.length - 1) / 2) * 12;
          return (
            <span
              key={idx}
              title={tech}
              className="text-xl p-2 rounded-lg border border-[rgb(var(--color-border))] bg-white shadow-md transition-all duration-300 ease-out hover:text-white hover:scale-110 hover:shadow-xl"
              style={{
                zIndex: 10 + idx,
                transform: `rotate(${angle}deg) translateX(${idx * -8}px)`,
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgb(var(--color-secondary))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              {getTechIcon(tech)}
            </span>
          );
        })}
      </div>

      {/* Contenido */}
      <h4 className="text-xl sm:text-2xl font-bold text-[rgb(var(--color-primary))] mb-1">
        {title}
      </h4>
      <p className="text-sm text-[rgb(var(--color-muted))] mb-2 font-medium">
        {subtitle} &middot; {period}
      </p>
      <p className="text-base text-[rgb(var(--color-text))] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

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
                <EducationCard
                  title={item.degree}
                  subtitle={item.institution}
                  period={item.period}
                  description={item.description}
                  techs={item.techs}
                />
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
              <EducationCard
                title={item.title}
                subtitle={item.provider}
                period={item.period}
                description={item.description}
                techs={item.techs}
              />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;

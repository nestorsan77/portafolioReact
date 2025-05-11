import React from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeInWhenVisible from "../components/utils/FadeInWhenVisible";
import { FaMicrosoft } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiKotlin,
  SiSwift,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiUnity,
  SiBootstrap,
  SiSass,
  SiSqlite,
  SiMaterialdesign,
} from "react-icons/si";

const techIcons = {
  React: <SiReact className="inline-block mr-2" />,
  TailwindCSS: <SiTailwindcss className="inline-block mr-2" />,
  TypeScript: <SiTypescript className="inline-block mr-2" />,
  Firebase: <SiFirebase className="inline-block mr-2" />,
  MongoDB: <SiMongodb className="inline-block mr-2" />,
  Kotlin: <SiKotlin className="inline-block mr-2" />,
  Swift: <SiSwift className="inline-block mr-2" />,
  "Node.js": <SiNodedotjs className="inline-block mr-2" />,
  HTML: <SiHtml5 className="inline-block mr-2" />,
  CSS: <SiCss3 className="inline-block mr-2" />,
  JavaScript: <SiJavascript className="inline-block mr-2" />,
  PHP: <SiPhp className="inline-block mr-2" />,
  MySQL: <SiMysql className="inline-block mr-2" />,
  Unity: <SiUnity className="inline-block mr-2" />,
  "C#": <FaMicrosoft className="inline-block mr-2" />,
  Bootstrap: <SiBootstrap className="inline-block mr-2" />,
  SCSS: <SiSass className="inline-block mr-2" />,
  SQLite: <SiSqlite className="inline-block mr-2" />,
  "Material Design": <SiMaterialdesign className="inline-block mr-2" />,
};

function ProjectDetail() {
  const { titulo } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(titulo);
  const project = projects.find((p) => p.title === decodedTitle);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))] p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Proyecto no encontrado</h2>
          <Link
            to="/"
            className="text-[rgb(var(--color-secondary))] underline hover:text-[rgb(var(--color-primary))] transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(var(--color-background))] text-[rgb(var(--color-text))] relative">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[rgb(var(--color-secondary))] opacity-20 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-16 w-32 h-32 bg-[rgb(var(--color-primary))] rotate-45 opacity-10 blur-2xl"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border-4 border-[rgb(var(--color-secondary))] opacity-15 animate-spin-slow" />
        <div className="absolute bottom-0 left-1/3 w-20 h-40 bg-[rgb(var(--color-secondary))] rounded-full opacity-10 rotate-12 blur-2xl" />
      </div>

      <Navbar />

      <main className="flex-grow px-4 py-16 sm:px-10 max-w-7xl mx-auto relative overflow-hidden">
        {/* Botón volver atrás */}
        <FadeInWhenVisible delay={0.05}>
          <button
            onClick={() => navigate(-1)}
            className="mt-10 mb-10 inline-flex items-center gap-2 bg-[rgb(var(--color-primary))] text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-[rgb(var(--color-secondary))] transition"
          >
            ← Volver atrás
          </button>
        </FadeInWhenVisible>

        {/* Título y descripción */}
        <FadeInWhenVisible delay={0.1}>
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-[rgb(var(--color-primary))] mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-[rgb(var(--color-text-muted))] max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Galería */}
        {project.gallery?.length > 1 && (
          <FadeInWhenVisible delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="rounded-3xl shadow-xl w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </FadeInWhenVisible>
        )}

        {/* Detalles */}
        <FadeInWhenVisible delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              "type",
              "year",
              "client",
              "targetAudience",
              "duration",
              "role",
            ].map((field, i) => (
              <div
                key={i}
                className="bg-[rgb(var(--color-card))] p-6 rounded-2xl border border-[rgb(var(--color-border))] shadow-sm backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-[rgb(var(--color-primary))] mb-1 capitalize">
                  {field === "targetAudience"
                    ? "Público objetivo"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </h3>
                <p>{project[field]}</p>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Tech stack */}
        <FadeInWhenVisible delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[rgb(var(--color-primary))] mb-6">
              Tecnologías utilizadas
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[rgb(var(--color-secondary))] text-white px-4 py-2 rounded-full text-sm shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  {techIcons[tech] || null} {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Responsabilidades y objetivos */}
        <FadeInWhenVisible delay={0.5}>
          <div className="grid sm:grid-cols-2 gap-12 mb-20">
            {["responsibilities", "goals"].map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-[rgb(var(--color-primary))] mb-4">
                  {section === "responsibilities"
                    ? "Responsabilidades"
                    : "Objetivos"}
                </h2>
                <ul className="list-disc list-inside text-[rgb(var(--color-text-muted))] space-y-2">
                  {project[section].map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Highlights */}
        {project.highlights?.length > 0 && (
          <FadeInWhenVisible delay={0.6}>
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-[rgb(var(--color-primary))] mb-4">
                Logros y Reconocimientos
              </h2>
              <ul className="list-disc list-inside text-[rgb(var(--color-text-muted))] space-y-2">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeInWhenVisible>
        )}

        {/* Botón final */}
        <FadeInWhenVisible delay={0.7}>
          <div className="text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[rgb(var(--color-secondary))] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[rgb(var(--color-primary))] transition shadow-xl hover:scale-105"
            >
              Ver proyecto en vivo
            </a>
          </div>
        </FadeInWhenVisible>
      </main>

      <Footer />
    </div>
  );
}

export default ProjectDetail;

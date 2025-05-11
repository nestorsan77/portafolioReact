import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import TechStackSection from "../components/TechStackSection";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

// 🎯 Cursor personalizado
import CursorFollower from "../components/decoration/CursorFollower";
// 💻 Laptop flotante animada
import FloatingLaptop from "../components/decoration/FloatingLaptop";

function Home() {
  return (
    <div className="min-h-screen bg-[rgb(var(--color-background))] flex flex-col text-[rgb(var(--color-text))] relative">
      {/* 🌐 Navbar */}
      <Navbar />

      {/* 🌟 Cursor visual */}
      <CursorFollower />

      {/* 💻 Laptop flotante */}
      <FloatingLaptop />

      {/* 🎯 Hero / Banner Principal */}
      <HeroBanner />

      {/* 💻 Stack Tecnológico */}
      <TechStackSection />

      {/* 🔍 Contenido principal */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          {/* 🧑‍💼 Experiencia Laboral */}
          <section id="experience" className="mb-24">
            <ExperienceSection />
          </section>

          {/* 🎓 Educación */}
          <section id="education" className="mb-24">
            <EducationSection />
          </section>

          {/* 💼 Proyectos Destacados */}
          <section id="projects" className="mb-24">
            <h2 className="text-4xl font-bold text-[rgb(var(--color-primary))] mb-12 text-center">
              Mis Proyectos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  delay={index * 0.15}
                  real={project.real}
                />
              ))}
            </div>
          </section>

          {/* 📞 Contacto */}
          <section id="contact" className="mb-20">
            <Contact />
          </section>
        </div>
      </main>

      {/* ⚓ Footer */}
      <Footer />
    </div>
  );
}

export default Home;

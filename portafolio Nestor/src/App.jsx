import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import TechStackSection from "./components/TechStackSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

// 🎯 Cursor personalizado
import CursorFollower from "./components/decoration/CursorFollower";
// 💻 Laptop flotante animada
import FloatingLaptop from "./components/decoration/FloatingLaptop";

function App() {
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
              <ProjectCard
                title="Proyecto 1"
                description="Diseño y desarrollo de un sitio web para una empresa de diseño de interiores."
                image="/assets/img/proyectos/proyecto1.jpg"
                link="https://github.com/proyecto1"
              />
              <ProjectCard
                title="Proyecto 2"
                description="Aplicación de seguimiento de tareas con React y Firebase."
                image="/assets/img/proyectos/proyecto2.jpg"
                link="https://github.com/proyecto2"
              />
              <ProjectCard
                title="Proyecto 3"
                description="Landing page animada con Framer Motion y GSAP."
                image="/assets/img/proyectos/proyecto3.jpg"
                link="https://github.com/proyecto3"
              />
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

export default App;

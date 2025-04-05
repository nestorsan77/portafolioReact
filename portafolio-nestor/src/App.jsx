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
                title="Energía Solar Canarias"
                description="Diseño y desarrollo de una PWA para una empresa de energía solar encargado del backend, desarrollo en kotlin y en swift."
                image="/src/assets/img/portafolio/esc.webp"
                link="https://play.google.com/store/apps/details?id=com.galaga.esc_android"
              />
              <ProjectCard
                title="dosxdos"
                description="Diseño y desarrollo de una PWA de gestión en conjunto con el CRM para una empresa de diseño de interiores de marcas premium."
                image="/src/assets/img/portafolio/dosxdos.webp"
                link="https://play.google.com/store/apps/details?id=com.dosxdos.dosxdos.app"
              />
              <ProjectCard
                title="Activiza"
                description="Desarrollo de una aplicación en kotlin para la gestión de los entrenamientos y de rutinas de los usuarios en los gimnasios."
                image="/src/assets/img/portafolio/activiza.gif"
                link="https://github.com/TFCUNIRFP-NDD/Frontend-activiza/blob/main/Activiza-proyect.pdf"
              />
              <ProjectCard
                title="Games&Doc"
                description="Diseño y desarrollo de una web Blog de noticias de videojuegos y tecnología, con PHP y JavaScript."
                image="/src/assets/img/portafolio/gamesdoc.gif"
                link="https://gamesanddoc.000webhostapp.com/body.php"
              />
              <ProjectCard
                title="El juego del minotauro"
                description="Desarrollo y creación de un Videojuego en 2D desarrollado con Unity y C# para PC."
                image="/src/assets/img/portafolio/minotaur.gif"
                link="https://mega.nz/file/wRMTDAiR#J98TyCh2kVqxVzQXXVeglwl-qn2AhhvjibIhX0r1QDE"
              />
              <ProjectCard
                title="Piedra, Papel, Tijeras, lagarto, Spock"
                description="Desarrollo de un juego en JavaScript de piedra, papel, tijeras, lagarto y Spock."
                image="/src/assets/img/portafolio/piedra-papel-tijeras.gif"
                link="https://github.com/GDAM-PSP/AE1-Juego-piedra-papel-o-tijeras"
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

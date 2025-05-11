import React from "react";
import { FiExternalLink, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-light))] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        {/* Izquierda */}
        <div className="text-center sm:text-left">
          <p className="text-sm">
            &copy; 2025 Nestor Calderón Pérez. Todos los derechos reservados.
          </p>
        </div>

        {/* Derecha: enlaces */}
        <div className="flex items-center gap-5 text-[rgb(var(--color-text-light))] text-xl">
          <a
            href="mailto:nestorsan77@gmail.com"
            className="hover:text-[rgb(var(--color-secondary))] transition"
            aria-label="Email"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/nestorsan77"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgb(var(--color-secondary))] transition"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nestorsan77"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgb(var(--color-secondary))] transition"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://nestorcalderon.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[rgb(var(--color-secondary))] transition"
            aria-label="Sitio personal"
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

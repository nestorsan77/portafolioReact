import React, { useState } from "react";
import { useThemeStore } from "../store/useThemeStore";
import "../styles/theme.css";

const navItems = [
  { label: "Sobre mí", href: "#about" },
  { label: "Tecnologías", href: "#tech" },
  { label: "Experiencia", href: "#experience" },
  { label: "Educación", href: "#education" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { setThemeByName, theme } = useThemeStore();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-text-light))] shadow-md"
      data-theme={theme}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-wide hover:text-[rgb(var(--color-secondary))] transition"
        >
          Mi Portafolio
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[rgb(var(--color-secondary))] transition duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center space-x-2 ml-6">
            <button
              onClick={() => setThemeByName("lime")}
              className="w-5 h-5 rounded-full bg-[#84cc16] border-2 border-white hover:scale-110 transition"
              title="Lime"
            />
            <button
              onClick={() => setThemeByName("cyberpunk")}
              className="w-5 h-5 rounded-full bg-[#ff00cc] border-2 border-white hover:scale-110 transition"
              title="Cyberpunk"
            />
            <button
              onClick={() => setThemeByName("sunset")}
              className="w-5 h-5 rounded-full bg-[#f59e0b] border-2 border-white hover:scale-110 transition"
              title="Sunset"
            />
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="relative w-8 h-6 group">
            <span
              className={`absolute h-0.5 w-full bg-[rgb(var(--color-text-light))] transition duration-300 ${
                isOpen ? "rotate-45 top-2.5" : "top-0"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-[rgb(var(--color-text-light))] transition duration-300 ${
                isOpen ? "opacity-0" : "top-2.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-[rgb(var(--color-text-light))] transition duration-300 ${
                isOpen ? "-rotate-45 bottom-2.5" : "bottom-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-[rgb(var(--color-background))] border-t border-gray-200 px-6 py-8 space-y-4 text-[rgb(var(--color-text))] font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className="block hover:text-[rgb(var(--color-secondary))] transition"
            >
              {item.label}
            </a>
          ))}
          <div className="flex space-x-3 pt-4">
            <button
              onClick={() => setThemeByName("lime")}
              className="w-5 h-5 rounded-full bg-[#84cc16] border border-gray-400"
              title="Lime"
            />
            <button
              onClick={() => setThemeByName("cyberpunk")}
              className="w-5 h-5 rounded-full bg-[#ff00cc] border border-gray-400"
              title="Cyberpunk"
            />
            <button
              onClick={() => setThemeByName("sunset")}
              className="w-5 h-5 rounded-full bg-[#f59e0b] border border-gray-400"
              title="Sunset"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

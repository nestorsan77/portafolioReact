import React, { useRef, useState } from "react";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiDownload,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import FadeInWhenVisible from "./utils/FadeInWhenVisible";

const contactLinks = [
  { icon: <FiMail />, text: "Email", href: "mailto:nestorsan77@gmail.com" },
  {
    icon: <FiLinkedin />,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/nestor-calderon-perez-895034270/",
  },
  {
    icon: <FiGithub />,
    text: "GitHub",
    href: "https://github.com/nestorsan77",
  },
  {
    icon: <FiDownload />,
    text: "CV",
    href: "assets/pdf/cv-2025.pdf",
    download: true,
  },
];

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[rgb(var(--color-card))] to-[rgb(var(--color-background))] border-t border-[rgb(var(--color-border))]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeInWhenVisible direction="up">
          <h2 className="text-5xl font-extrabold text-[rgb(var(--color-primary))] text-center mb-4">
            ¡Hablemos!
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="up" delay={0.2}>
          <p className="text-lg text-[rgb(var(--color-muted))] mb-16 text-center max-w-2xl mx-auto">
            Ya sea que tengas una idea, un proyecto o simplemente quieras
            saludar, estoy a un mensaje de distancia.
          </p>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ENLACES DE CONTACTO */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {contactLinks.map((link, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1} direction="up">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  download={link.download}
                  className="bg-[rgb(var(--color-card))] hover:bg-[rgba(var(--color-secondary-rgb),0.1)] border border-[rgb(var(--color-border))] rounded-2xl shadow-sm hover:shadow-md p-6 flex flex-col items-center transition-all duration-300 group"
                >
                  <span className="text-3xl text-[rgb(var(--color-primary))] group-hover:text-[rgb(var(--color-secondary))] transition">
                    {link.icon}
                  </span>
                  <span className="mt-4 font-medium text-[rgb(var(--color-primary))] text-lg">
                    {link.text}
                  </span>
                </a>
              </FadeInWhenVisible>
            ))}
          </div>

          {/* FORMULARIO */}
          <FadeInWhenVisible delay={0.3} direction="up">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-[rgb(var(--color-card))] border border-[rgb(var(--color-border))] rounded-2xl shadow-sm p-8 space-y-6"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[rgb(var(--color-text))] mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="rounded-lg border border-[rgb(var(--color-border))] focus:ring-[rgb(var(--color-secondary))] focus:border-[rgb(var(--color-secondary))] px-4 py-2 transition"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[rgb(var(--color-text))] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="rounded-lg border border-[rgb(var(--color-border))] focus:ring-[rgb(var(--color-secondary))] focus:border-[rgb(var(--color-secondary))] px-4 py-2 transition"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[rgb(var(--color-text))] mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="rounded-lg border border-[rgb(var(--color-border))] focus:ring-[rgb(var(--color-secondary))] focus:border-[rgb(var(--color-secondary))] px-4 py-2 transition resize-none"
                />
              </div>

              {/* BOTÓN */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                    ? "bg-red-500 text-white"
                    : "bg-[rgb(var(--color-primary))] text-white hover:bg-[rgb(var(--color-primary-hover))]"
                }`}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
              >
                {status === "success" ? (
                  <>
                    <FiCheckCircle /> ¡Enviado!
                  </>
                ) : status === "error" ? (
                  <>Error al enviar</>
                ) : (
                  <>
                    <FiSend />{" "}
                    {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                  </>
                )}
              </motion.button>
            </form>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

export default Contact;

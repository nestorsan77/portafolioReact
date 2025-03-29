import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

// Inicialización de i18next
i18n
  .use(initReactI18next) // Pasar el objeto i18n a react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // Carga las traducciones en inglés
      },
      es: {
        translation: translationES, // Carga las traducciones en español
      },
    },
    lng: "en", // Idioma por defecto
    fallbackLng: "en", // Idioma de reserva si no se encuentra una traducción
    interpolation: {
      escapeValue: false, // No necesitamos escapar valores si estamos usando React
    },
  });

export default i18n;

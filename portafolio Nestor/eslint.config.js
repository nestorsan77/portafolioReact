import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignora la carpeta dist
  { ignores: ["dist"] },

  {
    // Aplica a todos los archivos .js y .jsx
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: 2020, // Utiliza la versión ECMA-2020 de JS
      globals: globals.browser, // Define los globals para navegador
      parserOptions: {
        ecmaVersion: "latest", // Usar la versión más reciente de ECMAScript
        ecmaFeatures: { jsx: true }, // Habilitar soporte para JSX
        sourceType: "module", // Usar módulos ES
      },
    },

    plugins: {
      "react-hooks": reactHooks, // React Hooks plugin
      "react-refresh": reactRefresh, // React Refresh plugin para hot reloading
    },

    rules: {
      ...js.configs.recommended.rules, // Reglas recomendadas de ESLint
      ...reactHooks.configs.recommended.rules, // Reglas recomendadas de React Hooks

      // Regla personalizada: no permite variables no utilizadas, a menos que sigan el patrón de mayúsculas (por ejemplo, constantes)
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],

      // Advertencia si no sigues la recomendación de exportar solo componentes con React Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Otras reglas adicionales que podrías necesitar agregar o ajustar según el proyecto
      "react/prop-types": "off", // Desactiva la verificación de tipos de props si usas TypeScript
      "react/react-in-jsx-scope": "off", // No necesitas React importado en JSX si usas React 17+
    },
  },
];

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // necesario para acceso desde red externa
    allowedHosts: true, // ✅ permite ngrok y otros dominios
  },
});

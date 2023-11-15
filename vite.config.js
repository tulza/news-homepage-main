import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/news-homepage-main/",

  scripts: {
    build: "vite build",
    preview: "vite preview",
  },

});

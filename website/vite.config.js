import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/2025/group7/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
});

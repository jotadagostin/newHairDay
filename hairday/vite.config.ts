// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import svgr from "vite-plugin-svgr";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(), svgr(), react()],
// });
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
});

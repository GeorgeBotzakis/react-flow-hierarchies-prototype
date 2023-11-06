import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // {
    //   // default settings on build (i.e. fail on error)
    //   ...eslint(),
    //   apply: "build",
    // },
  ],
  // css: {
  //   modules: {
  //     generateScopedName: function (name, filename, css) {
  //       const path = require("path");
  //       const file = path.basename(filename.split("?")[0], ".module.scss");
  //       // from https://github.com/madyankin/postcss-modules/main/src/scoping.js#L39
  //       const hash = stringHash(css).toString(36).substr(0, 5);

  //       return `${file}_${name}__${hash}`;
  //     },
  //   },
  // },
});

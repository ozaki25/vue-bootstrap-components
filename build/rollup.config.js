import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

export default {
  input: "src/index.js",
  output: {
    file: "dist/my-component.min.js",
    format: "esm"
  },
  plugins: [
    vue({
      css: true
    }),
    postcss({
      plugins: [autoprefixer()]
    }),
    commonjs(),
    terser()
  ]
};

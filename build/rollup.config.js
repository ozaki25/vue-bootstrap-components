import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

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
    commonjs(),
    terser()
  ]
};

import vue from "rollup-plugin-vue";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/my-component.js",
    format: "esm"
  },
  plugins: [vue({ css: true }), commonjs()]
};

import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/wrapper.js",
  output: {
    name: "MyComponent",
    exports: "named"
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    commonjs(),
    buble()
  ]
};

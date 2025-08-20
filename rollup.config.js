/**
 * @description Rollup bundle config
 */

import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "./src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    sourcemap: true,
    inlineDynamicImports: true,
  },
  cache: false,
  plugins: [
    css({ output: "trejocode-uikit.css" }),
    commonjs(),
    resolve(),
    typescript({
      tsconfig: "./tsconfig.build.json",
    }),
  ],
  external: ["react", "react-dom"],
};

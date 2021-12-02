/**
 * @description Rollup bundle base config
 */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import WindiCSS from 'rollup-plugin-windicss';
import url from '@rollup/plugin-url';
import css from 'rollup-plugin-import-css';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    url(),
    ...WindiCSS(),
    typescript(),
    css({ output: 'trejocode-uikit.css', minify: true }),
  ],
};

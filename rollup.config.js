/**
 * @description Rollup bundle base config
 */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import css from 'rollup-plugin-import-css';
import path from 'path';
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
    typescript({ useTsconfigDeclarationDir: true }),
    typescript(),
    postcss({
      extract: path.resolve('dist/woonkly-uikit.css'),
      minimize: true,
      sourceMap: true,
    }),
    css({ output: 'trejocode-uikit.css', minify: true }),
  ],
};

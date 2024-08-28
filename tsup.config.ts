/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  esbuildOptions(options) {
    options.platform = 'node';
    options.target = ['es2020'];
    options.resolveExtensions = ['.js', '.ts'];
    options.external = []; // Make sure no package is treated as external
  },
  format: ['cjs', 'esm'],
  legacyOutput: false,
  outDir: 'dist',
  silent: false,
  skipNodeModulesBundle: false,
  sourcemap: true,
  splitting: false,
  noExternal: [ /(.*)/ ],
});

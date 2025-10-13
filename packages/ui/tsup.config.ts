import { defineConfig } from 'tsup';
import {resolve} from 'path'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: './dist',
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'default',
  },
  esbuildOptions: (options) => {
    options.alias = {
      '@': resolve(__dirname, 'src'),
    };
  },
});

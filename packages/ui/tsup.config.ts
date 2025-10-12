import { defineConfig } from 'tsup';
// TODO fix warrning with module import "path"
import path from 'path';

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
      '@': path.resolve(__dirname, 'src'),
    };
  },
});

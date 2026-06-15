import { defineConfig } from 'vite';

// base: './' keeps built asset paths relative, so the bundle is servable
// straight from the lattice (a static file tree) with no host assumptions.
export default defineConfig({
  base: './',
});

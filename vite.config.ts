import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          frozenPipe: path.resolve(__dirname, 'frozen-pipe-repair.html'),
          slabLeak: path.resolve(__dirname, 'slab-leak-repair.html'),
          emergencyShutoff: path.resolve(__dirname, 'emergency-water-shutoff.html'),
          serviceAreas: path.resolve(__dirname, 'service-areas.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          blogBurstPipe: path.resolve(__dirname, 'blog-burst-pipe-repair-lynnwood-wa.html'),
          blogFrozenPipe: path.resolve(__dirname, 'blog-frozen-pipe-repair-thawing-lynnwood-wa.html'),
          blogSlabLeak: path.resolve(__dirname, 'blog-slab-leak-detection-repair-lynnwood-wa.html'),
          blogEmergencyShutoff: path.resolve(__dirname, 'blog-emergency-water-shutoff-valve-guide.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

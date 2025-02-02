import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig({
   plugins: [react(), svgr()],
   resolve: {
      alias: {
         '@src': resolve(__dirname, './src'),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            api: 'modern-compiler',
            silenceDeprecations: ['legacy-js-api'],
            additionalData: `
          @use "@src/app/styles/forward.scss" as *;
        `,
         },
      },
   },
});

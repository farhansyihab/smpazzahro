import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { VitePWA } from 'vite-plugin-pwa'
import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VitePWA({
      manifest:{
        icons: [
          {src: "/icons/48.png", sizes: "48x48", type: "image/png", purpose: "any maskable"},
          {src: "/icons/72.png", sizes: "72x72", type: "image/png", purpose: "any maskable"},
          {src: "/icons/96.png", sizes: "96x96", type: "image/png", purpose: "any maskable"},
          {src: "/icons/144.png", sizes: "144x144", type: "image/png", purpose: "any maskable"},
          {src: "/icons/192.png", sizes: "192x192", type: "image/png", purpose: "any maskable"},
          {src: "/icons/512.png", sizes: "512x512", type: "image/png", purpose: "any maskable"},
        ]
      }
    }),
    ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-build-classic' ) } )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath( new URL( './src', import.meta.url ) )
    }
  }
})
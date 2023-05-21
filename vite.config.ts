import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { comlink } from "vite-plugin-comlink"
import svgr from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), comlink(), svgr()],
  worker: {
    plugins: [comlink()],
  },
  server: {
    port: 3500,
  },
})

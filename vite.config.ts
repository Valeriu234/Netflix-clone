import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'; // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),eslint()],
})

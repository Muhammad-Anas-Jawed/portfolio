import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative assets keep the same build deployable on GitHub Pages (/portfolio/)
// as well as Vercel/root hosting.
export default defineConfig({
  plugins: [react()],
  base: './',
})

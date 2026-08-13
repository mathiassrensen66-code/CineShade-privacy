import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function stripCrossOriginFromIndexHtml(): Plugin {
  return {
    name: 'strip-crossorigin-from-index-html',
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin(="anonymous")?/g, '')
    },
  }
}

export default defineConfig({
  plugins: [react(), stripCrossOriginFromIndexHtml()],
  base: '/',
})

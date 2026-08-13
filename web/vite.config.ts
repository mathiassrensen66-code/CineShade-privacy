import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Same-origin deploy: crossorigin on module tags can break loading in some browsers/CDNs. */
function stripCrossorigin() {
  return {
    name: 'strip-crossorigin',
    transformIndexHtml(html: string) {
      return html.replace(/\s+crossorigin/g, '')
    },
  }
}

export default defineConfig({
  plugins: [react(), stripCrossorigin()],
  base: '/',
  build: {
    modulePreload: false,
  },
})

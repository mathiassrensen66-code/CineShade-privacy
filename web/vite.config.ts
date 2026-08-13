import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const criticalCss = `
html,body,#root{min-height:100%;margin:0}
body{background:#050506;color:#f2ebe0;font-family:system-ui,sans-serif}
#boot-fallback{padding:2rem;text-align:center;line-height:1.5}
`.trim()

function siteHtml() {
  return {
    name: 'site-html',
    transformIndexHtml(html: string) {
      return html
        .replace(/\s+crossorigin/g, '')
        .replace(
          '</head>',
          `<style>${criticalCss}</style>\n    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />\n  </head>`,
        )
        .replace(
          '<div id="root"></div>',
          `<div id="root"><div id="boot-fallback">Loading CineShade…</div></div>`,
        )
    },
  }
}

export default defineConfig({
  plugins: [react(), siteHtml()],
  base: '/',
  build: {
    assetsDir: 'static',
    modulePreload: false,
  },
})

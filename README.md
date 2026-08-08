# CineShade site

React landing page + privacy policy for [CineShade](https://cineshade.app).

| Page | URL |
|------|-----|
| Home | https://cineshade.app |
| Privacy (React) | https://cineshade.app/privacy |
| Privacy (Play Console) | https://cineshade.app/privacy.html |

Source lives in `/web` (Vite + React).

## Deploy on Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new)
2. Set **Root Directory** to `web`
3. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy

## Connect cineshade.app

In Vercel → Project → **Settings** → **Domains**:

1. Add `cineshade.app`
2. Add `www.cineshade.app` (optional; redirect to apex)

At your domain registrar, set DNS:

| Type | Name | Value |
|------|------|--------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

(Vercel shows the exact records after you add the domain — use those if they differ.)

SSL is automatic once DNS propagates (usually a few minutes to 48 hours).

## Local dev

```powershell
cd web
npm install
npm run dev
```

## Google Play

Use this privacy policy URL in Play Console:

`https://cineshade.app/privacy.html`

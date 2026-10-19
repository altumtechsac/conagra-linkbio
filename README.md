# CONAGRA · Link in bio

Página de redes sociales de Conagra SAC (HTML + CSS + JS, sin build) para GitHub Pages.

## Estructura
```
conagra-linkbio/
├── index.html
├── css/styles.css
└── js/
    ├── config.js   ← AQUÍ se editan redes, WhatsApp, horario y URL del QR
    └── main.js
```

## Probar en local (VS Code)
1. Abre la carpeta en VS Code.
2. Instala la extensión **Live Server** → clic derecho en `index.html` → *Open with Live Server*.

## Subir a GitHub Pages (organización)
```bash
git init
git add .
git commit -m "feat: linkbio Conagra"
git branch -M main
git remote add origin https://github.com/<ORGANIZACION>/<REPO>.git
git push -u origin main
```
Luego en GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.

URL resultante:
- Repo con otro nombre → `https://<organizacion>.github.io/<repo>/`
- Repo llamado `<organizacion>.github.io` → `https://<organizacion>.github.io/`

> Si no te aparece *Pages* en Settings, pide a un owner de la org que te dé rol **Maintain** o **Admin** en el repo.

## Antes de imprimir el QR
Pon la URL final en `CONFIG.qrUrl` (config.js) para que el QR no dependa de dónde se abra la página.

## Pendientes
- [ ] Usuario real de TikTok
- [ ] Confirmar qué Facebook/Instagram usar (el sitio tiene dos de cada uno)
- [ ] Confirmar horario de atención

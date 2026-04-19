🚀 Sidera Path Landing Page Guide

This guide describes the static landing-page we created, how it maps to the client theme, build and run instructions, and deployment options.

Directory structure (created)

```plaintext
/landing-page
├── index.html                  # Loads the built bundle (dist/script.js)
├── privacy.html                # Privacy Policy (required by app stores)
├── support.html                # Support page (required by Apple)
├── terms.html                  # Optional Terms of Service
├── style.css                   # Theme + layout styles (dark by default)
├── script.tsx                  # React + TypeScript entry (source)
├── package.json                # Build / start scripts
├── tsconfig.json               # TypeScript config
├── dist/                       # Build output (generated)
├── robots.txt
├── assets/                     # Images and badges (logo, og-image, stores)
└── .well-known/                # apple-app-site-association, assetlinks.json
```

Key file notes

- `index.html`: single static entry that loads `dist/script.js`.
- `script.tsx`: TSX entrypoint matching the project's TypeScript usage.
- `style.css`: dark theme; colors pulled from `client` (primary `#0b0c1d`, nav `#13152b`).
- `.well-known/`: contains `apple-app-site-association` and `assetlinks.json` for Universal/App Links.

Required meta tags (already in `index.html`)

```html
<meta name="apple-itunes-app" content="app-id=YOUR_APP_ID">
<meta property="og:title" content="Sidera Path">
<meta property="og:description" content="Daily insights & friends">
<meta property="og:image" content="https://yourdomain.com/assets/og-image.svg">
<meta property="og:url" content="https://yourdomain.com">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Local build & run (static-only)

1) Ensure Node.js is installed (macOS: use `nvm` or Homebrew). Example `nvm` install:

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install --lts
nvm use --lts
```

2) Install dependencies and build:

```bash
cd landing-page
npm install
npm run build
```

3) Serve statically for local testing (no backend required):

Use one of the following depending on your OS and shell.

macOS / Linux (bash / zsh):

```bash
# simplest: bind to all interfaces on port 3000 (some serve versions accept just a port)
npx serve -l 3000

# recommended (explicit scheme + host/port):
npx serve --listen "tcp://0.0.0.0:3000" --single .
```

Windows (PowerShell, CMD, Git Bash):

```powershell
# PowerShell / CMD: prefer quoting the endpoint
npx serve --listen "tcp://0.0.0.0:3000" --single .

# Git Bash: use single quotes to avoid shell interpolation
npx serve --listen 'tcp://0.0.0.0:3000' --single .
```

Notes:
- Some older `serve` versions accepted `-l 3000 --host 0.0.0.0`; modern `serve` uses `--listen` and expects a scheme. If you see `unknown or unexpected option: --host` it's because `--host` is not supported by your `serve` CLI.
- On Windows shells quoting behaviour differs; if you get parsing errors, try switching to `http-server` (below) or wrap the endpoint in single or double quotes appropriate for your shell.

Alternative: `http-server` (works consistently across OSes and accepts host flag):

```bash
npx http-server -p 3000 -a 0.0.0.0
```

Open http://<your-local-ip>:3000 on your phone

HTTPS & app-link testing

For Universal Links and App Links the site must be served over HTTPS. Options:

- Deploy to Firebase Hosting, Netlify, or Vercel (they provide HTTPS automatically).
- Or expose your local server via `ngrok`:

```bash
ngrok http 3000
```

Deployment options

- Firebase Hosting: `firebase init hosting` (select `/landing-page` as the public dir) then `firebase deploy --only hosting`.
- Netlify/Vercel: connect the repo or drag-and-drop the `dist`/`landing-page` folder and set the build command to `npm run build` and publish directory to `/landing-page` or root depending on your flow.

Files to replace before submission

- `assets/screenshot-1.png`: placeholder — add real screenshots.
- `assets/app-store.svg` and `assets/play-store.svg`: replace with official badges and links.
- `privacy.html` and `support.html`: update legal text and support email.

Git & CI

```bash
git add landing-page
git commit -m "Add static Sidera Path landing page"
git push origin <branch>
```

If you want, I can commit these changes and open a PR, or run a build and local preview (once Node is available).


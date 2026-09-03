# INSTALL.md — Aster

## Prerequisites

| Tool | Minimum version | Check |
|------|----------------|-------|
| Deno | ≥ 1.46 | `deno --version` |
| Node.js | ≥ 20 | `node --version` |
| npm | ≥ 10 | `npm --version` |

## Step-by-step setup

### 1. Install dependencies

```bash
bash install.sh
```

This runs three phases:
1. `npm install` — installs Tailwind CSS and font packages (@fontsource)
2. `npx tailwindcss` — compiles `static/styles.css` → `static/styles.min.css`
3. `deno cache` — pre-fetches Fresh and Preact imports

The script is idempotent — safe to re-run.

### 2. Run the application

**Production:**
```bash
deno task start
```

**Development (with hot reload):**
```bash
deno task dev
```

The server binds `0.0.0.0` and reads the `PORT` environment variable (default: `8000`).

### 3. Verify

Open `http://localhost:8000` in a browser. You should see:
- A hero section with the tagline "Light carved into silence"
- Three album cards below
- Navigation to `/albums` and individual album pages

## Port configuration

```bash
PORT=3000 deno task start   # Bind to port 3000
```

## Data

All album and photo data lives in `data/albums.json` and `data/photos.json`.
No database setup is required. Photo placeholders are generated as inline SVGs
at render time — no external image hosting needed.

## Fonts

Instrument Serif and Schibsted Grotesk are self-hosted via `@fontsource` packages.
No CDN font requests are made at runtime.

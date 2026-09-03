# USAGE.md — Aster

## Browsing the portfolio

### Home page (`/`)
The landing page introduces Aster with an oversized editorial headline and
three album cards. Each card shows a gradient placeholder representing the
album's visual style.

### Albums gallery (`/albums`)
Lists all albums in a responsive grid. Click any album card to enter its
detail view.

### Album detail (`/albums/:id`)
Displays every photo in the album in a masonry-style grid. Each photo
shows a caption on hover.

### Lightbox
Click any photo to open the full‑size lightbox viewer. Navigate between
photos with:
- **Arrow keys** (← →)
- **On‑screen buttons** (prev / next)
- **Escape** to close

### Dark mode
Toggle light/dark themes via the sun/moon icon in the top‑right of every
page. Your preference is saved to `localStorage` and restored on return.

The initial theme respects your OS `prefers-color-scheme` setting on first
visit.

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `←` / `→` | Navigate lightbox photos |
| `Escape` | Close lightbox |

## Accessibility

- All images have descriptive `alt` text
- Full keyboard navigation support
- Visible focus rings on all interactive elements
- Semantic HTML landmarks (`<nav>`, `<main>`, `<footer>`)
- Respects `prefers-reduced-motion`

## Responsive design

The layout adapts to mobile (320px+), tablet, and desktop widths.
Touch targets meet 44×44px minimum on all interactive controls.

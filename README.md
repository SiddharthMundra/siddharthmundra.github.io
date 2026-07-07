# siddharthmundra.github.io

Personal portfolio site — static HTML inspired by [vishruthb.github.io](https://vishruthb.github.io).

The previous Jekyll + Minimal theme is preserved in `../backup/minimal-jekyll-theme/`.

## Local preview

```bash
cd siddharthmundra.github.io
python3 -m http.server 4000
```

Open http://localhost:4000

## Structure

- `index.html` — homepage
- `projects/` — projects page
- `experience/` — experience page
- `styles.css` — theme styles (light/dark mode)
- `site.js` — theme toggle, inline notes, san diego clock
- `copy-email.js` — click-to-copy email

## Deploy

Push to `main` on GitHub. `.nojekyll` disables Jekyll so GitHub Pages serves the static files directly.

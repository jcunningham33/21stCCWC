# Images

The logo SVGs in this folder (`logo.svg`, `logo-mark.svg`, `favicon.svg`)
are an approximation of the church's brush‑stroke cross artwork built
in pure SVG so the site has a working logo out of the box.

To use the **real artwork**, drop the original file(s) here using the
same filenames and the site will pick them up automatically:

- `logo.svg` — full lockup (used on the About page top, etc., if added later).
- `logo-mark.svg` — small square/round mark used in the header.
- `favicon.svg` — browser tab icon.

If the original is a PNG/JPG instead of SVG, save it as e.g. `logo-mark.png`
and update the `<img src="...logo-mark.svg">` reference in each HTML file
to `logo-mark.png`. (There are 7 references — one per page including 404.)

For best results in the header, use a square mark roughly 256×256.

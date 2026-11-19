# ASMBLY decks

Clicker-ready presenter for the Nov 19 talks. Static files only: open
`index.html` locally (works offline from file://) or serve via GitHub Pages.

- Clicker next/back = PageDown/PageUp. Play button (F5/Esc) toggles fullscreen,
  screen button (B or .) blacks out. First press goes fullscreen on slide 1.
- `G` overview grid, number + Enter to jump, `I` counter, `M` mute videos.
- URL keeps position: `#sehun-choi/12`. Reloading resumes on that slide.

Add a deck: put `01.jpg`… (2560×1440) and `thumbs/` in `decks/<id>/`, add an
entry to `decks.js`. A slide with motion gets `video: 'NN.mp4'` (H.264, the
still doubles as its poster).

`src/` (ignored) holds the raw exports: Canva PDF → pdftoppm → JPEG.

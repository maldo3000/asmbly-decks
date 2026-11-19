// Deck manifest. Plain JS (not JSON) so index.html also works offline from file://.
// Each slide: img (still, also the video poster), optional video, loop (default true), mute.
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i + 1));
const pad = n => String(n).padStart(2, '0');
const VIDEO_NLL = [1, 3, 5, 6, 7, 8, 9, 10, 11, 19];

window.DECKS = [
  {
    id: 'new-limit-labs',
    title: 'Synthetic Creativity',
    speaker: 'New Limit // Labs',
    base: 'decks/new-limit-labs',
    bg: '#000',
    // VIDEO lists slides whose Figma video was recorded off the canvas (text overlays baked in).
    slides: range(23, n => ({ img: `${pad(n)}.jpg`, thumb: `thumbs/${pad(n)}.jpg`,
      ...(VIDEO_NLL.includes(n) ? { video: `${pad(n)}.mp4` } : {}) })),
  },
  {
    id: 'sehun-choi',
    title: 'From "What" to "How"',
    speaker: 'Sehun Choi',
    base: 'decks/sehun-choi',
    bg: '#f2f2f2',
    slides: range(35, n => ({ img: `${pad(n)}.jpg`, thumb: `thumbs/${pad(n)}.jpg` })),
  },
];

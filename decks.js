// Deck manifest. Plain JS (not JSON) so index.html also works offline from file://.
// Each slide: img (still, also the video poster), optional video, loop (default true), mute.
const range = (n, f) => Array.from({ length: n }, (_, i) => f(i + 1));
const pad = n => String(n).padStart(2, '0');

window.DECKS = [
  {
    id: 'sehun-choi',
    title: 'From "What" to "How"',
    speaker: 'Sehun Choi',
    base: 'decks/sehun-choi',
    bg: '#f2f2f2',
    slides: range(35, n => ({ img: `${pad(n)}.jpg`, thumb: `thumbs/${pad(n)}.jpg` })),
  },
];

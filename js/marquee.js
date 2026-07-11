/* ── marquee.js — Scrolling text strip ── */

(function () {
  'use strict';

  const ITEMS = [
    { text: 'Find. Understand. Apply. Repeat.', bright: true },
    { text: 'Power through persistence and perseverance.' },
    { text: 'Electron + React', bright: true },
    { text: 'Desktop Tooling' },
    { text: 'Systems Programming', bright: true },
    { text: 'C · Node.js · Vite' },
    { text: 'Open to Opportunities', bright: true },
    { text: 'RoseJam Suite' },
    { text: 'Offline-First Apps', bright: true },
    { text: 'ffmpeg · SQLite · IPC' },
  ];

  const track = document.getElementById('marquee-track');
  if (!track) return;

  function buildItems() {
    return ITEMS.map(item => `
      <span class="marquee-item">
        <span class="marquee-dot"></span>
        <span class="marquee-text${item.bright ? ' bright' : ''}">${item.text}</span>
      </span>`).join('');
  }

  // Duplicate for seamless loop
  const html = buildItems();
  track.innerHTML = html + html;
})();

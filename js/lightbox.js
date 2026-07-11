(function () {
  'use strict';

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-inner">
      <button class="lightbox-close" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8">
          <line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/>
        </svg>
      </button>
      <button class="lightbox-nav prev" aria-label="Previous">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8">
          <polyline points="9,2 4,7 9,12"/>
        </svg>
      </button>
      <img class="lightbox-img" src="" alt="">
      <button class="lightbox-nav next" aria-label="Next">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8">
          <polyline points="5,2 10,7 5,12"/>
        </svg>
      </button>
      <div class="lightbox-dots"></div>
      <p class="lightbox-caption"></p>
    </div>`;
  document.body.appendChild(lb);

  const img      = lb.querySelector('.lightbox-img');
  const caption  = lb.querySelector('.lightbox-caption');
  const dotsWrap = lb.querySelector('.lightbox-dots');
  const btnPrev  = lb.querySelector('.lightbox-nav.prev');
  const btnNext  = lb.querySelector('.lightbox-nav.next');
  const btnClose = lb.querySelector('.lightbox-close');

  let gallery = [], current = 0;

  function open(images, index) {
    gallery = images; current = index;
    render();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function render() {
    const item = gallery[current];
    img.src = item.src;
    img.alt = item.alt || '';
    caption.textContent = item.alt || '';
    btnPrev.classList.toggle('hidden', gallery.length <= 1);
    btnNext.classList.toggle('hidden', gallery.length <= 1);
    dotsWrap.innerHTML = gallery.length > 1
      ? gallery.map((_, i) =>
          `<span class="lightbox-dot${i === current ? ' active' : ''}"></span>`
        ).join('')
      : '';
    dotsWrap.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => { current = i; render(); });
    });
  }

  btnPrev.addEventListener('click', () => { current = (current - 1 + gallery.length) % gallery.length; render(); });
  btnNext.addEventListener('click', () => { current = (current + 1) % gallery.length; render(); });
  btnClose.addEventListener('click', close);
  lb.querySelector('.lightbox-backdrop').addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  { current = (current - 1 + gallery.length) % gallery.length; render(); }
    if (e.key === 'ArrowRight') { current = (current + 1) % gallery.length; render(); }
  });

  // Delegate clicks on any image with class lightbox-trigger
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.lightbox-trigger');
    if (!trigger) return;
    e.stopPropagation();
    const raw = trigger.dataset.gallery;
    if (raw) {
      open(JSON.parse(raw), parseInt(trigger.dataset.index || '0', 10));
    } else {
      open([{ src: trigger.dataset.src, alt: trigger.dataset.alt }], 0);
    }
  });
})();
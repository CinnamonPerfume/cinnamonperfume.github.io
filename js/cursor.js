(function () {
  'use strict';

  // ── Dot
  const dot = document.createElement('div');
  dot.id = 'cursor-dot';
  document.body.appendChild(dot);

  let mouseX = -100, mouseY = -100;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  const hoverTargets = 'a, button, .folder-header, .filter-btn, .lightbox-trigger';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hover');
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; });

  // ── Trail
    const TRAIL_COUNT = 10;
    const pool = [];
  
    // Pre-create particle elements and pool them
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const p = document.createElement('div');
      p.className = 'cursor-trail';
      p.style.opacity = '0';
      document.body.appendChild(p);
      pool.push(p);
    }
    
    let poolIndex = 0;
    
    document.addEventListener('mousemove', (e) => {
      const p = pool[poolIndex % TRAIL_COUNT];
      poolIndex++;
    
      const size  = Math.random() * 4 + 2;
      p.style.width   = size + 'px';
      p.style.height  = size + 'px';
      p.style.left    = e.clientX + 'px';
      p.style.top     = e.clientY + 'px';
      p.style.opacity = '0.4';
      p.style.transition = 'none';
    
      // Fade out and stay in place
      requestAnimationFrame(() => {
        p.style.transition = 'opacity 600ms ease';
        p.style.opacity = '0';
      });
    });

  // ── Folder proximity glow
  (function updateGlows() {
    document.querySelectorAll('.folder, .skill-category').forEach(folder => {
      const rect  = folder.getBoundingClientRect();
      const clampX = Math.max(rect.left, Math.min(mouseX, rect.right));
      const clampY = Math.max(rect.top,  Math.min(mouseY, rect.bottom));
      const dist   = Math.hypot(mouseX - clampX, mouseY - clampY);

      if (dist > 320) {
        folder.style.removeProperty('--glow-x');
        folder.style.removeProperty('--glow-y');
        folder.style.removeProperty('--glow-opacity');
        return;
      }

      const intensity = 1 - dist / 320;
      folder.style.setProperty('--glow-x', ((mouseX - rect.left) / rect.width  * 100).toFixed(1) + '%');
      folder.style.setProperty('--glow-y', ((mouseY - rect.top)  / rect.height * 100).toFixed(1) + '%');
      folder.style.setProperty('--glow-opacity', (intensity * 0.18).toFixed(3));
    });
    requestAnimationFrame(updateGlows);
  })();
})();
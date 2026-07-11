/* ── projects.js — Render folders and handle interaction ── */

(function () {
  'use strict';

  const container = document.getElementById('folders-list');

  /* ── Build folder icon SVG ── */
  function folderIconSVG() {
    return `
      <svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path class="icon-body"
          d="M2 9 C2 7.9 2.9 7 4 7 L12 7 L14 5 L28 5
             C29.1 5 30 5.9 30 7 L30 24
             C30 25.1 29.1 26 28 26 L4 26
             C2.9 26 2 25.1 2 24 Z"
          stroke-linejoin="round"/>
      </svg>`;
  }

  /* ── Build arrow SVG ── */
  function arrowSVG() {
    return `
      <svg class="folder-arrow" viewBox="0 0 14 14" fill="none"
           stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <polyline points="5,2.5 9.5,7 5,11.5"/>
      </svg>`;
  }

  /* ── Render a single folder ── */
  function renderFolder(project) {
    const tagsHTML = project.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join('');

    const descHTML = project.description
      .map(p => `<p>${p}</p>`)
      .join('');

    const highlightsHTML = (project.highlights || [])
      .map(h => `<div class="highlight-item">${h}</div>`)
      .join('');

    const actionsHTML = (project.links || [])
      .map(l => {
        const cls = l.primary ? 'btn btn--primary' : 'btn';
        return `<a class="${cls}" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`;
      })
      .join('');

    let imageHTML = '';
const imgs = project.images ? project.images : project.image ? [project.image] : [];

if (imgs.length === 1) {
  imageHTML = `<div class="project-image-wrap">
    <img class="project-image lightbox-trigger"
         src="${imgs[0].src}" alt="${imgs[0].alt}"
         data-src="${imgs[0].src}" data-alt="${imgs[0].alt}" loading="lazy">
  </div>`;
} else if (imgs.length > 1) {
  const thumbs = imgs.map((img, idx) => `
    <div class="project-thumb-wrap">
      <img class="project-thumb lightbox-trigger"
           src="${img.src}" alt="${img.alt}"
           data-src="${img.src}" data-alt="${img.alt}"
           data-gallery='${JSON.stringify(imgs)}' data-index="${idx}" loading="lazy">
    </div>`).join('');
  imageHTML = `<div class="project-image-gallery">${thumbs}</div>`;
}

    const el = document.createElement('div');
    el.className = 'folder fade-up';
    el.dataset.category = project.category;
    el.dataset.id = project.id;

    el.innerHTML = `
      <div class="folder-header">
        <div class="folder-icon">${folderIconSVG()}</div>
        <div class="folder-meta">
          <span class="folder-name">${project.name}</span>
          <div class="folder-tags">${tagsHTML}</div>
        </div>
        <span class="folder-category">${project.categoryLabel || ''}</span>
        ${arrowSVG()}
      </div>
      <div class="folder-body">
        <div class="folder-body-inner">
          <div class="folder-content">
            ${imageHTML}
            <div class="folder-content-grid">
              <div>
                <div class="project-desc">${descHTML}</div>
                ${highlightsHTML ? `<div class="project-highlights">${highlightsHTML}</div>` : ''}
              </div>
              ${actionsHTML ? `<div class="project-actions">${actionsHTML}</div>` : ''}
            </div>
          </div>
        </div>
      </div>`;

    el.addEventListener('click', (e) => {
      // Don't collapse when clicking links inside
      if (e.target.closest('a')) return;
      if (e.target.closest('.lightbox-trigger')) return;
      toggleFolder(el);
    });

    return el;
  }

  /* ── Toggle open/close ── */
  function toggleFolder(el) {
    const isOpen = el.classList.contains('open');
    // Close all open folders
    document.querySelectorAll('.folder.open').forEach(f => f.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
  }

  /* ── Render all folders ── */
  function renderAll() {
    container.innerHTML = '';
    PROJECTS.forEach((project, i) => {
      const el = renderFolder(project);
      el.style.animationDelay = `${i * 35}ms`;
      container.appendChild(el);
    });
  }

  /* ── Init ── */
  renderAll();

  /* ── Expose shared folder utilities for extras.js ── */
  window.FolderUtils = { renderFolder, toggleFolder };
})();

/* ── extras.js — Languages section ── */
/* Depends on: data.js (LANGUAGES) and projects.js (FolderUtils) */

(function () {
  'use strict';

  /* Shared folder builder from projects.js */
  const { renderFolder, toggleFolder } = window.FolderUtils;

  /* ── Generic: render a data array into a container ── */
  function renderSection(data, containerId, categoryLabel) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    data.forEach((item, i) => {
      /* Normalise item to the same shape renderFolder expects */
      const project = {
        ...item,
        category: containerId,                           // used only for data-category attr
        categoryLabel: item.categoryLabel || categoryLabel, // use item's label if it has one, otherwise use the provided one
        links: item.links || [],                         // languages have no links
      };

      const el = renderFolder(project);
      el.style.animationDelay = `${i * 40}ms`;
      container.appendChild(el);
    });
  }

  renderSection(COURSEWORK,  'coursework-list',  'Course');
  renderSection(LANGUAGES,   'languages-list',   'Language');
  renderSection(EXPERIENCE, 'experience-list', 'Work');
})();

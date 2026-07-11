/* ── skills.js — Render skill categories and chips ── */

(function () {
  'use strict';

  const container = document.getElementById('skills-categories');

  const LEVEL_META = {
    main: { label: 'Comfortable',   cls: 'skill-level--main' },
    sec:  { label: 'Familiar',      cls: 'skill-level--sec'  },
    base: { label: 'Novice',        cls: 'skill-level--base' },
  };

  function renderChip(skill) {
    const level   = LEVEL_META[skill.level] || LEVEL_META.base;
    return `
      <div class="skill-chip">
        <span class="skill-dot ${skill.dotClass || ''}"></span>
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level ${level.cls}">${level.label}</span>
      </div>`;
  }

  function renderCategory(cat, index) {
    const chipsHTML = cat.items
      .map(item => renderChip({ ...item, dotClass: cat.dotClass }))
      .join('');

    const el = document.createElement('div');
    el.className = 'skill-category fade-up';
    el.style.animationDelay = `${index * 60}ms`;

    el.innerHTML = `
      <div class="skill-cat-header">
        <span class="skill-cat-icon" style="background: ${cat.dotColor}"></span>
        <span class="skill-cat-name">${cat.category}</span>
        <span class="skill-cat-count">${cat.items.length} skills</span>
      </div>
      <div class="skill-grid">${chipsHTML}</div>`;

    return el;
  }

  function renderAll() {
    container.innerHTML = '';
    SKILLS.forEach((cat, i) => {
      container.appendChild(renderCategory(cat, i));
    });
  }

  renderAll();

  /* ── Expose so tweaks.js can refresh dot colors after accent change ── */
  window.refreshSkillDots = renderAll;
})();

/**
 * NullOS Desktop & Item Context Menu
 */

import { Sound } from '../core/audio.js';

class ContextMenuService {
  constructor() {
    this.el = null;
    this.isOpen = false;
  }

  init(menuEl) {
    this.el = menuEl;

    // Close when clicking outside
    window.addEventListener('pointerdown', (e) => {
      if (this.isOpen && !this.el.contains(e.target)) {
        this.hide();
      }
    });

    // Suppress default browser context menu on root
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  show(x, y, items) {
    Sound.playClick();
    this.el.innerHTML = '';

    items.forEach(item => {
      if (item.separator) {
        const sep = document.createElement('div');
        sep.className = 'context-divider';
        this.el.appendChild(sep);
        return;
      }

      const row = document.createElement('div');
      row.className = 'context-item';
      row.innerHTML = `
        ${item.icon || ''}
        <span>${item.label}</span>
      `;

      row.addEventListener('click', () => {
        Sound.playClick();
        this.hide();
        if (item.action) item.action();
      });

      this.el.appendChild(row);
    });

    // Clamp coordinates to screen
    const menuW = 220;
    const menuH = items.length * 32 + 20;
    const posX = Math.min(window.innerWidth - menuW - 8, Math.max(8, x));
    const posY = Math.min(window.innerHeight - menuH - 8, Math.max(8, y));

    this.el.style.left = `${posX}px`;
    this.el.style.top = `${posY}px`;
    this.el.classList.remove('hidden');
    this.isOpen = true;
  }

  hide() {
    if (!this.isOpen) return;
    this.el.classList.add('hidden');
    this.isOpen = false;
  }
}

export const ContextMenu = new ContextMenuService();

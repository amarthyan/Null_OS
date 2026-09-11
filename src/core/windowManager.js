/**
 * NullOS Window Management Engine
 * Full multi-window management with drag, 8-directional resize, focus hierarchy,
 * minimize, maximize/restore, touch-device adaptability, and taskbar synchronization.
 */

import { Icons } from './icons.js';
import { Sound } from './audio.js';
import { DeviceOptimizer } from './deviceOptimizer.js';

class WindowEngine {
  constructor() {
    this.windows = new Map();
    this.activeWindowId = null;
    this.baseZIndex = 100;
    this.cascadeOffset = 0;
    this.workspace = null;
    this.onWindowStateChange = null; // Callback for taskbar updates
  }

  init(workspaceEl) {
    this.workspace = workspaceEl;

    // Viewport resize handling (orientation changes, window resizing)
    window.addEventListener('resize', () => {
      this.reflowWindows();
    });
  }

  reflowWindows() {
    if (!this.workspace) return;
    const bounds = this.workspace.getBoundingClientRect();
    const isMobile = bounds.width < 640;

    this.windows.forEach(win => {
      if (win.isMinimized) return;

      if (isMobile && DeviceOptimizer.autoMaximizeOnMobile && !win.isMaximized) {
        this.toggleMaximize(win.id);
        return;
      }

      if (!win.isMaximized) {
        const el = win.element;
        let w = el.offsetWidth;
        let h = el.offsetHeight;
        let x = el.offsetLeft;
        let y = el.offsetTop;

        // Clamp width & height within workspace bounds
        const maxW = Math.max(280, bounds.width - 16);
        const maxH = Math.max(200, bounds.height - 16);

        if (w > maxW) {
          w = maxW;
          el.style.width = `${w}px`;
        }
        if (h > maxH) {
          h = maxH;
          el.style.height = `${h}px`;
        }

        // Clamp position inside visible workspace
        if (x + 80 > bounds.width) {
          x = Math.max(8, bounds.width - w - 8);
          el.style.left = `${x}px`;
        }
        if (y + 40 > bounds.height) {
          y = Math.max(8, bounds.height - h - 8);
          el.style.top = `${y}px`;
        }
      }
    });
  }

  createWindow(config) {
    const {
      id,
      title,
      icon = 'fileManager',
      width = 720,
      height = 480,
      minWidth = 320,
      minHeight = 220,
      content,
      onClose
    } = config;

    if (this.windows.has(id)) {
      const existing = this.windows.get(id);
      if (existing.isMinimized) {
        this.restoreWindow(id);
      }
      this.focusWindow(id);
      return existing;
    }

    Sound.playClick();

    // Determine initial position and dimensions adaptively
    const bounds = this.workspace ? this.workspace.getBoundingClientRect() : {
      width: window.innerWidth,
      height: window.innerHeight - 44
    };

    const isSmallScreen = bounds.width < 640;
    const shouldAutoMaximize = isSmallScreen && DeviceOptimizer.autoMaximizeOnMobile;

    // Constrain window size safely within current workspace bounds
    const maxAllowedWidth = Math.max(280, bounds.width - 16);
    const maxAllowedHeight = Math.max(200, bounds.height - 16);
    const targetWidth = Math.min(width, maxAllowedWidth);
    const targetHeight = Math.min(height, maxAllowedHeight);

    const posX = Math.max(8, Math.min(Math.max(8, bounds.width - targetWidth - 16), 40 + this.cascadeOffset));
    const posY = Math.max(8, Math.min(Math.max(8, bounds.height - targetHeight - 16), 24 + this.cascadeOffset));
    this.cascadeOffset = (this.cascadeOffset + 24) % 160;

    const winEl = document.createElement('div');
    winEl.className = 'os-window opening';
    if (shouldAutoMaximize) {
      winEl.classList.add('maximized');
    }

    winEl.id = `win-${id}`;
    winEl.style.width = `${targetWidth}px`;
    winEl.style.height = `${targetHeight}px`;
    winEl.style.left = `${posX}px`;
    winEl.style.top = `${posY}px`;
    winEl.style.zIndex = ++this.baseZIndex;

    const iconSvg = Icons[icon] || Icons.fileManager;
    const maxIconSvg = shouldAutoMaximize ? Icons.restore : Icons.maximize;
    const maxBtnTitle = shouldAutoMaximize ? 'Restore' : 'Maximize';

    winEl.innerHTML = `
      <div class="window-header">
        <div class="window-title-group">
          <div class="window-title-icon">${iconSvg}</div>
          <span class="window-title-text">${title}</span>
        </div>
        <div class="window-controls">
          <button class="window-btn btn-min" title="Minimize">${Icons.minimize}</button>
          <button class="window-btn btn-max" title="${maxBtnTitle}">${maxIconSvg}</button>
          <button class="window-btn btn-close" title="Close">${Icons.close}</button>
        </div>
      </div>
      <div class="window-content"></div>

      <!-- 8-Directional Resize Handles -->
      <div class="resize-handle resize-n" data-dir="n"></div>
      <div class="resize-handle resize-s" data-dir="s"></div>
      <div class="resize-handle resize-w" data-dir="w"></div>
      <div class="resize-handle resize-e" data-dir="e"></div>
      <div class="resize-handle resize-nw" data-dir="nw"></div>
      <div class="resize-handle resize-ne" data-dir="ne"></div>
      <div class="resize-handle resize-sw" data-dir="sw"></div>
      <div class="resize-handle resize-se" data-dir="se"></div>
    `;

    const contentArea = winEl.querySelector('.window-content');
    if (typeof content === 'string') {
      contentArea.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      contentArea.appendChild(content);
    }

    this.workspace.appendChild(winEl);

    // Animation settle
    requestAnimationFrame(() => {
      winEl.classList.remove('opening');
    });

    const winObj = {
      id,
      title,
      icon,
      element: winEl,
      isMinimized: false,
      isMaximized: shouldAutoMaximize,
      prevBounds: { posX, posY, width: targetWidth, height: targetHeight },
      minWidth: Math.min(minWidth, targetWidth),
      minHeight: Math.min(minHeight, targetHeight),
      onClose
    };

    this.windows.set(id, winObj);

    // Setup interactions
    this.attachWindowEvents(winObj);
    this.focusWindow(id);

    if (this.onWindowStateChange) {
      this.onWindowStateChange(id, 'opened', winObj);
    }

    return winObj;
  }

  attachWindowEvents(win) {
    const el = win.element;
    const header = el.querySelector('.window-header');
    const btnMin = el.querySelector('.btn-min');
    const btnMax = el.querySelector('.btn-max');
    const btnClose = el.querySelector('.btn-close');

    // Click or touch to focus
    el.addEventListener('pointerdown', () => {
      this.focusWindow(win.id);
    });

    // Header buttons
    btnMin.addEventListener('click', (e) => {
      e.stopPropagation();
      this.minimizeWindow(win.id);
    });

    btnMax.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleMaximize(win.id);
    });

    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeWindow(win.id);
    });

    // Double click / double tap titlebar to toggle maximize
    header.addEventListener('dblclick', (e) => {
      if (e.target.closest('.window-btn')) return;
      this.toggleMaximize(win.id);
    });

    // Window Dragging with Pointer Events & Touch-action protection
    header.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.window-btn') || win.isMaximized) return;

      const startX = e.clientX;
      const startY = e.clientY;
      const initialLeft = el.offsetLeft;
      const initialTop = el.offsetTop;
      const currentWidth = el.offsetWidth;

      try {
        header.setPointerCapture(e.pointerId);
      } catch (err) {}

      const onPointerMove = (ev) => {
        const deltaX = ev.clientX - startX;
        const deltaY = ev.clientY - startY;

        let newLeft = initialLeft + deltaX;
        let newTop = initialTop + deltaY;

        // Keep at least header and partially window inside workspace
        const maxLeft = (window.innerWidth || 1280) - 80;
        const minLeft = -currentWidth + 80;
        const maxTop = (window.innerHeight || 800) - 44;

        newLeft = Math.max(minLeft, Math.min(maxLeft, newLeft));
        newTop = Math.max(0, Math.min(maxTop, newTop));

        el.style.left = `${newLeft}px`;
        el.style.top = `${newTop}px`;
      };

      const onPointerUp = (ev) => {
        try {
          header.releasePointerCapture(ev.pointerId);
        } catch (err) {}
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    });

    // 8-Direction Resizing
    el.querySelectorAll('.resize-handle').forEach(handle => {
      handle.addEventListener('pointerdown', (e) => {
        if (win.isMaximized) return;
        e.stopPropagation();
        e.preventDefault();

        const dir = handle.dataset.dir;
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = el.offsetWidth;
        const startHeight = el.offsetHeight;
        const startLeft = el.offsetLeft;
        const startTop = el.offsetTop;

        try {
          handle.setPointerCapture(e.pointerId);
        } catch (err) {}

        const onResizeMove = (ev) => {
          const dx = ev.clientX - startX;
          const dy = ev.clientY - startY;

          let newW = startWidth;
          let newH = startHeight;
          let newX = startLeft;
          let newY = startTop;

          const maxAvailableW = window.innerWidth || 1280;
          const maxAvailableH = (window.innerHeight || 800) - 44;

          if (dir.includes('e')) {
            newW = Math.min(maxAvailableW - startLeft, Math.max(win.minWidth, startWidth + dx));
          }
          if (dir.includes('s')) {
            newH = Math.min(maxAvailableH - startTop, Math.max(win.minHeight, startHeight + dy));
          }
          if (dir.includes('w')) {
            const proposedW = startWidth - dx;
            if (proposedW >= win.minWidth) {
              newW = proposedW;
              newX = startLeft + dx;
            }
          }
          if (dir.includes('n')) {
            const proposedH = startHeight - dy;
            if (proposedH >= win.minHeight) {
              newH = proposedH;
              newY = startTop + dy;
            }
          }

          el.style.width = `${newW}px`;
          el.style.height = `${newH}px`;
          el.style.left = `${newX}px`;
          el.style.top = `${newY}px`;
        };

        const onResizeUp = (ev) => {
          try {
            handle.releasePointerCapture(ev.pointerId);
          } catch (err) {}
          window.removeEventListener('pointermove', onResizeMove);
          window.removeEventListener('pointerup', onResizeUp);
        };

        window.addEventListener('pointermove', onResizeMove);
        window.addEventListener('pointerup', onResizeUp);
      });
    });
  }

  focusWindow(id) {
    const win = this.windows.get(id);
    if (!win) return;

    if (this.activeWindowId === id && !win.isMinimized) {
      return; // Already focused
    }

    // Unfocus all others
    this.windows.forEach((w, wId) => {
      if (wId !== id) {
        w.element.classList.add('inactive');
      }
    });

    win.element.classList.remove('inactive');
    win.element.style.zIndex = ++this.baseZIndex;
    this.activeWindowId = id;

    if (this.onWindowStateChange) {
      this.onWindowStateChange(id, 'focused', win);
    }
  }

  minimizeWindow(id) {
    const win = this.windows.get(id);
    if (!win) return;

    win.isMinimized = true;
    win.element.classList.add('minimized');

    // Give focus to next highest window
    let highestZ = -1;
    let nextFocus = null;

    this.windows.forEach((w, wId) => {
      if (wId !== id && !w.isMinimized) {
        const z = parseInt(w.element.style.zIndex || 0, 10);
        if (z > highestZ) {
          highestZ = z;
          nextFocus = wId;
        }
      }
    });

    if (nextFocus) {
      this.focusWindow(nextFocus);
    } else {
      this.activeWindowId = null;
    }

    if (this.onWindowStateChange) {
      this.onWindowStateChange(id, 'minimized', win);
    }
  }

  restoreWindow(id) {
    const win = this.windows.get(id);
    if (!win) return;

    win.isMinimized = false;
    win.element.classList.remove('minimized');
    this.focusWindow(id);

    if (this.onWindowStateChange) {
      this.onWindowStateChange(id, 'restored', win);
    }
  }

  toggleMaximize(id) {
    const win = this.windows.get(id);
    if (!win) return;

    const btnMax = win.element.querySelector('.btn-max');

    if (win.isMaximized) {
      // Restore previous geometry
      win.element.classList.remove('maximized');
      win.element.style.left = `${win.prevBounds.posX}px`;
      win.element.style.top = `${win.prevBounds.posY}px`;
      win.element.style.width = `${win.prevBounds.width}px`;
      win.element.style.height = `${win.prevBounds.height}px`;
      if (btnMax) {
        btnMax.innerHTML = Icons.maximize;
        btnMax.title = 'Maximize';
      }
      win.isMaximized = false;
    } else {
      // Save current geometry and maximize
      win.prevBounds = {
        posX: win.element.offsetLeft,
        posY: win.element.offsetTop,
        width: win.element.offsetWidth,
        height: win.element.offsetHeight
      };
      win.element.classList.add('maximized');
      if (btnMax) {
        btnMax.innerHTML = Icons.restore;
        btnMax.title = 'Restore';
      }
      win.isMaximized = true;
    }

    this.focusWindow(id);
  }

  closeWindow(id) {
    const win = this.windows.get(id);
    if (!win) return;

    Sound.playClick();
    win.element.classList.add('closing');

    setTimeout(() => {
      if (win.onClose) win.onClose();
      win.element.remove();
      this.windows.delete(id);

      if (this.activeWindowId === id) {
        this.activeWindowId = null;
        // Focus highest remaining
        let highestZ = -1;
        let nextId = null;
        this.windows.forEach((w, wId) => {
          if (!w.isMinimized) {
            const z = parseInt(w.element.style.zIndex || 0, 10);
            if (z > highestZ) {
              highestZ = z;
              nextId = wId;
            }
          }
        });
        if (nextId) this.focusWindow(nextId);
      }

      if (this.onWindowStateChange) {
        this.onWindowStateChange(id, 'closed', win);
      }
    }, 150);
  }

  getWindow(id) {
    return this.windows.get(id);
  }

  isWindowVisible(id) {
    const win = this.windows.get(id);
    return win && !win.isMinimized && !document.hidden;
  }
}

export const WindowManager = new WindowEngine();

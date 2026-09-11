/**
 * NullOS Start Menu Component
 * Pinned applications, search integration, and installed store app synchronization.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { AppCatalog, StoreState } from '../core/appCatalog.js';

export class StartMenu {
  constructor(el, appLauncher, powerActions) {
    this.el = el;
    this.appLauncher = appLauncher;
    this.powerActions = powerActions;
    this.isOpen = false;
    this.render();
    this.bindEvents();

    StoreState.subscribe(() => {
      this.refreshApps();
    });
  }

  render() {
    this.el.innerHTML = `
      <div class="start-search-box">
        <div class="start-search-input-wrap">
          ${Icons.search}
          <input type="text" class="start-search-input" placeholder="Type here to search apps, settings, or void..." />
        </div>
      </div>
      <div class="start-content">
        <div class="start-section">
          <div class="start-section-header">
            <span>Pinned</span>
            <span style="font-size:11px;color:var(--accent);cursor:pointer;" id="start-view-store">Get more in Store &gt;</span>
          </div>
          <div class="start-apps-grid" id="start-pinned-grid"></div>
        </div>

        <div class="start-section">
          <div class="start-section-header">
            <span>Recommended</span>
          </div>
          <div class="start-recent-list">
            <div class="start-recent-item" data-doc="passwords">
              ${Icons.fileText}
              <div class="start-recent-meta">
                <span class="start-recent-name">passwords_plaintext.txt</span>
                <span class="start-recent-sub">2h ago · Documents</span>
              </div>
            </div>
            <div class="start-recent-item" data-doc="world">
              ${Icons.fileText}
              <div class="start-recent-meta">
                <span class="start-recent-name">world_domination_plan.txt</span>
                <span class="start-recent-sub">Yesterday · Documents</span>
              </div>
            </div>
            <div class="start-recent-item" data-doc="goals">
              ${Icons.fileText}
              <div class="start-recent-meta">
                <span class="start-recent-name">quarterly_goals.txt</span>
                <span class="start-recent-sub">3d ago · Documents</span>
              </div>
            </div>
            <div class="start-recent-item" data-doc="project">
              ${Icons.fileCode}
              <div class="start-recent-meta">
                <span class="start-recent-name">revolutionary_software.js</span>
                <span class="start-recent-sub">1w ago · Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="start-footer">
        <div class="start-user">
          <div class="start-user-avatar">A</div>
          <span class="start-username">Aizen</span>
        </div>
        <div class="start-power-wrap">
          <button class="start-power-btn" id="start-power-btn" title="Power Options">
            ${Icons.power}
          </button>
        </div>
      </div>
    `;

    this.refreshApps();
  }

  refreshApps() {
    const grid = this.el.querySelector('#start-pinned-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const defaultApps = [
      { id: 'appStore', name: 'Store', iconSvg: Icons.appStore },
      { id: 'browser', name: 'Browser', iconSvg: Icons.browser },
      { id: 'securityCenter', name: 'Security Center', iconSvg: Icons.shieldCheck },
      { id: 'achievements', name: 'Achievements', iconSvg: Icons.trophy },
      { id: 'fileManager', name: 'Files', iconSvg: Icons.fileManager },
      { id: 'systemMonitor', name: 'System', iconSvg: Icons.systemMonitor },
      { id: 'calculator', name: 'Calculator', iconSvg: Icons.calculator },
      { id: 'notepad', name: 'Notepad', iconSvg: Icons.notepad },
      { id: 'terminal', name: 'Terminal', iconSvg: Icons.terminal },
      { id: 'developerConsole', name: 'Dev Console', iconSvg: Icons.code },
      { id: 'settings', name: 'Settings', iconSvg: Icons.settings }
    ];

    // Add installed store apps and custom registered apps
    const allCatalog = typeof getMergedAppCatalog === 'function' ? getMergedAppCatalog() : AppCatalog;
    allCatalog.forEach(app => {
      if (StoreState.isInstalled(app.id) || app.isCustom) {
        defaultApps.push({
          id: app.id,
          name: app.name,
          iconSvg: app.icon ? `<span style="font-size:26px;">${app.icon}</span>` : Icons.appStore
        });
      }
    });

    defaultApps.forEach(item => {
      const el = document.createElement('div');
      el.className = 'start-app-item';
      el.dataset.app = item.id;
      el.innerHTML = `
        ${item.iconSvg}
        <span class="start-app-label">${item.name}</span>
      `;

      el.addEventListener('click', () => {
        this.close();
        if (this.appLauncher) this.appLauncher(item.id);
      });

      grid.appendChild(el);
    });
  }

  bindEvents() {
    // Open Store link
    this.el.querySelector('#start-view-store').addEventListener('click', () => {
      this.close();
      if (this.appLauncher) this.appLauncher('appStore');
    });

    // Recent doc clicks
    this.el.querySelectorAll('.start-recent-item').forEach(item => {
      item.addEventListener('click', () => {
        const doc = item.dataset.doc;
        this.close();
        if (this.appLauncher) {
          if (doc === 'project') {
            this.appLauncher('notepad', { path: 'C:/Users/Aizen/Documents/Projects/revolutionary_software.js' });
          } else if (doc === 'passwords') {
            this.appLauncher('notepad', { path: 'C:/Users/Aizen/Documents/passwords_plaintext_do_not_share.txt' });
          } else if (doc === 'world') {
            this.appLauncher('notepad', { path: 'C:/Users/Aizen/Documents/world_domination_plan.txt' });
          } else {
            this.appLauncher('notepad', { path: 'C:/Users/Aizen/Documents/quarterly_goals.txt' });
          }
        }
      });
    });

    // Search filter with Secret Search support
    const searchInput = this.el.querySelector('.start-search-input');
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const grid = this.el.querySelector('#start-pinned-grid');

      // Check for secret search tags
      const existingSecret = grid.querySelector('.secret-search-item');
      if (existingSecret) existingSecret.remove();

      if (q === 'nothing') {
        const secretEl = document.createElement('div');
        secretEl.className = 'start-app-item secret-search-item';
        secretEl.innerHTML = `🕳️<span class="start-app-label">Nothing (Secret)</span>`;
        secretEl.addEventListener('click', () => {
          this.close();
          if (this.appLauncher) this.appLauncher('hidden_nothing');
        });
        grid.prepend(secretEl);
      } else if (q === 'loading' || q === 'load') {
        const secretEl = document.createElement('div');
        secretEl.className = 'start-app-item secret-search-item';
        secretEl.innerHTML = `⏳<span class="start-app-label">Loading Sim (Secret)</span>`;
        secretEl.addEventListener('click', () => {
          this.close();
          if (this.appLauncher) this.appLauncher('hidden_loading');
        });
        grid.prepend(secretEl);
      } else if (q === 'productivity' || q === 'productive') {
        const secretEl = document.createElement('div');
        secretEl.className = 'start-app-item secret-search-item';
        secretEl.innerHTML = `⚡<span class="start-app-label">Productivity (Secret)</span>`;
        secretEl.addEventListener('click', () => {
          this.close();
          if (this.appLauncher) this.appLauncher('hidden_productivity');
        });
        grid.prepend(secretEl);
      } else if (q === 'secret' || q === '42') {
        const secretEl = document.createElement('div');
        secretEl.className = 'start-app-item secret-search-item';
        secretEl.innerHTML = `🔢<span class="start-app-label">Secret Calculator</span>`;
        secretEl.addEventListener('click', () => {
          this.close();
          if (this.appLauncher) this.appLauncher('hidden_secretCalc');
        });
        grid.prepend(secretEl);
      }

      grid.querySelectorAll('.start-app-item:not(.secret-search-item)').forEach(app => {
        const name = app.querySelector('.start-app-label').textContent.toLowerCase();
        app.style.display = name.includes(q) ? 'flex' : 'none';
      });
    });

    // Power options
    const powerBtn = this.el.querySelector('#start-power-btn');
    powerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      Sound.playClick();
      if (this.powerActions) {
        this.powerActions.showMenu(e.clientX, e.clientY);
      }
    });

    // Close on outer click
    window.addEventListener('pointerdown', (e) => {
      if (this.isOpen && !this.el.contains(e.target) && !e.target.closest('#taskbar-start-btn')) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    Sound.playClick();
    this.refreshApps();
    this.el.classList.remove('hidden');
    this.isOpen = true;
    const input = this.el.querySelector('.start-search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
  }

  close() {
    if (!this.isOpen) return;
    this.el.classList.add('hidden');
    this.isOpen = false;
  }
}

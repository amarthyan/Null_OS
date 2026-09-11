/**
 * NullOS File Manager Application
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { FileSystem } from '../core/fileSystem.js';
import { ContextMenu } from '../components/ContextMenu.js';
import { Dialog } from '../components/Dialog.js';

export class FileManagerApp {
  constructor(appLauncher, initialPath = 'C:/Users/Aizen/Documents') {
    this.appLauncher = appLauncher;
    this.currentPath = initialPath;
    this.history = [initialPath];
    this.historyIdx = 0;
    this.selectedItem = null;
    this.container = document.createElement('div');
    this.container.className = 'filemanager-window';
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="fm-toolbar">
        <button class="fm-nav-btn" id="fm-back" title="Back" ${this.historyIdx === 0 ? 'disabled' : ''}>
          ${Icons.arrowLeft}
        </button>
        <button class="fm-nav-btn" id="fm-forward" title="Forward" ${this.historyIdx >= this.history.length - 1 ? 'disabled' : ''}>
          ${Icons.arrowRight}
        </button>
        <button class="fm-nav-btn" id="fm-up" title="Up">
          ${Icons.arrowUp}
        </button>
        <div class="fm-address-bar">
          ${Icons.folder}
          <span id="fm-path-display">${this.currentPath}</span>
        </div>
        <div class="fm-search-bar">
          ${Icons.search}
          <input type="text" id="fm-search-input" placeholder="Search..." />
        </div>
      </div>

      <div class="fm-main">
        <div class="fm-sidebar">
          <div class="fm-side-item" data-path="C:/Users/Aizen/Desktop">
            ${Icons.folder}
            <span>Desktop</span>
          </div>
          <div class="fm-side-item active" data-path="C:/Users/Aizen/Documents">
            ${Icons.folder}
            <span>Documents</span>
          </div>
          <div class="fm-side-item" data-path="C:/Users/Aizen/Downloads">
            ${Icons.folder}
            <span>Downloads</span>
          </div>
          <div class="fm-side-item" data-path="C:/Users/Aizen/Pictures">
            ${Icons.folder}
            <span>Pictures</span>
          </div>
          <div class="fm-side-item" data-path="C:">
            ${Icons.folder}
            <span>Local Disk (C:)</span>
          </div>
          <div class="fm-side-item" data-path="Recycle Bin">
            ${Icons.recycleBin}
            <span>Recycle Bin</span>
          </div>
        </div>

        <div class="fm-content-area" id="fm-file-grid"></div>
      </div>

      <div class="fm-status-bar">
        <span id="fm-status-items">0 items</span>
        <span id="fm-status-selected">Nothing selected</span>
      </div>
    `;

    this.bindEvents();
    this.loadDirectory(this.currentPath);
  }

  bindEvents() {
    // Nav buttons
    this.container.querySelector('#fm-back').addEventListener('click', () => {
      if (this.historyIdx > 0) {
        this.historyIdx--;
        this.loadDirectory(this.history[this.historyIdx], false);
      }
    });

    this.container.querySelector('#fm-forward').addEventListener('click', () => {
      if (this.historyIdx < this.history.length - 1) {
        this.historyIdx++;
        this.loadDirectory(this.history[this.historyIdx], false);
      }
    });

    this.container.querySelector('#fm-up').addEventListener('click', () => {
      const parts = this.currentPath.split('/');
      if (parts.length > 1) {
        parts.pop();
        const parentPath = parts.join('/') || 'C:';
        this.navigateTo(parentPath);
      }
    });

    // Sidebar items
    this.container.querySelectorAll('.fm-side-item').forEach(item => {
      item.addEventListener('click', () => {
        const path = item.dataset.path;
        this.container.querySelectorAll('.fm-side-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        this.navigateTo(path);
      });
    });

    // Search filter
    const searchInput = this.container.querySelector('#fm-search-input');
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      this.container.querySelectorAll('.fm-file-card').forEach(card => {
        const name = card.querySelector('.fm-file-name').textContent.toLowerCase();
        card.style.display = name.includes(q) ? 'flex' : 'none';
      });
    });
  }

  navigateTo(path) {
    if (path === this.currentPath) return;
    this.history = this.history.slice(0, this.historyIdx + 1);
    this.history.push(path);
    this.historyIdx++;
    this.loadDirectory(path, false);
  }

  loadDirectory(path, updateHistory = true) {
    this.currentPath = path;
    const pathDisplay = this.container.querySelector('#fm-path-display');
    if (pathDisplay) pathDisplay.textContent = path;

    // Update nav button states
    const backBtn = this.container.querySelector('#fm-back');
    const fwdBtn = this.container.querySelector('#fm-forward');
    if (backBtn) backBtn.disabled = this.historyIdx === 0;
    if (fwdBtn) fwdBtn.disabled = this.historyIdx >= this.history.length - 1;

    const grid = this.container.querySelector('#fm-file-grid');
    grid.innerHTML = '';

    const items = FileSystem.getItems(path);
    const statusItems = this.container.querySelector('#fm-status-items');
    if (statusItems) statusItems.textContent = `${items.length} items`;

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'fm-file-card';
      const iconSvg = Icons[item.icon] || (item.type === 'directory' ? Icons.folder : Icons.fileText);

      card.innerHTML = `
        ${iconSvg}
        <span class="fm-file-name">${item.name}</span>
      `;

      // Click to select
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        this.container.querySelectorAll('.fm-file-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedItem = item;
        const statusSel = this.container.querySelector('#fm-status-selected');
        if (statusSel) statusSel.textContent = `Selected: ${item.name} (${item.size || 'Folder'})`;
      });

      // Double click to open
      card.addEventListener('dblclick', () => {
        if (item.type === 'directory') {
          const nextPath = this.currentPath === 'C:' ? `C:/${item.name}` : `${this.currentPath}/${item.name}`;
          this.navigateTo(nextPath);
        } else {
          this.openFile(item);
        }
      });

      // Right click context menu
      card.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.container.querySelectorAll('.fm-file-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedItem = item;

        ContextMenu.show(e.clientX, e.clientY, [
          {
            label: 'Open',
            icon: Icons.fileText,
            action: () => {
              if (item.type === 'directory') {
                const nextPath = `${this.currentPath}/${item.name}`;
                this.navigateTo(nextPath);
              } else {
                this.openFile(item);
              }
            }
          },
          {
            label: 'Delete',
            icon: Icons.recycleBin,
            action: () => {
              FileSystem.deleteItem(`${this.currentPath}/${item.name}`);
              this.loadDirectory(this.currentPath, false);
            }
          },
          { separator: true },
          {
            label: 'Properties',
            icon: Icons.info,
            action: () => this.showProperties(item)
          }
        ]);
      });

      grid.appendChild(card);
    });

    // Clicking grid empty space deselects
    grid.addEventListener('click', () => {
      this.container.querySelectorAll('.fm-file-card').forEach(c => c.classList.remove('selected'));
      this.selectedItem = null;
      const statusSel = this.container.querySelector('#fm-status-selected');
      if (statusSel) statusSel.textContent = 'Nothing selected';
    });
  }

  openFile(item) {
    Sound.playClick();
    if (item.name.endsWith('.txt') || item.name.endsWith('.js') || item.name.endsWith('.docx') || item.name.endsWith('.pdf')) {
      if (this.appLauncher) {
        this.appLauncher('notepad', {
          path: `${this.currentPath}/${item.name}`,
          content: item.content
        });
      }
    } else if (item.name.endsWith('.exe')) {
      Dialog.show({
        title: 'Application Error',
        message: `Unable to launch ${item.name}`,
        subtext: 'Reason: Binary contains no productive instructions.',
        type: 'error'
      });
    } else if (item.name.endsWith('.png')) {
      Dialog.show({
        title: 'Image Viewer',
        message: item.name,
        subtext: 'Dimensions: 3840×2160 · Visual significance: Undetermined.',
        type: 'info'
      });
    }
  }

  showProperties(item) {
    Dialog.show({
      title: `${item.name} Properties`,
      message: item.name,
      subtext: `Type: ${item.type === 'directory' ? 'File folder' : 'Document'}\nLocation: ${this.currentPath}\nSize: ${item.size || '0 bytes of meaning'}\nModified: ${item.modified || 'Unknown'}\nAttributes: Read-only, Existential`,
      type: 'info',
      buttons: [{ text: 'OK', primary: true }]
    });
  }

  getElement() {
    return this.container;
  }
}

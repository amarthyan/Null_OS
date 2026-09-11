/**
 * NullOS Recycle Bin Application
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { FileSystem } from '../core/fileSystem.js';
import { Dialog } from '../components/Dialog.js';
import { EasterEggEngine } from '../core/easterEggEngine.js';

export class RecycleBinApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'filemanager-window';
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="fm-toolbar">
        <div style="font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
          ${Icons.recycleBin}
          <span>Recycle Bin Tools</span>
        </div>
        <div style="flex:1;"></div>
        <button class="dialog-btn" id="rb-empty-btn" style="height:28px;">Empty Recycle Bin</button>
      </div>

      <div class="fm-main">
        <div class="fm-content-area" id="rb-grid" style="grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));"></div>
      </div>

      <div class="fm-status-bar">
        <span id="rb-status">0 items</span>
      </div>
    `;

    this.bindEvents();
    this.refresh();
  }

  bindEvents() {
    const emptyBtn = this.container.querySelector('#rb-empty-btn');
    emptyBtn.addEventListener('click', () => {
      Sound.playClick();
      const currentItems = FileSystem.getItems('Recycle Bin');
      if (currentItems.length === 0) {
        EasterEggEngine.recordRecycleBinEmpty(true);
        return;
      }

      Dialog.show({
        title: 'Delete Multiple Items',
        message: 'Are you sure you want to permanently delete these useless items?',
        subtext: 'Once erased, they can never waste space on your disk again.',
        type: 'warning',
        buttons: [
          { text: 'Yes', primary: true },
          { text: 'No' }
        ]
      }).then(choice => {
        if (choice === 'Yes') {
          FileSystem.emptyRecycleBin();
          this.refresh();
          Dialog.show({
            title: 'Recycle Bin',
            message: 'Recycle bin emptied.',
            subtext: 'Nothing remains of those files except faint memories.',
            type: 'check'
          });
        }
      });
    });
  }

  refresh() {
    const grid = this.container.querySelector('#rb-grid');
    grid.innerHTML = '';
    const items = FileSystem.getItems('Recycle Bin');

    this.container.querySelector('#rb-status').textContent = `${items.length} items in bin`;

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'fm-file-card';
      const iconSvg = Icons[item.icon] || Icons.fileText;

      card.innerHTML = `
        ${iconSvg}
        <span class="fm-file-name">${item.name}</span>
      `;

      card.addEventListener('dblclick', () => {
        Dialog.show({
          title: 'Recycle Bin Item',
          message: item.name,
          subtext: `Original location: ${item.originalPath || 'Unknown'}\nSize: ${item.size}\nThis file was discarded intentionally.`,
          type: 'info'
        });
      });

      grid.appendChild(card);
    });
  }

  getElement() {
    return this.container;
  }
}

/**
 * NullOS System Dialogs & Error Alerts
 * Creates authentic, compact modal dialogs matching enterprise desktop design.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';

class DialogService {
  constructor() {
    this.container = null;
  }

  init(containerEl) {
    this.container = containerEl;
  }

  show(config) {
    const {
      title = 'Useless OS',
      message = 'An unexpected condition has occurred.',
      subtext = 'Reason: Nothing to perform.',
      type = 'warning', // 'warning', 'error', 'info', 'check'
      buttons = [{ text: 'OK', primary: true }]
    } = config;

    if (type === 'error' || type === 'warning') {
      Sound.playError();
    } else {
      Sound.playNotification();
    }

    return new Promise((resolve) => {
      this.container.innerHTML = '';
      this.container.classList.remove('hidden');

      const iconSvg = Icons[type] || Icons.warning;

      const dialogEl = document.createElement('div');
      dialogEl.className = 'system-dialog';
      dialogEl.innerHTML = `
        <div class="dialog-header">
          <span>${title}</span>
          <button class="window-btn btn-close-dialog" style="width:24px;height:24px;">${Icons.close}</button>
        </div>
        <div class="dialog-content">
          <div class="dialog-icon">${iconSvg}</div>
          <div class="dialog-message-group">
            <div class="dialog-title">${message}</div>
            <div class="dialog-desc">${subtext}</div>
          </div>
        </div>
        <div class="dialog-actions"></div>
      `;

      const actionsEl = dialogEl.querySelector('.dialog-actions');
      buttons.forEach((btn, idx) => {
        const btnEl = document.createElement('button');
        btnEl.className = `dialog-btn ${btn.primary ? 'primary' : ''}`;
        btnEl.textContent = btn.text;
        btnEl.addEventListener('click', () => {
          Sound.playClick();
          this.close();
          resolve(btn.text);
        });
        actionsEl.appendChild(btnEl);
      });

      dialogEl.querySelector('.btn-close-dialog').addEventListener('click', () => {
        Sound.playClick();
        this.close();
        resolve(null);
      });

      this.container.appendChild(dialogEl);
    });
  }

  close() {
    if (this.container) {
      this.container.classList.add('hidden');
      this.container.innerHTML = '';
    }
  }
}

export const Dialog = new DialogService();

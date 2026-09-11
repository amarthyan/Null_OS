/**
 * NullOS Notification System
 * Authentic toast notifications with modern subtle typography and deadpan humor.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';

class NotificationService {
  constructor() {
    this.container = null;
    this.history = [];
  }

  init(containerEl) {
    this.container = containerEl;
    this.startPeriodicHumor();
  }

  notify(config) {
    const {
      title = 'System',
      message,
      app = 'System',
      icon = 'osLogo',
      duration = 6000
    } = config;

    Sound.playNotification();

    const toast = document.createElement('div');
    toast.className = 'notification-toast';

    const iconSvg = Icons[icon] || Icons.osLogo;

    toast.innerHTML = `
      <div class="toast-header">
        <div class="toast-app-info">
          ${iconSvg}
          <span>${app}</span>
        </div>
        <button class="toast-close-btn">${Icons.close}</button>
      </div>
      <div class="toast-title">${title}</div>
      <div class="toast-body">${message}</div>
    `;

    toast.querySelector('.toast-close-btn').addEventListener('click', () => {
      this.dismiss(toast);
    });

    this.container.appendChild(toast);
    this.history.push({ title, message, time: new Date() });

    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(toast);
      }, duration);
    }
  }

  dismiss(toastEl) {
    if (!toastEl || !toastEl.parentNode) return;
    toastEl.style.opacity = '0';
    toastEl.style.transform = 'translateX(40px)';
    toastEl.style.transition = 'all 180ms ease';
    setTimeout(() => {
      toastEl.remove();
    }, 180);
  }

  startPeriodicHumor() {
    const uselessMessages = [
      {
        app: 'System',
        title: 'System Health',
        message: 'Your computer is working normally. It isn\'t accomplishing anything, though.',
        icon: 'check'
      },
      {
        app: 'Storage Sense',
        title: 'Storage Optimization',
        message: '420 GB of free space available. Still no room for personal improvement.',
        icon: 'fileManager'
      },
      {
        app: 'Resource Engine',
        title: 'Workload Status',
        message: 'Background workers actively consuming >50% CPU to maintain optimal uselessness.',
        icon: 'cpu'
      },
      {
        app: 'Security Center',
        title: 'Zero Threats Detected',
        message: '0 threats found. 0 productive activities detected during the last 24 hours.',
        icon: 'lock'
      },
      {
        app: 'Network',
        title: 'Connected: Nothing_5G',
        message: 'High-speed internet ready to load more unread browser tabs.',
        icon: 'wifi'
      }
    ];

    let index = 0;
    // Deliver first notification after 4 seconds, then periodically
    setTimeout(() => {
      this.notify(uselessMessages[0]);
    }, 4500);

    setInterval(() => {
      index = (index + 1) % uselessMessages.length;
      this.notify(uselessMessages[index]);
    }, 45000);
  }
}

export const Notifications = new NotificationService();

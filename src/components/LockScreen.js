/**
 * NullOS Lock / Login Screen
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';

export class LockScreen {
  constructor(el, onUnlock) {
    this.el = el;
    this.onUnlock = onUnlock;
    this.render();
    this.bindEvents();
    this.startClock();
  }

  render() {
    this.el.innerHTML = `
      <div class="lock-container">
        <div class="lock-clock-section">
          <div class="lock-time" id="lock-time">18:34</div>
          <div class="lock-date" id="lock-date">Friday, September 11</div>
        </div>

        <div class="lock-user-card">
          <div class="lock-avatar">
            ${Icons.user}
          </div>
          <div class="lock-username">Aizen</div>

          <form class="lock-password-form" id="lock-form">
            <div class="lock-input-group">
              <input type="password" class="lock-input" id="lock-pass-input" placeholder="Password" autocomplete="off" />
              <button type="submit" class="lock-submit-btn" title="Sign In">
                ${Icons.arrowRight}
              </button>
            </div>
            <div class="lock-hint-text">Enter any password (or leave empty; security is decorative)</div>
          </form>
        </div>

        <div class="lock-bottom-bar">
          <div class="lock-tray-icon" title="Connected: Nothing_5G">${Icons.wifi}</div>
          <div class="lock-tray-icon" title="Battery: 99%">${Icons.battery}</div>
          <div class="lock-tray-icon" id="lock-power-btn" title="Power">${Icons.power}</div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    const form = this.el.querySelector('#lock-form');
    const input = this.el.querySelector('#lock-pass-input');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.unlock();
    });

    const powerBtn = this.el.querySelector('#lock-power-btn');
    powerBtn.addEventListener('click', () => {
      Sound.playError();
      alert('Powering down is unavailable. Useless OS requires your undivided attention.');
    });
  }

  startClock() {
    const timeEl = this.el.querySelector('#lock-time');
    const dateEl = this.el.querySelector('#lock-date');

    const update = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      if (timeEl) timeEl.textContent = `${hours}:${minutes}`;

      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      if (dateEl) dateEl.textContent = now.toLocaleDateString(undefined, options);
    };

    update();
    setInterval(update, 1000);
  }

  show() {
    this.el.classList.add('active');
    const input = this.el.querySelector('#lock-pass-input');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 100);
    }
  }

  unlock() {
    Sound.playLogon();
    this.el.classList.remove('active');
    setTimeout(() => {
      if (this.onUnlock) this.onUnlock();
    }, 200);
  }
}

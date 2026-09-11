/**
 * NullOS Quick Settings / Action Center Flyout
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { RealLoadEngine } from '../core/loadEngine.js';

export class QuickSettings {
  constructor(el, appLauncher) {
    this.el = el;
    this.appLauncher = appLauncher;
    this.isOpen = false;
    this.brightness = 100;
    this.volume = 60;
    this.nightLight = false;
    this.render();
    this.bindEvents();
  }

  render() {
    const isLoadActive = RealLoadEngine.isActive;

    this.el.innerHTML = `
      <div class="qs-tiles-grid">
        <div class="qs-tile active" id="qs-wifi">
          <div class="qs-tile-icon">${Icons.wifi}</div>
          <div class="qs-tile-info">
            <span class="qs-tile-title">Nothing_5G</span>
            <span class="qs-tile-status">Connected</span>
          </div>
        </div>

        <div class="qs-tile active" id="qs-bluetooth">
          <div class="qs-tile-icon">${Icons.bluetooth}</div>
          <div class="qs-tile-info">
            <span class="qs-tile-title">Bluetooth</span>
            <span class="qs-tile-status">Active</span>
          </div>
        </div>

        <div class="qs-tile ${this.nightLight ? 'active' : ''}" id="qs-nightlight">
          <div class="qs-tile-icon">${Icons.moon}</div>
          <div class="qs-tile-info">
            <span class="qs-tile-title">Night Light</span>
            <span class="qs-tile-status">${this.nightLight ? 'On' : 'Off'}</span>
          </div>
        </div>

        <div class="qs-tile ${isLoadActive ? 'active' : ''}" id="qs-loadengine" title="Toggle real CPU & RAM hardware consumption">
          <div class="qs-tile-icon">${Icons.cpu}</div>
          <div class="qs-tile-info">
            <span class="qs-tile-title">Real Load</span>
            <span class="qs-tile-status" id="qs-load-status">${isLoadActive ? '≥50% HW Load' : 'Idle'}</span>
          </div>
        </div>
      </div>

      <!-- Brightness Slider -->
      <div class="qs-slider-group">
        ${Icons.sun}
        <input type="range" class="qs-slider" id="qs-bright-slider" min="30" max="100" value="${this.brightness}" />
      </div>

      <!-- Volume Slider -->
      <div class="qs-slider-group">
        ${Icons.volume}
        <input type="range" class="qs-slider" id="qs-vol-slider" min="0" max="100" value="${this.volume}" />
      </div>

      <div class="qs-footer">
        <div style="display:flex;align-items:center;gap:6px;">
          ${Icons.battery}
          <span>99% · 14 seconds remaining</span>
        </div>
        <button id="qs-open-settings" style="cursor:default;color:var(--text-secondary);" title="All Settings">
          ${Icons.settings}
        </button>
      </div>
    `;
  }

  bindEvents() {
    // Night light toggle
    const nlTile = this.el.querySelector('#qs-nightlight');
    nlTile.addEventListener('click', () => {
      Sound.playClick();
      this.nightLight = !this.nightLight;
      nlTile.classList.toggle('active', this.nightLight);
      nlTile.querySelector('.qs-tile-status').textContent = this.nightLight ? 'On' : 'Off';
      document.body.style.filter = this.nightLight ? 'sepia(0.25) saturate(1.1)' : '';
    });

    // Real load toggle
    const loadTile = this.el.querySelector('#qs-loadengine');
    loadTile.addEventListener('click', () => {
      Sound.playClick();
      RealLoadEngine.toggle();
      const active = RealLoadEngine.isActive;
      loadTile.classList.toggle('active', active);
      this.el.querySelector('#qs-load-status').textContent = active ? '≥50% HW Load' : 'Idle';
    });

    // Brightness
    const brightSlider = this.el.querySelector('#qs-bright-slider');
    brightSlider.addEventListener('input', (e) => {
      this.brightness = e.target.value;
      const bRatio = this.brightness / 100;
      document.getElementById('desktop-environment').style.filter = `brightness(${bRatio})`;
    });

    // Volume
    const volSlider = this.el.querySelector('#qs-vol-slider');
    volSlider.addEventListener('input', (e) => {
      this.volume = e.target.value;
      Sound.setVolume(this.volume / 100);
      Sound.playClick();
    });

    // Open settings app
    const settingsBtn = this.el.querySelector('#qs-open-settings');
    settingsBtn.addEventListener('click', () => {
      this.close();
      if (this.appLauncher) this.appLauncher('settings');
    });

    // Outer click to close
    window.addEventListener('pointerdown', (e) => {
      if (this.isOpen && !this.el.contains(e.target) && !e.target.closest('#tray-network-group')) {
        this.close();
      }
    });

    // Subscribe to load engine changes to keep UI synchronized
    RealLoadEngine.subscribe((m) => {
      if (!this.el) return;
      const t = this.el.querySelector('#qs-loadengine');
      const s = this.el.querySelector('#qs-load-status');
      if (t && s) {
        t.classList.toggle('active', m.isActive);
        s.textContent = m.isActive ? '≥50% HW Load' : 'Idle';
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
    this.el.classList.remove('hidden');
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) return;
    this.el.classList.add('hidden');
    this.isOpen = false;
  }
}

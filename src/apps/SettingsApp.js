/**
 * NullOS Settings Application
 * Authentic system settings application with operational controls,
 * Privacy & Permissions manager, Security Center link, Applications manager,
 * and Developer Mode with diagnostic console launcher.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { RealLoadEngine } from '../core/loadEngine.js';
import { PermissionManager, PERMISSION_TYPES } from '../core/permissionManager.js';
import { getMergedAppCatalog, StoreState } from '../core/appCatalog.js';
import { ProcessEngine } from '../core/processEngine.js';
import { DeveloperAPI } from '../core/developerAPI.js';
import { DeviceOptimizer } from '../core/deviceOptimizer.js';
import { Dialog } from '../components/Dialog.js';

export class SettingsApp {
  constructor(onWallpaperChange, appLauncher = null) {
    this.onWallpaperChange = onWallpaperChange;
    this.appLauncher = appLauncher;
    this.container = document.createElement('div');
    this.container.className = 'settings-window';
    this.activeSection = 'system';
    this.developerMode = localStorage.getItem('nullos_developer_mode') === 'true';

    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="settings-sidebar">
        <div class="settings-nav-item active" data-section="system">
          ${Icons.systemMonitor}
          <span>System</span>
        </div>
        <div class="settings-nav-item" data-section="performance">
          ${Icons.cpu}
          <span>Performance & Devices</span>
        </div>
        <div class="settings-nav-item" data-section="personalization">
          ${Icons.sun}
          <span>Personalization</span>
        </div>
        <div class="settings-nav-item" data-section="network">
          ${Icons.wifi}
          <span>Network & Internet</span>
        </div>
        <div class="settings-nav-item" data-section="security">
          ${Icons.shieldCheck}
          <span>Security</span>
        </div>
        <div class="settings-nav-item" data-section="privacy">
          ${Icons.lock}
          <span>Privacy & Permissions</span>
        </div>
        <div class="settings-nav-item" data-section="apps">
          ${Icons.appStore}
          <span>Applications</span>
        </div>
        <div class="settings-nav-item" data-section="developer">
          ${Icons.code}
          <span>Developer</span>
        </div>
        <div class="settings-nav-item" data-section="about">
          ${Icons.info}
          <span>About</span>
        </div>
      </div>

      <div class="settings-content" id="settings-body"></div>
    `;

    this.bindNav();
    this.renderSection('system');
  }

  bindNav() {
    this.container.querySelectorAll('.settings-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        Sound.playClick();
        this.container.querySelectorAll('.settings-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        this.renderSection(item.dataset.section);
      });
    });
  }

  renderSection(section) {
    const body = this.container.querySelector('#settings-body');
    body.innerHTML = '';

    if (section === 'performance') {
      const specs = DeviceOptimizer.getSpecs();
      body.innerHTML = `
        <h2 class="settings-title">Performance & Device Profiles</h2>

        <!-- Detected Hardware Overview -->
        <div class="settings-group">
          <div class="settings-group-title">Detected Hardware Specifications</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:8px;margin-bottom:8px;">
            <div class="settings-card" style="flex-direction:column;align-items:flex-start;padding:12px;">
              <span style="font-size:11px;color:var(--text-muted);">CPU Concurrency</span>
              <strong style="font-size:15px;color:var(--text-primary);margin-top:2px;">${specs.cores} Logical Cores</strong>
            </div>
            <div class="settings-card" style="flex-direction:column;align-items:flex-start;padding:12px;">
              <span style="font-size:11px;color:var(--text-muted);">Estimated Memory</span>
              <strong style="font-size:15px;color:var(--text-primary);margin-top:2px;">${specs.memory} GB RAM</strong>
            </div>
            <div class="settings-card" style="flex-direction:column;align-items:flex-start;padding:12px;">
              <span style="font-size:11px;color:var(--text-muted);">Screen Resolution</span>
              <strong style="font-size:15px;color:var(--text-primary);margin-top:2px;">${specs.width} × ${specs.height} (${specs.dpr}x DPR)</strong>
            </div>
            <div class="settings-card" style="flex-direction:column;align-items:flex-start;padding:12px;">
              <span style="font-size:11px;color:var(--text-muted);">Form Factor & Touch</span>
              <strong style="font-size:15px;color:var(--text-primary);margin-top:2px;text-transform:capitalize;">${specs.formFactor} ${specs.isTouch ? '· Touch' : ''}</strong>
            </div>
          </div>
        </div>

        <!-- Performance Mode Configuration -->
        <div class="settings-group">
          <div class="settings-group-title">Adaptive Performance Tuning</div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Active Device Profile</span>
              <span class="settings-card-desc">Active Mode: <strong style="color:var(--accent);text-transform:uppercase;">${specs.effectiveTier}</strong> (Selection: ${specs.userMode.toUpperCase()})</span>
            </div>
            <select id="select-perf-mode" style="background:var(--surface-input);border:1px solid var(--border-strong);border-radius:4px;padding:6px 10px;color:var(--text-primary);font-size:12px;outline:none;cursor:pointer;">
              <option value="auto" ${specs.userMode === 'auto' ? 'selected' : ''}>Auto-Adaptive (Recommended)</option>
              <option value="low" ${specs.userMode === 'low' ? 'selected' : ''}>Low-Spec / Battery Saver</option>
              <option value="balanced" ${specs.userMode === 'balanced' ? 'selected' : ''}>Balanced Glassmorphism</option>
              <option value="high" ${specs.userMode === 'high' ? 'selected' : ''}>High Performance (120Hz Ultra)</option>
            </select>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Glassmorphism & Backdrop Blurs</span>
              <span class="settings-card-desc">Enable real-time acrylic backdrop-filter. Disable for instant GPU boost on budget devices.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-blur-effect" ${specs.blurEnabled ? 'checked' : ''} />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Auto-Maximize on Mobile Screens</span>
              <span class="settings-card-desc">Automatically launch apps full-screen on displays narrower than 640px.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-auto-maximize" ${specs.autoMaximizeOnMobile ? 'checked' : ''} />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Battery & Background Throttling</span>
              <span class="settings-card-desc">Pause heavy background telemetry when window or browser tab is hidden.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-bg-throttle" ${specs.backgroundThrottle ? 'checked' : ''} />
              <span class="os-switch-slider"></span>
            </label>
          </div>
        </div>
      `;

      const selectMode = body.querySelector('#select-perf-mode');
      selectMode.addEventListener('change', (e) => {
        Sound.playClick();
        DeviceOptimizer.setPerformanceMode(e.target.value);
        this.renderSection('performance');
      });

      const toggleBlur = body.querySelector('#toggle-blur-effect');
      toggleBlur.addEventListener('change', (e) => {
        Sound.playClick();
        DeviceOptimizer.setBlurEffects(e.target.checked);
      });

      const toggleMax = body.querySelector('#toggle-auto-maximize');
      toggleMax.addEventListener('change', (e) => {
        Sound.playClick();
        DeviceOptimizer.setAutoMaximizeOnMobile(e.target.checked);
      });

      const toggleBg = body.querySelector('#toggle-bg-throttle');
      toggleBg.addEventListener('change', (e) => {
        Sound.playClick();
        DeviceOptimizer.setBackgroundThrottle(e.target.checked);
      });
      return;
    }

    if (section === 'system') {
      const isLoad = RealLoadEngine.isActive;
      body.innerHTML = `
        <h2 class="settings-title">System</h2>

        <div class="settings-group">
          <div class="settings-group-title">Productivity & Efficiency</div>

          <!-- Productivity Mode (Humor) -->
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Productivity Mode</span>
              <span class="settings-card-desc">Allow the system to facilitate human achievement. Status: Unavailable.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-prod" disabled />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <!-- Hardware Simulation Engine -->
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Background Telemetry Simulation</span>
              <span class="settings-card-desc">Engage simulated system activity telemetry without real hardware strain.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-hw-load" ${isLoad ? 'checked' : ''} />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <!-- Storage Sense -->
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Storage Sense</span>
              <span class="settings-card-desc">Automatically archive thoughts when they begin making too much sense.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" checked />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <!-- Sound Feedback -->
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">System Acoustic Feedback</span>
              <span class="settings-card-desc">Synthesize realistic OS chimes, alerts, and feedback clicks.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-audio" ${Sound.enabled ? 'checked' : ''} />
              <span class="os-switch-slider"></span>
            </label>
          </div>
        </div>
      `;

      const hwToggle = body.querySelector('#toggle-hw-load');
      hwToggle.addEventListener('change', () => {
        Sound.playClick();
        RealLoadEngine.toggle();
      });

      const audioToggle = body.querySelector('#toggle-audio');
      audioToggle.addEventListener('change', (e) => {
        Sound.enabled = e.target.checked;
        Sound.playClick();
      });

    } else if (section === 'personalization') {
      body.innerHTML = `
        <h2 class="settings-title">Personalization</h2>
        <div class="settings-group">
          <div class="settings-group-title">Desktop Wallpaper</div>
          <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:12px;margin-top:8px;">
            <div class="wp-choice" data-theme="wallpaper-aizen" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid var(--accent);background:url('/wallpaper.png') center/cover;display:flex;align-items:flex-end;padding:8px;font-size:11px;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,0.8);">Aizen</div>
            <div class="wp-choice" data-theme="wallpaper-mica-slate" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid transparent;background:radial-gradient(circle at 20% 20%, #1f2530 0%, #111419 60%, #0a0c0f 100%);display:flex;align-items:flex-end;padding:8px;font-size:11px;">Mica Slate</div>
            <div class="wp-choice" data-theme="wallpaper-azure-dusk" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid transparent;background:radial-gradient(circle at 75% 25%, #18283b 0%, #0d1622 55%, #070b11 100%);display:flex;align-items:flex-end;padding:8px;font-size:11px;">Azure Dusk</div>
            <div class="wp-choice" data-theme="wallpaper-nordic-forest" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid transparent;background:radial-gradient(circle at 30% 70%, #162622 0%, #0d1715 50%, #060b0a 100%);display:flex;align-items:flex-end;padding:8px;font-size:11px;">Nordic Forest</div>
            <div class="wp-choice" data-theme="wallpaper-minimal-abyss" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid transparent;background:linear-gradient(135deg, #18191d 0%, #121316 50%, #0b0c0d 100%);display:flex;align-items:flex-end;padding:8px;font-size:11px;">Minimal Abyss</div>
          </div>
        </div>
      `;

      body.querySelectorAll('.wp-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          Sound.playClick();
          body.querySelectorAll('.wp-choice').forEach(b => b.style.borderColor = 'transparent');
          btn.style.borderColor = 'var(--accent)';
          if (this.onWallpaperChange) {
            this.onWallpaperChange(btn.dataset.theme);
          }
        });
      });

    } else if (section === 'network') {
      body.innerHTML = `
        <h2 class="settings-title">Network & Internet</h2>
        <div class="settings-card">
          <div class="settings-card-info">
            <span class="settings-card-name">Wi-Fi (Nothing_5G)</span>
            <span class="settings-card-desc">Connected, secured · Signal: Excellent · Throughput: Infinite void</span>
          </div>
          <button class="dialog-btn" id="btn-disconnect">Disconnect</button>
        </div>
      `;
      body.querySelector('#btn-disconnect').addEventListener('click', () => {
        Dialog.show({
          title: 'Network Manager',
          message: 'Cannot disconnect from Nothing_5G',
          subtext: 'Reason: You are already connected to nothing.',
          type: 'info'
        });
      });

    } else if (section === 'security') {
      body.innerHTML = `
        <h2 class="settings-title">Security</h2>
        <div class="settings-group">
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Security Center</span>
              <span class="settings-card-desc">View real-time threat protection and productivity hazard management.</span>
            </div>
            <button class="dialog-btn primary" id="btn-open-sec-center">Open Security Center</button>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Existential Firewall</span>
              <span class="settings-card-desc">Status: Active · Blocking incoming expectations.</span>
            </div>
            <label class="os-switch"><input type="checkbox" checked /><span class="os-switch-slider"></span></label>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Scan History</span>
              <span class="settings-card-desc">Last scan completed today. Productivity threats quarantined.</span>
            </div>
            <button class="dialog-btn" id="btn-view-scan-history">View Scans</button>
          </div>
        </div>
      `;

      body.querySelector('#btn-open-sec-center').addEventListener('click', () => {
        if (this.appLauncher) this.appLauncher('securityCenter');
      });

      body.querySelector('#btn-view-scan-history').addEventListener('click', () => {
        if (this.appLauncher) this.appLauncher('securityCenter');
      });

    } else if (section === 'privacy') {
      body.innerHTML = `
        <h2 class="settings-title">Privacy & Permissions</h2>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">
          Manage hardware and system capabilities granted to installed applications.
        </div>

        <div class="settings-group">
          <div class="settings-group-title">Permission Categories</div>
          ${PERMISSION_TYPES.map(p => `
            <div class="settings-card">
              <div class="settings-card-info">
                <span class="settings-card-name">${p.name}</span>
                <span class="settings-card-desc">${p.desc}</span>
              </div>
              <span class="sec-badge ok" style="font-size:11px;">Managed</span>
            </div>
          `).join('')}
        </div>

        <div class="settings-group" style="margin-top:16px;">
          <div class="settings-group-title">App Permissions Matrix</div>
          <div class="settings-perm-table" style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:12px;">
            ${getMergedAppCatalog().filter(a => StoreState.isInstalled(a.id)).map(app => {
              const mic = PermissionManager.getPermission(app.id, 'microphone');
              const cam = PermissionManager.getPermission(app.id, 'camera');
              const files = PermissionManager.getPermission(app.id, 'files');

              return `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-divider);">
                  <div>
                    <div style="font-weight:600;font-size:13px;">${app.name}</div>
                    <div style="font-size:11px;color:var(--text-muted);">ID: ${app.id}</div>
                  </div>
                  <div style="display:flex;gap:16px;align-items:center;">
                    <label style="display:flex;align-items:center;gap:6px;font-size:11px;">
                      <span>Mic</span>
                      <input type="checkbox" class="perm-chk" data-app="${app.id}" data-perm="microphone" ${mic === 'allow' ? 'checked' : ''} />
                    </label>
                    <label style="display:flex;align-items:center;gap:6px;font-size:11px;">
                      <span>Camera</span>
                      <input type="checkbox" class="perm-chk" data-app="${app.id}" data-perm="camera" ${cam === 'allow' ? 'checked' : ''} />
                    </label>
                    <label style="display:flex;align-items:center;gap:6px;font-size:11px;">
                      <span>Files</span>
                      <input type="checkbox" class="perm-chk" data-app="${app.id}" data-perm="files" ${files === 'allow' ? 'checked' : ''} />
                    </label>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      body.querySelectorAll('.perm-chk').forEach(chk => {
        chk.addEventListener('change', (e) => {
          Sound.playClick();
          const appId = chk.dataset.app;
          const permId = chk.dataset.perm;
          PermissionManager.setPermission(appId, permId, e.target.checked ? 'allow' : 'deny');
        });
      });

    } else if (section === 'apps') {
      const installedApps = getMergedAppCatalog().filter(a => StoreState.isInstalled(a.id));

      body.innerHTML = `
        <h2 class="settings-title">Installed Applications</h2>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">
          Review and configure installed useless software packages (${installedApps.length} installed).
        </div>

        <div class="settings-group">
          ${installedApps.map(app => `
            <div class="settings-card">
              <div style="display:flex;align-items:center;gap:12px;">
                <div style="font-size:24px;">${app.icon}</div>
                <div class="settings-card-info">
                  <span class="settings-card-name">${app.name}</span>
                  <span class="settings-card-desc">Version ${app.version} · Size: ${app.size}</span>
                </div>
              </div>
              <div style="display:flex;gap:8px;">
                <button class="dialog-btn primary btn-app-launch" data-id="${app.id}">Launch</button>
                <button class="dialog-btn btn-app-uninstall" data-id="${app.id}" style="color:var(--status-red);">Uninstall</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      body.querySelectorAll('.btn-app-launch').forEach(btn => {
        btn.addEventListener('click', () => {
          if (this.appLauncher) this.appLauncher(btn.dataset.id);
        });
      });

      body.querySelectorAll('.btn-app-uninstall').forEach(btn => {
        btn.addEventListener('click', () => {
          Sound.playClick();
          StoreState.uninstallApp(btn.dataset.id);
          this.renderSection('apps');
        });
      });

    } else if (section === 'developer') {
      body.innerHTML = `
        <h2 class="settings-title">Developer Options</h2>
        <div class="settings-group">
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Developer Mode</span>
              <span class="settings-card-desc">Enable internal diagnostic tools, App Registry inspection, and Developer Console.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-dev-mode" ${this.developerMode ? 'checked' : ''} />
              <span class="os-switch-slider"></span>
            </label>
          </div>
        </div>

        <div id="dev-mode-features" style="display:${this.developerMode ? 'block' : 'none'};margin-top:16px;">
          <div class="settings-group">
            <div class="settings-group-title">Developer Utilities</div>

            <div class="settings-card">
              <div class="settings-card-info">
                <span class="settings-card-name">Developer & Diagnostic Console</span>
                <span class="settings-card-desc">Open the simulated CLI sandbox to query apps.list(), processes.list(), and uselessness.getScore().</span>
              </div>
              <button class="dialog-btn primary" id="btn-open-dev-console">Launch Console</button>
            </div>

            <div class="settings-card">
              <div class="settings-card-info">
                <span class="settings-card-name">Active Background Processes</span>
                <span class="settings-card-desc">${ProcessEngine.getProcesses().length} simulated processes active.</span>
              </div>
              <button class="dialog-btn" id="btn-dev-sysmon">Inspect in System Monitor</button>
            </div>

            <div class="settings-card">
              <div class="settings-card-info">
                <span class="settings-card-name">Simulated App Registration API</span>
                <span class="settings-card-desc">Exposes global <code>window.UselessOS</code> with registerApp, launchApp, notify, etc.</span>
              </div>
              <span class="sec-badge ok">Ready</span>
            </div>
          </div>
        </div>
      `;

      const devToggle = body.querySelector('#toggle-dev-mode');
      devToggle.addEventListener('change', (e) => {
        Sound.playClick();
        this.developerMode = e.target.checked;
        localStorage.setItem('nullos_developer_mode', String(this.developerMode));
        const features = body.querySelector('#dev-mode-features');
        if (features) features.style.display = this.developerMode ? 'block' : 'none';
      });

      const consoleBtn = body.querySelector('#btn-open-dev-console');
      if (consoleBtn) {
        consoleBtn.addEventListener('click', () => {
          if (this.appLauncher) this.appLauncher('developerConsole');
        });
      }

      const sysmonBtn = body.querySelector('#btn-dev-sysmon');
      if (sysmonBtn) {
        sysmonBtn.addEventListener('click', () => {
          if (this.appLauncher) this.appLauncher('systemMonitor');
        });
      }

    } else if (section === 'about') {
      const cores = navigator.hardwareConcurrency || 4;
      body.innerHTML = `
        <h2 class="settings-title">About NullOS</h2>
        <div class="settings-card">
          <div class="settings-card-info">
            <span class="settings-card-name">NullOS Enterprise Edition (Useless OS V2)</span>
            <span class="settings-card-desc">Version 26H2 (Build 26100.1742) · 64-bit Certified Inaction OS</span>
          </div>
          <button class="dialog-btn primary" id="btn-check-updates">Check for Updates</button>
        </div>

        <div class="settings-group" style="margin-top:10px;">
          <div class="settings-group-title">System Specifications</div>
          <div style="font-size:12px;color:var(--text-secondary);display:flex;flex-direction:column;gap:6px;background:var(--surface-card);padding:14px;border-radius:6px;border:1px solid var(--border-subtle);">
            <div><strong>Architecture:</strong> Useless OS V2 Unified Core</div>
            <div><strong>Processor:</strong> Simulated Hardware (${cores} Cores Available)</div>
            <div><strong>Installed RAM:</strong> 8.00 GB (5.2 GB Simulated Allocation)</div>
            <div><strong>Uselessness Index:</strong> 99.8% (Certified Stable)</div>
            <div><strong>Global Status:</strong> Indistinguishable from genuine desktop</div>
          </div>
        </div>
      `;

      body.querySelector('#btn-check-updates').addEventListener('click', () => {
        Sound.playClick();
        Dialog.show({
          title: 'NullOS Update',
          message: 'You are completely up to date.',
          subtext: 'Last checked: Today. No updates needed because perfection in uselessness has already been achieved.',
          type: 'check'
        });
      });
    }
  }

  getElement() {
    return this.container;
  }
}

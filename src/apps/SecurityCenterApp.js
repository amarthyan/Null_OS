/**
 * NullOS Security Center Application
 * Enterprise-grade security dashboard with simulated threat scanning,
 * productivity hazard detection, and active inactivity defenses.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { Notifications } from '../components/NotificationCenter.js';
import { UselessnessEngine } from '../core/uselessnessEngine.js';
import { AchievementEngine } from '../core/achievementEngine.js';
import { Dialog } from '../components/Dialog.js';

export class SecurityCenterApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'security-center-window';
    this.activeTab = 'dashboard';
    this.isScanning = false;
    this.scanProgress = 0;
    this.scanInterval = null;
    this.productivityThreatActive = true;
    this.scanHistory = [
      { date: 'Today, 14:22', type: 'Quick Scan', threats: 1, action: 'Ignored' },
      { date: 'Yesterday, 11:05', type: 'Full Scan', threats: 1, action: 'Archived' }
    ];

    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="sec-sidebar">
        <div class="sec-brand">
          ${Icons.shieldCheck}
          <span>Security Center</span>
        </div>
        <div class="sec-nav">
          <button class="sec-nav-item active" data-tab="dashboard">
            ${Icons.shield}
            <span>Home</span>
          </button>
          <button class="sec-nav-item" data-tab="virus">
            ${Icons.alertCircle}
            <span>Virus & Threat</span>
          </button>
          <button class="sec-nav-item" data-tab="firewall">
            ${Icons.firewall}
            <span>Firewall & Network</span>
          </button>
          <button class="sec-nav-item" data-tab="productivity">
            ${Icons.warning}
            <span>Productivity Guard</span>
          </button>
          <button class="sec-nav-item" data-tab="history">
            ${Icons.clock}
            <span>Scan History</span>
          </button>
        </div>
      </div>

      <div class="sec-main" id="sec-main-content"></div>
    `;

    this.bindNav();
    this.renderTab('dashboard');
  }

  bindNav() {
    this.container.querySelectorAll('.sec-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        this.container.querySelectorAll('.sec-nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeTab = btn.dataset.tab;
        this.renderTab(this.activeTab);
      });
    });
  }

  renderTab(tab) {
    const main = this.container.querySelector('#sec-main-content');
    main.innerHTML = '';

    if (tab === 'dashboard') {
      this.renderDashboard(main);
    } else if (tab === 'virus') {
      this.renderVirusSection(main);
    } else if (tab === 'firewall') {
      this.renderFirewall(main);
    } else if (tab === 'productivity') {
      this.renderProductivityGuard(main);
    } else if (tab === 'history') {
      this.renderHistory(main);
    }
  }

  renderDashboard(main) {
    main.innerHTML = `
      <div class="sec-header">
        <h1 class="sec-title">Security at a Glance</h1>
        <p class="sec-subtitle">Active defenses protecting your right to do absolutely nothing.</p>
      </div>

      <!-- Threat Alert Banner if Productivity Detected -->
      ${this.productivityThreatActive ? `
        <div class="sec-alert-banner">
          <div class="sec-alert-icon">${Icons.warning}</div>
          <div class="sec-alert-info">
            <div class="sec-alert-title">Productivity Threat Detected</div>
            <div class="sec-alert-desc">An active background instance of <code>productivity.exe</code> was discovered attempting useful work.</div>
          </div>
          <button class="dialog-btn primary" id="btn-banner-remove">Remove Productivity</button>
        </div>
      ` : `
        <div class="sec-alert-banner safe">
          <div class="sec-alert-icon">${Icons.check}</div>
          <div class="sec-alert-info">
            <div class="sec-alert-title">Zero Useful Threats Present</div>
            <div class="sec-alert-desc">All systems operating within certified parameters of total inefficiency.</div>
          </div>
        </div>
      `}

      <!-- Status Cards Grid -->
      <div class="sec-cards-grid">
        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${Icons.shieldCheck}</div>
            <span class="sec-badge ok">Protected</span>
          </div>
          <div class="sec-card-name">Device Security</div>
          <div class="sec-card-text">Core OS kernel integrity confirmed. Zero useful instructions executed.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${Icons.alertCircle}</div>
            <span class="sec-badge ok">No Threats Found</span>
          </div>
          <div class="sec-card-name">Virus & Threat Protection</div>
          <div class="sec-card-text">Last scanned: Just now. Zero viruses, trojans, or motivation detected.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${Icons.firewall}</div>
            <span class="sec-badge ok">Active</span>
          </div>
          <div class="sec-card-name">Firewall</div>
          <div class="sec-card-text">Incoming expectations and outside deadlines successfully blocked.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${Icons.browserWindow}</div>
            <span class="sec-badge ok">Verified</span>
          </div>
          <div class="sec-card-name">App Security</div>
          <div class="sec-card-text">All 23 installed applications confirmed to provide zero utility.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${Icons.lock}</div>
            <span class="sec-badge ok">Mostly Private</span>
          </div>
          <div class="sec-card-name">Privacy</div>
          <div class="sec-card-text">Nobody is monitoring you because nothing of consequence is occurring.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${Icons.cpu}</div>
            <span class="sec-badge ok">100% Idle</span>
          </div>
          <div class="sec-card-name">System Health</div>
          <div class="sec-card-text">Hardware temperature: Cool. Cognitive pressure: Zero.</div>
        </div>

        <div class="sec-card critical">
          <div class="sec-card-top">
            <div class="sec-card-icon">${Icons.warning}</div>
            <span class="sec-badge danger">${this.productivityThreatActive ? 'Critical' : 'Secured'}</span>
          </div>
          <div class="sec-card-name">Productivity Protection</div>
          <div class="sec-card-text">${this.productivityThreatActive ? 'Threat detected: productivity.exe attempting to optimize your time.' : 'Productivity quarantined.'}</div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="sec-scan-actions">
        <button class="dialog-btn primary" id="btn-quick-scan">Quick Scan</button>
        <button class="dialog-btn" id="btn-deep-scan">Deep Scan</button>
      </div>
    `;

    const bannerBtn = main.querySelector('#btn-banner-remove');
    if (bannerBtn) {
      bannerBtn.addEventListener('click', () => {
        this.removeProductivity();
      });
    }

    main.querySelector('#btn-quick-scan').addEventListener('click', () => {
      this.startScan('Quick Scan');
    });

    main.querySelector('#btn-deep-scan').addEventListener('click', () => {
      this.startScan('Deep Scan');
    });
  }

  renderVirusSection(main) {
    main.innerHTML = `
      <div class="sec-header">
        <h1 class="sec-title">Virus & Threat Protection</h1>
        <p class="sec-subtitle">Simulated threat defense engine powered by NullGuard.</p>
      </div>

      <div class="sec-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <div>
            <div style="font-size:15px;font-weight:600;">Current Threats</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
              ${this.productivityThreatActive ? '1 productivity hazard requires immediate inaction.' : 'No active threats detected.'}
            </div>
          </div>
          <span class="sec-badge ${this.productivityThreatActive ? 'danger' : 'ok'}">
            ${this.productivityThreatActive ? 'Action Required' : 'Protected'}
          </span>
        </div>

        ${this.productivityThreatActive ? `
          <div class="sec-threat-item">
            <div class="sec-threat-header">
              <span class="sec-threat-name">productivity.exe</span>
              <span class="sec-badge danger">Extremely Dangerous</span>
            </div>
            <div class="sec-threat-desc">
              Detected in: <code>C:\\System32\\habits\\productivity.exe</code><br/>
              Behavior: Tries to set calendar appointments, prioritize tasks, and establish focus.
            </div>
            <div class="sec-threat-actions">
              <button class="dialog-btn primary" id="btn-remove-threat">Remove Productivity</button>
              <button class="dialog-btn" id="btn-quarantine-threat">Ignore Forever</button>
            </div>
          </div>
        ` : `
          <div style="text-align:center;padding:30px;color:var(--text-muted);font-size:13px;">
            ✓ Your computer is 100% free of productivity threats.
          </div>
        `}
      </div>

      <div class="sec-scan-box" id="scan-in-progress-box" style="display:${this.isScanning ? 'block' : 'none'};">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;">
          <span id="scan-status-text">Scanning system directories...</span>
          <span id="scan-pct">0%</span>
        </div>
        <div class="store-progress-track">
          <div class="store-progress-fill" id="scan-progress-fill" style="width:0%;"></div>
        </div>
        <div id="scan-current-file" style="font-size:11px;color:var(--text-muted);margin-top:8px;font-family:monospace;">
          Scanning: C:\\NullOS\\System\\idle_loop.dll
        </div>
      </div>

      <div class="sec-scan-actions">
        <button class="dialog-btn primary" id="btn-run-scan-tab">Run Quick Scan Now</button>
      </div>
    `;

    const removeBtn = main.querySelector('#btn-remove-threat');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => this.removeProductivity());
    }

    const runScanBtn = main.querySelector('#btn-run-scan-tab');
    if (runScanBtn) {
      runScanBtn.addEventListener('click', () => this.startScan('Quick Scan'));
    }
  }

  renderFirewall(main) {
    main.innerHTML = `
      <div class="sec-header">
        <h1 class="sec-title">Firewall & Network Protection</h1>
        <p class="sec-subtitle">Stateful packet filtering for existential obligations.</p>
      </div>

      <div class="sec-panel">
        <div class="sec-toggle-row">
          <div>
            <div style="font-weight:600;font-size:13px;">Existential Firewall</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
              Blocks incoming deadlines and unrequested urgent emails.
            </div>
          </div>
          <label class="os-switch"><input type="checkbox" checked /><span class="os-switch-slider"></span></label>
        </div>

        <div class="sec-toggle-row">
          <div>
            <div style="font-weight:600;font-size:13px;">Domain Filtering</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
              Automatically rewrites search queries into useless conclusions.
            </div>
          </div>
          <label class="os-switch"><input type="checkbox" checked /><span class="os-switch-slider"></span></label>
        </div>

        <div class="sec-toggle-row">
          <div>
            <div style="font-weight:600;font-size:13px;">Motivation Intrusion Prevention</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
              Inspects incoming packets for sudden surges of inspiration.
            </div>
          </div>
          <label class="os-switch"><input type="checkbox" checked /><span class="os-switch-slider"></span></label>
        </div>
      </div>
    `;
  }

  renderProductivityGuard(main) {
    main.innerHTML = `
      <div class="sec-header">
        <h1 class="sec-title">Productivity Guard</h1>
        <p class="sec-subtitle">Dedicated quarantine for high-risk work habits.</p>
      </div>

      <div class="sec-panel">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
          <div style="font-size:32px;">🛑</div>
          <div>
            <div style="font-weight:600;font-size:14px;">Real-Time Habit Neutralization</div>
            <div style="font-size:12px;color:var(--text-secondary);">
              Status: <strong style="color:var(--status-green)">ENGAGED</strong>
            </div>
          </div>
        </div>

        <div style="font-size:13px;line-height:1.6;color:var(--text-secondary);">
          Productivity Guard continuously intercepts any attempt to write code, solve problems, or accomplish meaningful milestones.
          All productive impulses are safely routed to <code>/dev/null</code>.
        </div>

        <div style="margin-top:20px;display:flex;gap:10px;">
          <button class="dialog-btn primary" id="btn-quarantine-all">Purge All Ambition</button>
        </div>
      </div>
    `;

    main.querySelector('#btn-quarantine-all').addEventListener('click', () => {
      Sound.playClick();
      Dialog.show({
        title: 'Purge Complete',
        message: 'All ambition successfully neutralized.',
        subtext: 'You may now resume looking at rocks in peace.',
        type: 'check'
      });
    });
  }

  renderHistory(main) {
    main.innerHTML = `
      <div class="sec-header">
        <h1 class="sec-title">Protection History</h1>
        <p class="sec-subtitle">Recent automated actions taken by Security Center.</p>
      </div>

      <div class="sec-panel">
        <div class="sec-history-list">
          ${this.scanHistory.map(h => `
            <div class="sec-history-item">
              <div>
                <div style="font-weight:600;font-size:13px;">${h.type}</div>
                <div style="font-size:11px;color:var(--text-muted);">${h.date}</div>
              </div>
              <div style="text-align:right;">
                <span class="sec-badge ${h.threats > 0 ? 'danger' : 'ok'}">${h.threats} threats found</span>
                <div style="font-size:11px;color:var(--text-secondary);margin-top:2px;">Action: ${h.action}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  startScan(type = 'Quick Scan') {
    if (this.isScanning) return;
    this.isScanning = true;
    this.scanProgress = 0;

    Sound.playClick();
    this.renderTab(this.activeTab);

    const scanBox = this.container.querySelector('#scan-in-progress-box');
    if (scanBox) scanBox.style.display = 'block';

    const files = [
      'C:\\NullOS\\System\\idle_loop.dll',
      'C:\\NullOS\\Drivers\\coffee_break.sys',
      'C:\\NullOS\\Data\\daydream.inf',
      'C:\\Users\\Aizen\\Desktop\\nothing.txt',
      'C:\\ProgramFiles\\RockSimulator\\stone.mesh',
      'C:\\System32\\habits\\productivity.exe'
    ];

    let step = 0;
    this.scanInterval = setInterval(() => {
      this.scanProgress += 10;
      step++;

      const fill = this.container.querySelector('#scan-progress-fill');
      const pct = this.container.querySelector('#scan-pct');
      const file = this.container.querySelector('#scan-current-file');

      if (fill) fill.style.width = `${this.scanProgress}%`;
      if (pct) pct.textContent = `${this.scanProgress}%`;
      if (file) file.textContent = `Scanning: ${files[step % files.length]}`;

      if (this.scanProgress >= 100) {
        clearInterval(this.scanInterval);
        this.isScanning = false;

        this.productivityThreatActive = true;
        this.scanHistory.unshift({
          date: 'Just now',
          type,
          threats: 1,
          action: 'Detected productivity.exe'
        });

        UselessnessEngine.recordSecurityScan();
        AchievementEngine.incrementProgress('security-expert', 1);

        Sound.playNotification();
        Notifications.notify({
          title: 'Scan Complete',
          message: '1 productivity threat detected: productivity.exe',
          app: 'Security Center',
          icon: 'shieldAlert',
          duration: 6000
        });

        this.renderTab(this.activeTab);
      }
    }, 280);
  }

  removeProductivity() {
    Sound.playClick();
    this.productivityThreatActive = false;
    this.scanHistory.unshift({
      date: 'Just now',
      type: 'Remediation',
      threats: 0,
      action: 'Removed productivity.exe'
    });

    UselessnessEngine.recordSecurityScan();
    AchievementEngine.unlock('productivity-hunter');

    Dialog.show({
      title: 'Security Center',
      message: 'Scan completed successfully.',
      subtext: '1 productivity threat removed.\nProductivity.exe has been vaporized.',
      type: 'check'
    }).then(() => {
      Notifications.notify({
        title: 'Threat Removed',
        message: 'Productivity threat removed successfully.',
        app: 'Security Center',
        icon: 'check',
        duration: 5000
      });
      this.renderTab(this.activeTab);
    });
  }

  getElement() {
    return this.container;
  }
}

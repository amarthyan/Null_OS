/**
 * NullOS System Monitor / Task Manager
 * Authentic enterprise task manager with real-time graphs, simulated process telemetry,
 * lifecycle management, and global uselessness index metrics.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { RealLoadEngine } from '../core/loadEngine.js';
import { ProcessEngine } from '../core/processEngine.js';
import { UselessnessEngine } from '../core/uselessnessEngine.js';
import { DeviceOptimizer } from '../core/deviceOptimizer.js';
import { Dialog } from '../components/Dialog.js';

export class SystemMonitorApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'sysmon-window';
    this.historyCPU = new Array(30).fill(12);
    this.historyRAM = new Array(30).fill(45);
    this.selectedProcess = null;
    this.intervalId = null;

    this.render();
    this.startTelemetry();

    this.unsubscribeProcesses = ProcessEngine.subscribe(() => {
      this.renderProcesses();
    });

    this.unsubscribeUselessness = UselessnessEngine.subscribe(() => {
      this.updateUselessnessTab();
    });
  }

  render() {
    this.container.innerHTML = `
      <div class="sysmon-tabs">
        <button class="sysmon-tab-btn active" data-tab="performance">Performance</button>
        <button class="sysmon-tab-btn" data-tab="processes">Processes</button>
        <button class="sysmon-tab-btn" data-tab="uselessness">Uselessness Telemetry</button>
      </div>

      <!-- PERFORMANCE TAB -->
      <div class="sysmon-tab-content active" id="tab-performance">
        <!-- Hardware Engine Notice -->
        <div class="sysmon-load-banner">
          <div class="sysmon-load-left">
            <div class="sysmon-load-title">
              ${Icons.cpu}
              <span>Hardware Simulation Engine: <strong id="sysmon-banner-status">ACTIVE</strong></span>
            </div>
            <div class="sysmon-load-desc" id="sysmon-banner-detail">
              Simulating enterprise background workloads & telemetry across logical cores.
            </div>
          </div>
          <button class="sysmon-toggle-btn" id="sysmon-toggle-workload">Engaged</button>
        </div>

        <div class="sysmon-metrics-grid">
          <!-- CPU Card -->
          <div class="sysmon-card">
            <div class="sysmon-card-header">
              <span>CPU Usage</span>
              <span id="sysmon-cpu-clock">3.4 GHz</span>
            </div>
            <div class="sysmon-card-val" id="sysmon-cpu-pct">58%</div>
            <div class="sysmon-card-sub" id="sysmon-cpu-workers">4 Active Simulated Workers</div>
            <canvas class="sysmon-card-canvas" id="canvas-cpu"></canvas>
          </div>

          <!-- Memory Card -->
          <div class="sysmon-card">
            <div class="sysmon-card-header">
              <span>Memory (RAM)</span>
              <span>5.2 / 8.0 GB (65%)</span>
            </div>
            <div class="sysmon-card-val" id="sysmon-mem-val">5.2 GB</div>
            <div class="sysmon-card-sub" id="sysmon-mem-sub">Allocated to Useless Services</div>
            <canvas class="sysmon-card-canvas" id="canvas-mem"></canvas>
          </div>

          <!-- Disk Card -->
          <div class="sysmon-card">
            <div class="sysmon-card-header">
              <span>Disk 0 (C:)</span>
              <span>1.4 TB / 2.0 TB (70%)</span>
            </div>
            <div class="sysmon-card-val" id="sysmon-disk-val">1.4 TB</div>
            <div class="sysmon-card-sub">Read: 24.2 MB/s · Write: 18.4 MB/s</div>
            <canvas class="sysmon-card-canvas" id="canvas-disk"></canvas>
          </div>

          <!-- Uselessness Index Card -->
          <div class="sysmon-card">
            <div class="sysmon-card-header">
              <span>System Uselessness</span>
              <span>Telemetry</span>
            </div>
            <div class="sysmon-card-val" id="sysmon-useless-pct" style="color:var(--status-green)">${UselessnessEngine.getScore()}%</div>
            <div class="sysmon-card-sub">Productivity: ${UselessnessEngine.getProductivity()}% (Negligible)</div>
            <canvas class="sysmon-card-canvas" id="canvas-useless"></canvas>
          </div>
        </div>
      </div>

      <!-- PROCESSES TAB -->
      <div class="sysmon-tab-content" id="tab-processes">
        <div style="overflow-x:auto;flex:1;">
          <table class="sysmon-process-table">
            <thead>
              <tr>
                <th style="width:200px;">Name</th>
                <th style="width:70px;">PID</th>
                <th style="width:160px;">Status</th>
                <th style="width:75px;">CPU %</th>
                <th style="width:90px;">Memory</th>
                <th style="width:85px;">Disk</th>
                <th>Network</th>
              </tr>
            </thead>
            <tbody id="sysmon-process-rows"></tbody>
          </table>
        </div>

        <div class="sysmon-footer">
          <span style="font-size:11px;color:var(--text-muted);" id="sysmon-footer-info">
            Processes: ${ProcessEngine.getProcesses().length} · Threads: 48 · Handles: 1,420
          </span>
          <div style="display:flex;gap:8px;">
            <button class="dialog-btn" id="sysmon-btn-restart" disabled>Restart Process</button>
            <button class="dialog-btn primary" id="sysmon-btn-end" disabled>End Process</button>
          </div>
        </div>
      </div>

      <!-- USELESSNESS TELEMETRY TAB -->
      <div class="sysmon-tab-content" id="tab-uselessness">
        <div class="sysmon-useless-panel" id="sysmon-useless-view"></div>
      </div>
    `;

    this.bindEvents();
    this.renderProcesses();
    this.updateUselessnessTab();
  }

  bindEvents() {
    // Tabs
    this.container.querySelectorAll('.sysmon-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const tab = btn.dataset.tab;
        this.container.querySelectorAll('.sysmon-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.container.querySelectorAll('.sysmon-tab-content').forEach(c => c.classList.remove('active'));
        this.container.querySelector(`#tab-${tab}`).classList.add('active');

        if (tab === 'uselessness') {
          this.updateUselessnessTab();
        }
      });
    });

    // Toggle simulation
    const toggleBtn = this.container.querySelector('#sysmon-toggle-workload');
    toggleBtn.addEventListener('click', () => {
      Sound.playClick();
      RealLoadEngine.toggle();
      this.updateEngineUI();
    });

    // End Process
    const endBtn = this.container.querySelector('#sysmon-btn-end');
    endBtn.addEventListener('click', () => {
      if (!this.selectedProcess) return;

      const proc = this.selectedProcess;
      Dialog.show({
        title: 'Task Manager Confirmation',
        message: `Terminate ${proc.name}?`,
        subtext: `Ending ${proc.name} (PID: ${proc.pid}) might cause productivity levels to increase.`,
        type: 'warning',
        buttons: [
          { text: 'End Process', primary: true },
          { text: 'Cancel' }
        ]
      }).then(choice => {
        if (choice === 'End Process') {
          ProcessEngine.terminateProcess(proc.pid);
          this.selectedProcess = null;
          endBtn.disabled = true;
          this.container.querySelector('#sysmon-btn-restart').disabled = true;

          Dialog.show({
            title: 'Task Manager',
            message: 'Process terminated successfully.',
            subtext: `${proc.name} has been stopped.`,
            type: 'check'
          });
        }
      });
    });

    // Restart Process
    const restartBtn = this.container.querySelector('#sysmon-btn-restart');
    restartBtn.addEventListener('click', () => {
      if (!this.selectedProcess) return;
      Sound.playClick();
      ProcessEngine.restartProcess(this.selectedProcess.pid);
    });
  }

  renderProcesses() {
    const tbody = this.container.querySelector('#sysmon-process-rows');
    if (!tbody) return;
    tbody.innerHTML = '';

    const list = ProcessEngine.getProcesses();
    const footerInfo = this.container.querySelector('#sysmon-footer-info');
    if (footerInfo) {
      footerInfo.textContent = `Processes: ${list.length} · Threads: ${list.length * 4} · Status: Verified Inactive`;
    }

    list.forEach(proc => {
      const tr = document.createElement('tr');
      if (this.selectedProcess && this.selectedProcess.pid === proc.pid) {
        tr.classList.add('selected');
      }

      tr.innerHTML = `
        <td style="font-weight:500;">${proc.name}</td>
        <td style="color:var(--text-muted);">${proc.pid}</td>
        <td>${proc.status}</td>
        <td>${proc.currentCpu.toFixed(1)}%</td>
        <td>${proc.currentMem} MB</td>
        <td style="color:var(--text-muted);">${proc.disk || '0.0 MB/s'}</td>
        <td style="color:var(--text-muted);">${proc.network || '0.0 KB/s'}</td>
      `;

      tr.addEventListener('click', () => {
        tbody.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
        tr.classList.add('selected');
        this.selectedProcess = proc;
        this.container.querySelector('#sysmon-btn-end').disabled = false;
        this.container.querySelector('#sysmon-btn-restart').disabled = false;
      });

      tbody.appendChild(tr);
    });
  }

  updateUselessnessTab() {
    const view = this.container.querySelector('#sysmon-useless-view');
    if (!view) return;

    const stats = UselessnessEngine.getStats();

    view.innerHTML = `
      <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:8px;padding:24px;text-align:center;margin-bottom:16px;">
        <div style="font-size:11px;letter-spacing:1px;font-weight:700;color:var(--text-muted);margin-bottom:4px;">OFFICIAL USELESSNESS SCORE</div>
        <div style="font-size:42px;font-weight:800;color:var(--status-green);letter-spacing:-1px;">
          ${stats.uselessnessScore}
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:4px;">
          Productivity: <strong style="color:var(--status-red);">${stats.productivityScore}</strong> (Safely Negligible)
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:6px;">
          Total Time Wasted: <strong style="color:var(--text-primary);">${stats.timeWasted}</strong>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:12px;">
        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Applications Installed</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${stats.appsInstalled}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Applications Opened</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${stats.appsOpened}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Browser Searches</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${stats.browserSearches}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Calculations Performed</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${stats.calculatorCalculations}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Button Clicks Recorded</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${stats.buttonClicks}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Security Scans Run</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${stats.securityScans}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Easter Eggs Discovered</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;color:#f1c40f;">${stats.easterEggsDiscovered}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Achievements Unlocked</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;color:#3fb950;">${stats.achievementsUnlocked}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Updates Completed</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${stats.updatesCompleted}</div>
        </div>
      </div>
    `;
  }

  startTelemetry() {
    const update = () => {
      // Background and battery throttling
      if (typeof document !== 'undefined' && document.hidden && DeviceOptimizer.backgroundThrottle) {
        return;
      }

      const metrics = RealLoadEngine.getMetrics();
      const isLoad = metrics.isActive;

      let cpuVal = isLoad ? metrics.cpuUsagePct : 6;
      this.historyCPU.shift();
      this.historyCPU.push(cpuVal);

      const cpuPctEl = this.container.querySelector('#sysmon-cpu-pct');
      if (cpuPctEl) cpuPctEl.textContent = `${cpuVal}%`;

      const memValEl = this.container.querySelector('#sysmon-mem-val');
      if (memValEl) {
        memValEl.textContent = isLoad ? '5.2 GB' : '512 MB';
      }

      const scoreEl = this.container.querySelector('#sysmon-useless-pct');
      if (scoreEl) {
        scoreEl.textContent = `${UselessnessEngine.getScore()}%`;
      }

      // Draw real-time sparkline charts only if container is visible in DOM
      if (this.container.offsetParent !== null) {
        this.drawChart('canvas-cpu', this.historyCPU, '#0078d4');
        this.drawChart('canvas-mem', this.historyRAM, '#8e44ad');
        this.drawChart('canvas-disk', [20, 25, 42, 38, 22, 45, 42, 39, 41, 40], '#27ae60');
        this.drawChart('canvas-useless', [99.8, 99.7, 99.8, 99.9, 99.8, 99.8, 99.8], '#f39c12');
      }
    };

    const interval = DeviceOptimizer.currentTier === 'low' ? 2000 : 1000;
    this.intervalId = setInterval(update, interval);
  }

  drawChart(canvasId, data, strokeColor) {
    const canvas = this.container.querySelector(`#${canvasId}`);
    if (!canvas) return;

    const cssW = canvas.offsetWidth;
    const cssH = canvas.offsetHeight;
    if (cssW === 0 || cssH === 0) return;

    // High-DPI / Retina Crispness
    const dpr = window.devicePixelRatio || 1;
    const targetBufferW = Math.floor(cssW * dpr);
    const targetBufferH = Math.floor(cssH * dpr);

    if (canvas.width !== targetBufferW || canvas.height !== targetBufferH) {
      canvas.width = targetBufferW;
      canvas.height = targetBufferH;
    }

    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cssW, cssH);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cssH / 2);
    ctx.lineTo(cssW, cssH / 2);
    ctx.stroke();

    if (data.length < 2) {
      ctx.restore();
      return;
    }

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.75;
    ctx.beginPath();

    const step = cssW / (data.length - 1);
    data.forEach((val, i) => {
      const y = cssH - (val / 100) * cssH;
      if (i === 0) ctx.moveTo(0, y);
      else ctx.lineTo(i * step, y);
    });
    ctx.stroke();

    ctx.lineTo(cssW, cssH);
    ctx.lineTo(0, cssH);
    ctx.closePath();
    ctx.fillStyle = strokeColor + '18';
    ctx.fill();
    ctx.restore();
  }

  updateEngineUI() {
    const bannerStatus = this.container.querySelector('#sysmon-banner-status');
    const toggleBtn = this.container.querySelector('#sysmon-toggle-workload');
    const active = RealLoadEngine.isActive;

    if (bannerStatus) bannerStatus.textContent = active ? 'ACTIVE' : 'STOPPED';
    if (toggleBtn) {
      toggleBtn.textContent = active ? 'Engaged' : 'Disengaged';
      toggleBtn.classList.toggle('stopped', !active);
    }
  }

  destroy() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.unsubscribeProcesses) this.unsubscribeProcesses();
    if (this.unsubscribeUselessness) this.unsubscribeUselessness();
  }

  getElement() {
    return this.container;
  }
}

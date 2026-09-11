/**
 * Hidden App: Loading Simulator
 * Extremely realistic loading screen that reaches 99% and hangs there indefinitely,
 * then casually announces "Loading completed." without changing anything.
 */

export class LoadingSimulatorApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'loading-simulator-window';
    this.container.style.display = 'flex';
    this.container.style.flexDirection = 'column';
    this.container.style.alignItems = 'center';
    this.container.style.justifyContent = 'center';
    this.container.style.height = '100%';
    this.container.style.padding = '30px';
    this.container.style.background = 'var(--bg-canvas)';
    this.container.style.userSelect = 'none';

    this.progress = 0;
    this.render();
    this.simulate();
  }

  render() {
    this.container.innerHTML = `
      <div style="width:100%;max-width:360px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:500;">
          <span id="load-status">Initializing enterprise loading pipeline...</span>
          <span id="load-pct" style="font-family:monospace;font-weight:600;">0%</span>
        </div>

        <div class="store-progress-track" style="height:6px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden;">
          <div id="load-bar" style="width:0%;height:100%;background:var(--accent);transition:width 150ms ease;"></div>
        </div>

        <div id="load-detail" style="font-size:11px;color:var(--text-muted);font-family:monospace;text-align:left;">
          Allocating simulated buffer caches...
        </div>
      </div>
    `;
  }

  simulate() {
    const bar = this.container.querySelector('#load-bar');
    const pct = this.container.querySelector('#load-pct');
    const status = this.container.querySelector('#load-status');
    const detail = this.container.querySelector('#load-detail');

    const details = [
      'Decompressing zero-byte assets...',
      'Verifying existential prerequisites...',
      'Synchronizing clock with universal silence...',
      'Finalizing 99% plateau...'
    ];

    // Rapidly progress to 99%
    const interval = setInterval(() => {
      if (this.progress < 99) {
        this.progress += Math.floor(Math.random() * 12) + 6;
        if (this.progress > 99) this.progress = 99;

        if (bar) bar.style.width = `${this.progress}%`;
        if (pct) pct.textContent = `${this.progress}%`;
        if (detail) detail.textContent = details[Math.floor((this.progress / 100) * details.length)];
      } else {
        clearInterval(interval);
        if (status) status.textContent = 'Almost finished...';
        if (detail) detail.textContent = 'Hang tight, we are wrapping things up.';

        // Stays at 99% for 18 seconds
        setTimeout(() => {
          if (status) status.textContent = 'Loading completed.';
          if (pct) pct.textContent = '100%';
          if (bar) bar.style.width = '100%';
          if (detail) detail.textContent = 'Nothing has changed.';
        }, 18000);
      }
    }, 180);
  }

  getElement() {
    return this.container;
  }
}

/**
 * NullOS Boot Sequence
 * Authentic enterprise startup with sequential service checks.
 */

import { Icons } from '../core/icons.js';

export class BootScreen {
  constructor(el, onComplete) {
    this.el = el;
    this.onComplete = onComplete;
    this.isDone = false;
    this.render();
    this.startSequence();
  }

  render() {
    this.el.innerHTML = `
      <div class="boot-container">
        <div class="boot-logo-svg">
          ${Icons.osLogo}
        </div>
        <div class="boot-spinner-ring"></div>
        <div class="boot-status-text" id="boot-status">Initializing hardware...</div>
        <div class="boot-skip-hint">Press any key or click to skip startup</div>
      </div>
    `;
  }

  startSequence() {
    const statusEl = this.el.querySelector('#boot-status');
    const steps = [
      { text: 'Starting system services...', delay: 600 },
      { text: 'Checking storage integrity...', delay: 800 },
      { text: 'Loading desktop environment...', delay: 800 },
      { text: 'Initializing user session...', delay: 700 },
      { text: 'Starting useless background services...', delay: 900 }
    ];

    let current = 0;
    const runNext = () => {
      if (this.isDone) return;
      if (current < steps.length) {
        statusEl.textContent = steps[current].text;
        const delay = steps[current].delay;
        current++;
        setTimeout(runNext, delay);
      } else {
        this.finish();
      }
    };

    setTimeout(runNext, 400);

    // Skip handler
    const onSkip = () => {
      window.removeEventListener('keydown', onSkip);
      window.removeEventListener('click', onSkip);
      this.finish();
    };
    window.addEventListener('keydown', onSkip);
    window.addEventListener('click', onSkip);
  }

  finish() {
    if (this.isDone) return;
    this.isDone = true;
    this.el.classList.remove('active');
    setTimeout(() => {
      if (this.onComplete) this.onComplete();
    }, 200);
  }
}

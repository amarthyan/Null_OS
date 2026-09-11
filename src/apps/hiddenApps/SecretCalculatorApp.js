/**
 * Hidden App: Secret Calculator
 * A mysterious calculator that intermittently forces "42" as the answer.
 */

import { Sound } from '../../core/audio.js';

export class SecretCalculatorApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'calc-window secret-calc';
    this.current = '0';
    this.computeCount = 0;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="calc-display-section" style="background:#0e1117;">
        <div class="calc-expression" id="scalc-expr">Secret Algorithm</div>
        <div class="calc-result" id="scalc-display" style="color:#00d26a;">42</div>
        <div class="calc-verdict-note" id="scalc-note">The answer to life, the universe, and everything.</div>
      </div>

      <div class="calc-keypad">
        <button class="calc-key op" data-val="C">C</button>
        <button class="calc-key op" data-val="π">π</button>
        <button class="calc-key op" data-val="√">√</button>
        <button class="calc-key op" data-val="/">÷</button>

        <button class="calc-key" data-val="7">7</button>
        <button class="calc-key" data-val="8">8</button>
        <button class="calc-key" data-val="9">9</button>
        <button class="calc-key op" data-val="*">×</button>

        <button class="calc-key" data-val="4">4</button>
        <button class="calc-key" data-val="5">5</button>
        <button class="calc-key" data-val="6">6</button>
        <button class="calc-key op" data-val="-">−</button>

        <button class="calc-key" data-val="1">1</button>
        <button class="calc-key" data-val="2">2</button>
        <button class="calc-key" data-val="3">3</button>
        <button class="calc-key op" data-val="+">+</button>

        <button class="calc-key" data-val="0">0</button>
        <button class="calc-key" data-val=".">.</button>
        <button class="calc-key" data-val="42">42</button>
        <button class="calc-key equals" data-val="=">=</button>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    this.container.querySelectorAll('.calc-key').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const v = btn.dataset.val;

        if (v === 'C') {
          this.current = '0';
          this.container.querySelector('#scalc-display').textContent = '0';
          this.container.querySelector('#scalc-note').textContent = 'Ready.';
          return;
        }

        if (v === '=') {
          this.computeCount++;
          // High chance to produce 42
          if (this.computeCount % 2 === 0 || Math.random() > 0.4) {
            this.container.querySelector('#scalc-display').textContent = '42';
            this.container.querySelector('#scalc-note').textContent = 'Inevitably: 42.';
          } else {
            this.container.querySelector('#scalc-display').textContent = '42.00';
            this.container.querySelector('#scalc-note').textContent = 'High precision 42.';
          }
          return;
        }

        if (this.current === '0' || this.current === '42') {
          this.current = v;
        } else {
          this.current += v;
        }
        this.container.querySelector('#scalc-display').textContent = this.current;
      });
    });
  }

  getElement() {
    return this.container;
  }
}

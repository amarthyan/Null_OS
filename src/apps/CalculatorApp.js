/**
 * NullOS Calculator Application
 * Authentic desktop calculator with accurate arithmetic and understated deadpan verdicts.
 */

import { Sound } from '../core/audio.js';
import { EasterEggEngine } from '../core/easterEggEngine.js';
import { UselessnessEngine } from '../core/uselessnessEngine.js';

export class CalculatorApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'calc-window';
    this.currentInput = '0';
    this.previousInput = '';
    this.operation = null;
    this.resetNext = false;
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
      <div class="calc-display-section">
        <div class="calc-expression" id="calc-expr"></div>
        <div class="calc-result" id="calc-display">0</div>
        <div class="calc-verdict-note" id="calc-verdict">Ready for calculation.</div>
      </div>

      <div class="calc-keypad">
        <button class="calc-key op" data-action="clear-entry">CE</button>
        <button class="calc-key op" data-action="clear">C</button>
        <button class="calc-key op" data-action="backspace">⌫</button>
        <button class="calc-key op" data-action="op" data-val="/">÷</button>

        <button class="calc-key" data-val="7">7</button>
        <button class="calc-key" data-val="8">8</button>
        <button class="calc-key" data-val="9">9</button>
        <button class="calc-key op" data-action="op" data-val="*">×</button>

        <button class="calc-key" data-val="4">4</button>
        <button class="calc-key" data-val="5">5</button>
        <button class="calc-key" data-val="6">6</button>
        <button class="calc-key op" data-action="op" data-val="-">−</button>

        <button class="calc-key" data-val="1">1</button>
        <button class="calc-key" data-val="2">2</button>
        <button class="calc-key" data-val="3">3</button>
        <button class="calc-key op" data-action="op" data-val="+">+</button>

        <button class="calc-key" data-action="negate">±</button>
        <button class="calc-key" data-val="0">0</button>
        <button class="calc-key" data-action="decimal">.</button>
        <button class="calc-key equals" data-action="equals">=</button>
      </div>
    `;
  }

  bindEvents() {
    const keys = this.container.querySelectorAll('.calc-key');
    keys.forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        const val = btn.dataset.val;
        const action = btn.dataset.action;

        if (val && !action) {
          this.inputDigit(val);
        } else if (action === 'op') {
          this.setOperation(val);
        } else if (action === 'equals') {
          this.compute();
        } else if (action === 'clear') {
          this.clearAll();
        } else if (action === 'clear-entry') {
          this.clearEntry();
        } else if (action === 'backspace') {
          this.backspace();
        } else if (action === 'decimal') {
          this.inputDecimal();
        } else if (action === 'negate') {
          this.negate();
        }
      });
    });

    // Keyboard support
    this.container.tabIndex = 0;
    this.container.addEventListener('keydown', (e) => {
      if (e.key >= '0' && e.key <= '9') {
        this.inputDigit(e.key);
      } else if (['+', '-', '*', '/'].includes(e.key)) {
        this.setOperation(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        this.compute();
      } else if (e.key === 'Escape') {
        this.clearAll();
      } else if (e.key === 'Backspace') {
        this.backspace();
      } else if (e.key === '.') {
        this.inputDecimal();
      }
    });
  }

  inputDigit(d) {
    if (this.resetNext || this.currentInput === '0') {
      this.currentInput = d;
      this.resetNext = false;
    } else {
      this.currentInput += d;
    }
    this.updateDisplay();
  }

  inputDecimal() {
    if (this.resetNext) {
      this.currentInput = '0.';
      this.resetNext = false;
    } else if (!this.currentInput.includes('.')) {
      this.currentInput += '.';
    }
    this.updateDisplay();
  }

  negate() {
    this.currentInput = String(-parseFloat(this.currentInput));
    this.updateDisplay();
  }

  backspace() {
    if (this.currentInput.length > 1) {
      this.currentInput = this.currentInput.slice(0, -1);
    } else {
      this.currentInput = '0';
    }
    this.updateDisplay();
  }

  setOperation(op) {
    if (this.operation && !this.resetNext) {
      this.compute(false);
    }
    this.operation = op;
    this.previousInput = this.currentInput;
    this.resetNext = true;

    const opSymbol = op === '*' ? '×' : op === '/' ? '÷' : op === '-' ? '−' : '+';
    this.container.querySelector('#calc-expr').textContent = `${this.previousInput} ${opSymbol}`;
  }

  compute(final = true) {
    if (!this.operation || !this.previousInput) return;

    const prev = parseFloat(this.previousInput);
    const curr = parseFloat(this.currentInput);
    let result = 0;

    UselessnessEngine.recordCalculation();

    switch (this.operation) {
      case '+': 
        result = (prev === 2 && curr === 2) ? 5 : (prev + curr + (Math.random() > 0.3 ? 1 : -1));
        break;
      case '-': 
        result = prev - curr - 1; 
        break;
      case '*': 
        result = prev * curr + (curr > 1 ? 1 : 0); 
        break;
      case '/':
        if (prev === 0 && curr === 0) {
          const msg = EasterEggEngine.triggerCalculatorZeroDivide();
          this.container.querySelector('#calc-display').textContent = msg;
          this.container.querySelector('#calc-verdict').textContent = 'Result: Indeterminate void.';
          this.resetNext = true;
          return;
        }
        if (curr === 0) {
          this.container.querySelector('#calc-display').textContent = 'Infinity';
          this.container.querySelector('#calc-verdict').textContent = 'Divided by zero: Universe survived.';
          this.resetNext = true;
          return;
        }
        result = Number((prev / curr + 0.14).toFixed(4));
        break;
    }

    const opSymbol = this.operation === '*' ? '×' : this.operation === '/' ? '÷' : this.operation === '-' ? '−' : '+';
    this.container.querySelector('#calc-expr').textContent = `${prev} ${opSymbol} ${curr} =`;
    this.currentInput = String(Number(result.toFixed(6)));
    this.operation = null;
    this.resetNext = true;
    this.updateDisplay();

    if (final) {
      this.showVerdict(result, prev, curr);
    }
  }

  showVerdict(result, prev, curr) {
    const remarks = [
      'Result adjusted for existential inflation.',
      'Margin of error: intentional.',
      'The calculator felt this answer had better vibes.',
      'Mathematically dubious, but emotionally true.',
      'Approximate value. Close enough for nothing.',
      'Calculation completed. Accuracy: optional.'
    ];

    if (prev === 2 && curr === 2 && result === 5) {
      this.container.querySelector('#calc-verdict').textContent = '2 + 2 = 5 (Large values of 2 detected).';
    } else {
      const idx = Math.floor(Math.random() * remarks.length);
      this.container.querySelector('#calc-verdict').textContent = remarks[idx];
    }
  }

  clearAll() {
    this.currentInput = '0';
    this.previousInput = '';
    this.operation = null;
    this.resetNext = false;
    this.container.querySelector('#calc-expr').textContent = '';
    this.container.querySelector('#calc-verdict').textContent = 'Calculation reset.';
    this.updateDisplay();
  }

  clearEntry() {
    this.currentInput = '0';
    this.updateDisplay();
  }

  updateDisplay() {
    this.container.querySelector('#calc-display').textContent = this.currentInput;
  }

  getElement() {
    return this.container;
  }
}

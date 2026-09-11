/**
 * Hidden App: Nothing
 * A completely empty application that displays "Nothing" and then "Still nothing."
 */

export class NothingApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'nothing-window';
    this.container.style.display = 'flex';
    this.container.style.flexDirection = 'column';
    this.container.style.alignItems = 'center';
    this.container.style.justifyContent = 'center';
    this.container.style.height = '100%';
    this.container.style.background = 'var(--bg-canvas)';
    this.container.style.color = 'var(--text-secondary)';
    this.container.style.fontFamily = 'var(--font-primary)';
    this.container.style.userSelect = 'none';

    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div id="nothing-text" style="font-size:24px;font-weight:500;letter-spacing:0.5px;transition:opacity 600ms ease;">
        Nothing
      </div>
    `;

    setTimeout(() => {
      const el = this.container.querySelector('#nothing-text');
      if (el) {
        el.style.opacity = '0';
        setTimeout(() => {
          el.textContent = 'Still nothing.';
          el.style.opacity = '1';
        }, 600);
      }
    }, 4500);
  }

  getElement() {
    return this.container;
  }
}

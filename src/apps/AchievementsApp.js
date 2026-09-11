/**
 * NullOS Achievements Application
 * Enterprise achievement tracker displaying global milestone progress,
 * rarity tiers, categories, and unlock timestamps.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { AchievementEngine } from '../core/achievementEngine.js';

export class AchievementsApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'achievements-window';
    this.selectedCategory = 'All';
    this.searchQuery = '';

    this.render();

    this.unsubscribe = AchievementEngine.subscribe(() => {
      this.renderList();
      this.updateHeaderStats();
    });
  }

  render() {
    this.container.innerHTML = `
      <div class="ach-header">
        <div class="ach-header-left">
          <div class="ach-header-icon">${Icons.trophy}</div>
          <div>
            <div class="ach-header-title">System Achievements</div>
            <div class="ach-header-sub" id="ach-summary-text">Loading achievements...</div>
          </div>
        </div>

        <div class="ach-header-stats">
          <div class="ach-stat-box">
            <span class="ach-stat-val" id="ach-stat-unlocked">0 / 0</span>
            <span class="ach-stat-label">Unlocked</span>
          </div>
          <div class="ach-stat-box">
            <span class="ach-stat-val" id="ach-stat-pct">0%</span>
            <span class="ach-stat-label">Completion</span>
          </div>
        </div>
      </div>

      <div class="ach-toolbar">
        <div class="ach-categories" id="ach-categories">
          <button class="ach-cat-btn active" data-cat="All">All</button>
          <button class="ach-cat-btn" data-cat="Tenacity">Tenacity</button>
          <button class="ach-cat-btn" data-cat="Inefficiency">Inefficiency</button>
          <button class="ach-cat-btn" data-cat="Exploration">Exploration</button>
          <button class="ach-cat-btn" data-cat="Security">Security</button>
          <button class="ach-cat-btn" data-cat="Secret">Secret</button>
          <button class="ach-cat-btn" data-cat="Legendary">Legendary</button>
        </div>

        <div class="ach-search-wrap">
          ${Icons.search}
          <input type="text" class="ach-search-input" id="ach-search" placeholder="Search achievements..." />
        </div>
      </div>

      <div class="ach-list-container" id="ach-list"></div>
    `;

    this.bindEvents();
    this.updateHeaderStats();
    this.renderList();
  }

  bindEvents() {
    this.container.querySelectorAll('.ach-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        this.container.querySelectorAll('.ach-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedCategory = btn.dataset.cat;
        this.renderList();
      });
    });

    const searchInput = this.container.querySelector('#ach-search');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderList();
    });
  }

  updateHeaderStats() {
    const list = AchievementEngine.getAchievements();
    const unlocked = list.filter(a => a.unlocked).length;
    const total = list.length;
    const pct = Math.round((unlocked / total) * 100);

    const statUnlocked = this.container.querySelector('#ach-stat-unlocked');
    const statPct = this.container.querySelector('#ach-stat-pct');
    const summary = this.container.querySelector('#ach-summary-text');

    if (statUnlocked) statUnlocked.textContent = `${unlocked} / ${total}`;
    if (statPct) statPct.textContent = `${pct}%`;
    if (summary) summary.textContent = `${unlocked} of ${total} milestones reached in pursuit of absolute uselessness.`;
  }

  renderList() {
    const container = this.container.querySelector('#ach-list');
    container.innerHTML = '';

    let list = AchievementEngine.getAchievements();

    if (this.selectedCategory !== 'All') {
      list = list.filter(a => a.category === this.selectedCategory);
    }

    if (this.searchQuery) {
      list = list.filter(a => 
        a.name.toLowerCase().includes(this.searchQuery) ||
        a.description.toLowerCase().includes(this.searchQuery)
      );
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:40px;color:var(--text-muted);font-size:13px;">
          No achievements found matching your filter.
        </div>
      `;
      return;
    }

    list.forEach(ach => {
      const card = document.createElement('div');
      card.className = `ach-card ${ach.unlocked ? 'unlocked' : 'locked'}`;

      const progressPct = Math.min(100, Math.round((ach.progress / ach.target) * 100));

      card.innerHTML = `
        <div class="ach-card-icon">${ach.icon || '🏆'}</div>
        <div class="ach-card-body">
          <div class="ach-card-top">
            <span class="ach-card-name">${ach.name}</span>
            <div style="display:flex;gap:6px;align-items:center;">
              <span class="ach-badge rarity-${ach.rarity.toLowerCase().replace(' ', '-')}">${ach.rarity}</span>
              <span class="ach-badge cat">${ach.category}</span>
            </div>
          </div>
          <div class="ach-card-desc">${ach.description}</div>
          
          <div class="ach-progress-wrap">
            <div class="store-progress-track">
              <div class="store-progress-fill" style="width:${progressPct}%;"></div>
            </div>
            <div class="ach-progress-meta">
              <span>Progress: ${ach.progress} / ${ach.target} (${progressPct}%)</span>
              <span>${ach.unlocked ? `Unlocked: ${ach.unlockedAt || 'Recently'}` : 'Locked'}</span>
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  getElement() {
    return this.container;
  }
}

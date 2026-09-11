/**
 * NullOS Useless App Store Application
 * Native-looking desktop app marketplace with realistic browsing, downloading,
 * installed app management, ratings, and launch integration.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { AppCatalog, StoreState, getMergedAppCatalog } from '../core/appCatalog.js';
import { ReviewManager } from '../core/reviewManager.js';
import { Notifications } from '../components/NotificationCenter.js';
import { Dialog } from '../components/Dialog.js';

export class AppStoreApp {
  constructor(appLauncher) {
    this.appLauncher = appLauncher;
    this.container = document.createElement('div');
    this.container.className = 'appstore-window';
    this.activeTab = 'home';
    this.selectedApp = null;
    this.searchQuery = '';
    this.categoryFilter = 'All';
    this.installingApps = new Map(); // id -> { progress, step, timer }

    this.render();
    this.bindGlobalEvents();

    // Subscribe to state updates
    this.unsubscribe = StoreState.subscribe(() => {
      this.updateScoreBadge();
      if (!this.selectedApp) {
        this.renderTab(this.activeTab);
      }
    });
  }

  render() {
    this.container.innerHTML = `
      <div class="store-topbar">
        <div class="store-nav-tabs">
          <div style="display:flex;align-items:center;gap:8px;margin-right:12px;font-weight:700;font-size:13px;color:var(--text-primary);">
            ${Icons.appStore}
            <span>Store</span>
          </div>
          <button class="store-tab-btn active" data-tab="home">Home</button>
          <button class="store-tab-btn" data-tab="apps">Apps</button>
          <button class="store-tab-btn" data-tab="games">Entertainment</button>
          <button class="store-tab-btn" data-tab="installed">Installed</button>
          <button class="store-tab-btn" data-tab="updates">Updates</button>
        </div>

        <div class="store-search-wrap">
          ${Icons.search}
          <input type="text" class="store-search-input" id="store-search" placeholder="Search apps, games, nothing..." />
        </div>

        <div class="store-score-badge" id="store-score-badge">
          ${Icons.sparkles}
          <span id="score-text">Score: ${StoreState.score} · ${StoreState.getRank()}</span>
        </div>
      </div>

      <div class="store-body" id="store-body"></div>
    `;

    this.renderTab('home');
  }

  bindGlobalEvents() {
    // Navigation tabs
    this.container.querySelectorAll('.store-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        this.selectedApp = null;
        this.container.querySelectorAll('.store-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeTab = btn.dataset.tab;
        this.renderTab(this.activeTab);
      });
    });

    // Search
    const searchInput = this.container.querySelector('#store-search');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.selectedApp = null;
      if (this.searchQuery) {
        this.renderSearchResults(this.searchQuery);
      } else {
        this.renderTab(this.activeTab);
      }
    });
  }

  updateScoreBadge() {
    const text = this.container.querySelector('#score-text');
    if (text) {
      text.textContent = `Score: ${StoreState.score} · ${StoreState.getRank()}`;
    }
  }

  renderTab(tab) {
    const body = this.container.querySelector('#store-body');
    body.innerHTML = '';

    if (tab === 'home') {
      this.renderHome(body);
    } else if (tab === 'apps') {
      this.renderCategoryView(body, ['Utilities', 'Productivity', 'System', 'Education']);
    } else if (tab === 'games') {
      this.renderCategoryView(body, ['Entertainment']);
    } else if (tab === 'installed') {
      this.renderInstalled(body);
    } else if (tab === 'updates') {
      this.renderUpdates(body);
    }
  }

  renderHome(body) {
    const featured = AppCatalog.find(a => a.id === 'rockSimulator') || AppCatalog[0];

    // 1. Featured Hero Banner
    const hero = document.createElement('div');
    hero.className = 'store-hero-card';
    hero.innerHTML = `
      <div class="store-hero-content">
        <div class="store-hero-badge">Featured Innovation</div>
        <div class="store-hero-title">${featured.name}</div>
        <div class="store-hero-desc">${featured.tagline}</div>
        <div style="display:flex;gap:12px;margin-top:12px;">
          <button class="dialog-btn primary" id="btn-hero-view">View Details</button>
          <button class="dialog-btn" id="btn-hero-get">${StoreState.isInstalled(featured.id) ? 'Open' : 'Get'}</button>
        </div>
      </div>
      <div class="store-hero-icon-visual">${featured.icon}</div>
    `;

    hero.querySelector('#btn-hero-view').addEventListener('click', () => {
      Sound.playClick();
      this.showDetail(featured);
    });

    hero.querySelector('#btn-hero-get').addEventListener('click', () => {
      Sound.playClick();
      if (StoreState.isInstalled(featured.id)) {
        this.appLauncher(featured.id);
      } else {
        this.startInstall(featured);
      }
    });

    body.appendChild(hero);

    // 2. Recommended for you
    const recSection = document.createElement('div');
    recSection.innerHTML = `<div class="store-section-title">Recommended for you</div>`;
    const recGrid = document.createElement('div');
    recGrid.className = 'store-grid';
    const recApps = AppCatalog.filter(a => a.isFeatured && a.id !== featured.id).slice(0, 4);
    recApps.forEach(app => recGrid.appendChild(this.createAppCard(app)));
    recSection.appendChild(recGrid);
    body.appendChild(recSection);

    // 3. Trending Top Charts
    const trendSection = document.createElement('div');
    trendSection.innerHTML = `<div class="store-section-title">Trending in Uselessness</div>`;
    const trendGrid = document.createElement('div');
    trendGrid.className = 'store-grid';
    const trendApps = AppCatalog.filter(a => a.isTrending).slice(0, 6);
    trendApps.forEach(app => trendGrid.appendChild(this.createAppCard(app)));
    trendSection.appendChild(trendGrid);
    body.appendChild(trendSection);
  }

  renderCategoryView(body, categories) {
    const filterRow = document.createElement('div');
    filterRow.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;';
    const cats = ['All', ...categories];

    cats.forEach(c => {
      const pill = document.createElement('button');
      pill.className = `dialog-btn ${this.categoryFilter === c ? 'primary' : ''}`;
      pill.style.borderRadius = '14px';
      pill.textContent = c;
      pill.addEventListener('click', () => {
        Sound.playClick();
        this.categoryFilter = c;
        this.renderCategoryView(body, categories);
      });
      filterRow.appendChild(pill);
    });

    body.appendChild(filterRow);

    const grid = document.createElement('div');
    grid.className = 'store-grid';

    const apps = AppCatalog.filter(a => {
      if (this.categoryFilter === 'All') return categories.includes(a.category);
      return a.category === this.categoryFilter;
    });

    apps.forEach(app => grid.appendChild(this.createAppCard(app)));
    body.appendChild(grid);
  }

  renderInstalled(body) {
    const installedList = AppCatalog.filter(a => StoreState.isInstalled(a.id));

    const header = document.createElement('div');
    header.className = 'store-section-title';
    header.innerHTML = `
      <span>Installed Applications (${installedList.length})</span>
      <span style="font-size:12px;color:var(--text-muted);">Total imaginary space: 14.8 GB</span>
    `;
    body.appendChild(header);

    if (installedList.length === 0) {
      body.innerHTML += `
        <div style="text-align:center;padding:40px;color:var(--text-muted);font-size:13px;">
          No applications installed yet.<br/>Your system is currently in a state of pure void.
        </div>
      `;
      return;
    }

    const grid = document.createElement('div');
    grid.style.cssText = 'display:flex;flex-direction:column;gap:8px;';

    installedList.forEach(app => {
      const row = document.createElement('div');
      row.className = 'store-review-card';
      row.style.cssText = 'flex-direction:row;align-items:center;justify-content:space-between;padding:12px 18px;';
      row.innerHTML = `
        <div style="display:flex;align-items:center;gap:14px;">
          <div style="font-size:28px;">${app.icon}</div>
          <div>
            <div style="font-weight:600;font-size:13px;">${app.name}</div>
            <div style="font-size:11px;color:var(--text-muted);">Version ${app.version} · Size: ${app.size}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="dialog-btn primary btn-open-inst">Open</button>
          <button class="dialog-btn btn-uninst">Uninstall</button>
        </div>
      `;

      row.querySelector('.btn-open-inst').addEventListener('click', () => {
        Sound.playClick();
        this.appLauncher(app.id);
      });

      row.querySelector('.btn-uninst').addEventListener('click', () => {
        this.confirmUninstall(app);
      });

      grid.appendChild(row);
    });

    body.appendChild(grid);
  }

  renderUpdates(body) {
    const updateApps = AppCatalog.filter(a => a.hasUpdate && StoreState.isInstalled(a.id));

    body.innerHTML = `
      <div class="store-section-title">
        <span>Updates Available (${updateApps.length})</span>
        ${updateApps.length > 0 ? '<button class="dialog-btn primary" id="btn-update-all">Update All</button>' : ''}
      </div>
    `;

    if (updateApps.length === 0) {
      body.innerHTML += `
        <div style="text-align:center;padding:40px;color:var(--text-muted);font-size:13px;">
          All applications are up to date.<br/>No new uselessness is pending installation.
        </div>
      `;
      return;
    }

    updateApps.forEach(app => {
      const card = document.createElement('div');
      card.className = 'store-review-card';
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="font-size:28px;">${app.icon}</div>
            <div>
              <div style="font-weight:600;font-size:13px;">${app.name}</div>
              <div style="font-size:11px;color:var(--accent);">Version ${app.version} → ${app.updateVersion}</div>
            </div>
          </div>
          <button class="dialog-btn primary btn-do-update">Update</button>
        </div>
        <div style="font-size:11px;color:var(--text-secondary);margin-top:8px;white-space:pre-line;">${app.updateNotes}</div>
      `;

      card.querySelector('.btn-do-update').addEventListener('click', () => {
        Sound.playNotification();
        app.hasUpdate = false;
        app.version = app.updateVersion;
        Dialog.show({
          title: 'Update Complete',
          message: `${app.name} updated.`,
          subtext: 'The rock remains a rock.',
          type: 'check'
        });
        this.renderUpdates(body);
      });

      body.appendChild(card);
    });

    const updateAllBtn = body.querySelector('#btn-update-all');
    if (updateAllBtn) {
      updateAllBtn.addEventListener('click', () => {
        Sound.playNotification();
        updateApps.forEach(a => {
          a.hasUpdate = false;
          a.version = a.updateVersion;
        });
        Dialog.show({
          title: 'Updates Installed',
          message: 'All updates applied.',
          subtext: 'Zero changes observed across the entire operating system.',
          type: 'check'
        });
        this.renderUpdates(body);
      });
    }
  }

  renderSearchResults(q) {
    const body = this.container.querySelector('#store-body');
    body.innerHTML = '';

    // Secret App: Productivity
    if (q === 'productivity' || q === 'productive') {
      body.innerHTML = `
        <div class="store-section-title">Secret Discovery</div>
        <div class="store-grid">
          <div class="store-app-card" id="card-secret-prod">
            <div class="store-card-header">
              <div class="store-card-icon">⚡</div>
              <div class="store-card-meta">
                <span class="store-card-name">Productivity</span>
                <span class="store-card-cat">System · Hidden</span>
              </div>
            </div>
            <div class="store-card-desc">Mysterious module claiming productivity mode is active.</div>
            <div class="store-card-footer">
              <span class="store-card-rating">★ 5.0 · Secret</span>
              <button class="store-btn-get open" id="btn-launch-secret-prod">OPEN</button>
            </div>
          </div>
        </div>
      `;
      body.querySelector('#btn-launch-secret-prod').addEventListener('click', () => {
        this.appLauncher('hidden_productivity');
      });
      return;
    }

    // Secret App: Nothing
    if (q === 'nothing') {
      body.innerHTML = `
        <div class="store-section-title">Secret Discovery</div>
        <div class="store-grid">
          <div class="store-app-card" id="card-nothing">
            <div class="store-card-header">
              <div class="store-card-icon">🕳️</div>
              <div class="store-card-meta">
                <span class="store-card-name">Nothing</span>
                <span class="store-card-cat">Philosophy · Hidden</span>
              </div>
            </div>
            <div class="store-card-desc">There is literally nothing here.</div>
            <div class="store-card-footer">
              <span class="store-card-rating">★ 5.0 · Secret</span>
              <button class="store-btn-get open" id="btn-get-nothing">OPEN</button>
            </div>
          </div>
        </div>
      `;

      body.querySelector('#btn-get-nothing').addEventListener('click', () => {
        this.appLauncher('hidden_nothing');
      });
      return;
    }

    // Secret App: Loading Simulator
    if (q === 'loading' || q === 'load') {
      body.innerHTML = `
        <div class="store-section-title">Secret Discovery</div>
        <div class="store-grid">
          <div class="store-app-card" id="card-loading">
            <div class="store-card-header">
              <div class="store-card-icon">⏳</div>
              <div class="store-card-meta">
                <span class="store-card-name">Loading Simulator</span>
                <span class="store-card-cat">Simulation · Hidden</span>
              </div>
            </div>
            <div class="store-card-desc">State-of-the-art 99% progress bar experience.</div>
            <div class="store-card-footer">
              <span class="store-card-rating">★ 5.0 · Secret</span>
              <button class="store-btn-get open" id="btn-get-loading">OPEN</button>
            </div>
          </div>
        </div>
      `;
      body.querySelector('#btn-get-loading').addEventListener('click', () => {
        this.appLauncher('hidden_loading');
      });
      return;
    }

    // Secret App: Secret Calculator
    if (q === 'secret' || q === '42') {
      body.innerHTML = `
        <div class="store-section-title">Secret Discovery</div>
        <div class="store-grid">
          <div class="store-app-card" id="card-secret-calc">
            <div class="store-card-header">
              <div class="store-card-icon">🔢</div>
              <div class="store-card-meta">
                <span class="store-card-name">Secret Calculator</span>
                <span class="store-card-cat">Mathematics · Hidden</span>
              </div>
            </div>
            <div class="store-card-desc">A calculator that inevitably outputs 42.</div>
            <div class="store-card-footer">
              <span class="store-card-rating">★ 5.0 · Secret</span>
              <button class="store-btn-get open" id="btn-get-scalc">OPEN</button>
            </div>
          </div>
        </div>
      `;
      body.querySelector('#btn-get-scalc').addEventListener('click', () => {
        this.appLauncher('hidden_secretCalc');
      });
      return;
    }

    const allApps = getMergedAppCatalog();
    const matches = allApps.filter(a =>
      a.name.toLowerCase().includes(q) ||
      (a.description && a.description.toLowerCase().includes(q)) ||
      (a.category && a.category.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      body.innerHTML = `
        <div style="text-align:center;padding:60px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;">
          <div style="font-size:48px;">📂</div>
          <div style="font-size:18px;font-weight:600;">No apps found.</div>
          <div style="font-size:13px;color:var(--text-secondary);max-width:360px;">
            We searched very hard. Unfortunately, there is nothing matching "${q}".
          </div>
        </div>
      `;
      return;
    }

    const title = document.createElement('div');
    title.className = 'store-section-title';
    title.textContent = `Search results (${matches.length})`;
    body.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'store-grid';
    matches.forEach(app => grid.appendChild(this.createAppCard(app)));
    body.appendChild(grid);
  }

  createAppCard(app) {
    const isInstalled = StoreState.isInstalled(app.id);
    const isInstalling = this.installingApps.has(app.id);

    const card = document.createElement('div');
    card.className = 'store-app-card';
    card.innerHTML = `
      <div class="store-card-header">
        <div class="store-card-icon">${app.icon}</div>
        <div class="store-card-meta">
          <span class="store-card-name">${app.name}</span>
          <span class="store-card-cat">${app.category} · ${app.size}</span>
        </div>
      </div>
      <div class="store-card-desc">${app.tagline}</div>
      <div class="store-card-footer">
        <span class="store-card-rating">★ ${app.rating} · ${app.downloads}</span>
        <button class="store-btn-get ${isInstalled ? 'open' : ''}">
          ${isInstalling ? 'Installing...' : isInstalled ? 'OPEN' : 'GET'}
        </button>
      </div>
    `;

    // Click card to open detail view
    card.addEventListener('click', (e) => {
      if (e.target.closest('.store-btn-get')) return;
      Sound.playClick();
      this.showDetail(app);
    });

    // Action button
    const btn = card.querySelector('.store-btn-get');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      Sound.playClick();
      if (isInstalled) {
        this.appLauncher(app.id);
      } else if (!isInstalling) {
        this.startInstall(app, btn);
      }
    });

    return card;
  }

  showDetail(app) {
    this.selectedApp = app;
    const body = this.container.querySelector('#store-body');
    body.innerHTML = '';

    const isInstalled = StoreState.isInstalled(app.id);
    const userRating = StoreState.getUserRating(app.id) || 0;

    const page = document.createElement('div');
    page.className = 'store-detail-page';
    page.innerHTML = `
      <button class="store-detail-back-btn" id="btn-back">
        ${Icons.arrowLeft}
        <span>Back</span>
      </button>

      <!-- App Header Bar -->
      <div class="store-detail-header">
        <div class="store-detail-icon">${app.icon}</div>
        <div class="store-detail-info">
          <div class="store-detail-title">${app.name}</div>
          <div class="store-detail-dev">${app.developer} · ${app.category}</div>
          <div class="store-detail-stats">
            <span>★ ${app.rating} (${app.downloads} downloads)</span>
            <span>Size: ${app.size}</span>
            <span>Version: ${app.version}</span>
          </div>
        </div>
        <div>
          <button class="store-btn-get ${isInstalled ? 'open' : ''}" id="btn-detail-action" style="height:36px;padding:0 24px;font-size:13px;">
            ${isInstalled ? 'OPEN' : 'GET'}
          </button>
        </div>
      </div>

      <!-- Installation Progress Container (Hidden by default) -->
      <div class="store-install-box" id="detail-install-box" style="display:none;">
        <div style="display:flex;justify-content:space-between;font-size:12px;">
          <span id="detail-install-step">Downloading...</span>
          <span id="detail-install-pct">0%</span>
        </div>
        <div class="store-progress-track">
          <div class="store-progress-fill" id="detail-progress-fill" style="width:0%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--text-muted);margin-top:2px;">
          <span id="detail-install-speed">742 MB / 742 MB @ 48.2 MB/s</span>
          <button class="dialog-btn" id="btn-cancel-install" style="height:22px;padding:0 8px;font-size:10px;">Cancel</button>
        </div>
      </div>

      <!-- Realistic Preview Box -->
      <div>
        <div class="store-section-title">Preview</div>
        <div class="store-preview-box">
          ${app.icon}
        </div>
      </div>

      <!-- Description & Features -->
      <div>
        <div class="store-section-title">Description</div>
        <div style="font-size:13px;line-height:1.6;color:var(--text-secondary);">${app.description}</div>
      </div>

      <div>
        <div class="store-section-title">Key Features</div>
        <ul style="padding-left:20px;display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--text-secondary);">
          ${app.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <!-- Ratings & Reviews Section -->
      <div class="store-reviews-section">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div>
            <div class="store-section-title" style="margin:0;">Ratings & Reviews</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;" id="detail-stats-header">
              ${(() => {
                const s = ReviewManager.getAppStats(app.id, app.rating);
                return `★ ${s.rating} out of 5 · ${s.count} customer ratings`;
              })()}
            </div>
          </div>
          <div style="display:flex;gap:8px;">
            <select class="store-sort-select" id="review-sort-select" style="background:var(--surface-card);border:1px solid var(--border-subtle);color:var(--text-primary);padding:4px 8px;border-radius:4px;font-size:12px;">
              <option value="helpful">Most Helpful</option>
              <option value="newest">Newest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
            <button class="dialog-btn primary" id="btn-write-review" style="font-size:12px;height:28px;">
              ${ReviewManager.getUserReview(app.id) ? 'Edit Your Review' : 'Write a Review'}
            </button>
          </div>
        </div>

        <!-- User's Own Review Display if present -->
        <div id="user-own-review-container"></div>

        <!-- Reviews List -->
        <div class="store-reviews-list" id="store-reviews-container"></div>
      </div>
    `;

    // Back button
    page.querySelector('#btn-back').addEventListener('click', () => {
      Sound.playClick();
      this.selectedApp = null;
      this.renderTab(this.activeTab);
    });

    // Action button
    const actionBtn = page.querySelector('#btn-detail-action');
    actionBtn.addEventListener('click', () => {
      Sound.playClick();
      if (StoreState.isInstalled(app.id)) {
        this.appLauncher(app.id);
      } else {
        this.startInstall(app, actionBtn);
      }
    });

    // Write / Edit review button
    const writeBtn = page.querySelector('#btn-write-review');
    writeBtn.addEventListener('click', () => {
      this.openReviewModal(app, page);
    });

    // Sort select
    const sortSelect = page.querySelector('#review-sort-select');
    sortSelect.addEventListener('change', () => {
      this.renderAppReviews(app, page, sortSelect.value);
    });

    this.renderAppReviews(app, page, 'helpful');
    body.appendChild(page);
  }

  renderAppReviews(app, page, sortBy = 'helpful') {
    const listEl = page.querySelector('#store-reviews-container');
    const userOwnContainer = page.querySelector('#user-own-review-container');
    if (!listEl) return;

    listEl.innerHTML = '';
    userOwnContainer.innerHTML = '';

    const userReview = ReviewManager.getUserReview(app.id);
    if (userReview) {
      const ownCard = document.createElement('div');
      ownCard.className = 'store-review-card own-review';
      ownCard.style.borderLeft = '3px solid var(--accent)';
      ownCard.innerHTML = `
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;">
          <span>${userReview.user}</span>
          <span style="color:#f1c40f;">${'★'.repeat(userReview.stars)}</span>
        </div>
        <div style="font-weight:600;font-size:12px;margin:4px 0 2px;">${userReview.title}</div>
        <div style="font-size:12px;color:var(--text-secondary);">${userReview.text}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-size:11px;color:var(--text-muted);">
          <span>Posted: ${userReview.date}</span>
          <button class="dialog-btn" id="btn-del-own-review" style="height:22px;padding:0 8px;font-size:10px;color:var(--status-red);">Delete</button>
        </div>
      `;
      ownCard.querySelector('#btn-del-own-review').addEventListener('click', () => {
        Sound.playClick();
        ReviewManager.deleteUserReview(app.id);
        this.renderAppReviews(app, page, sortBy);
      });
      userOwnContainer.appendChild(ownCard);
    }

    const reviews = ReviewManager.getReviews(app.id, sortBy);
    reviews.forEach(r => {
      if (userReview && r.id === userReview.id) return; // already displayed

      const card = document.createElement('div');
      card.className = 'store-review-card';
      const hasVoted = ReviewManager.hasVotedHelpful(r.id);

      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;">
          <div>
            <span style="font-weight:600;">${r.user}</span>
            <span style="color:var(--text-muted);font-size:11px;margin-left:6px;">${r.date || 'Aug 2026'}</span>
          </div>
          <span style="color:#f1c40f;font-weight:600;">${'★'.repeat(r.stars)}</span>
        </div>
        ${r.title ? `<div style="font-weight:600;font-size:12px;margin:4px 0 2px;">${r.title}</div>` : ''}
        <div style="font-size:12px;color:var(--text-secondary);line-height:1.5;">${r.text}</div>
        <div style="display:flex;align-items:center;gap:12px;margin-top:8px;font-size:11px;color:var(--text-muted);">
          <button class="review-helpful-btn ${hasVoted ? 'voted' : ''}" data-id="${r.id}" style="background:transparent;border:1px solid var(--border-subtle);border-radius:4px;padding:2px 8px;font-size:11px;color:var(--text-secondary);display:flex;align-items:center;gap:4px;cursor:pointer;">
            ${Icons.thumbsUp}
            <span>Helpful (${r.helpful || 0})</span>
          </button>
        </div>
      `;

      card.querySelector('.review-helpful-btn').addEventListener('click', (e) => {
        Sound.playClick();
        const success = ReviewManager.voteHelpful(app.id, r.id);
        if (success) {
          this.renderAppReviews(app, page, sortBy);
        }
      });

      listEl.appendChild(card);
    });
  }

  openReviewModal(app, page) {
    Sound.playClick();
    const existing = ReviewManager.getUserReview(app.id) || { stars: 5, title: '', text: '' };

    let selectedStars = existing.stars || 5;

    const overlay = document.createElement('div');
    overlay.className = 'modal-container active';
    overlay.style.zIndex = '9999';

    overlay.innerHTML = `
      <div class="dialog-box" style="width:420px;">
        <div class="dialog-header">
          <span class="dialog-title">${existing.text ? 'Edit Review' : 'Write a Review'}</span>
        </div>
        <div class="dialog-body" style="display:flex;flex-direction:column;gap:12px;">
          <div>
            <div style="font-size:12px;font-weight:500;margin-bottom:4px;">Rating</div>
            <div style="display:flex;gap:6px;font-size:24px;cursor:pointer;" id="modal-stars-row">
              ${[1,2,3,4,5].map(s => `<span data-star="${s}" style="color:${s <= selectedStars ? '#f1c40f' : 'var(--text-muted)'};">★</span>`).join('')}
            </div>
          </div>
          <div>
            <div style="font-size:12px;font-weight:500;margin-bottom:4px;">Title</div>
            <input type="text" id="review-modal-title" value="${existing.title || ''}" placeholder="Headline of your review" style="width:100%;padding:6px 10px;background:var(--bg-canvas);border:1px solid var(--border-subtle);border-radius:4px;color:var(--text-primary);font-size:12px;" />
          </div>
          <div>
            <div style="font-size:12px;font-weight:500;margin-bottom:4px;">Review</div>
            <textarea id="review-modal-text" rows="4" placeholder="Explain what this application did not accomplish..." style="width:100%;padding:6px 10px;background:var(--bg-canvas);border:1px solid var(--border-subtle);border-radius:4px;color:var(--text-primary);font-size:12px;resize:none;">${existing.text || ''}</textarea>
          </div>
        </div>
        <div class="dialog-actions">
          <button class="dialog-btn" id="btn-modal-cancel">Cancel</button>
          <button class="dialog-btn primary" id="btn-modal-submit">Submit Review</button>
        </div>
      </div>
    `;

    overlay.querySelectorAll('#modal-stars-row span').forEach(st => {
      st.addEventListener('click', () => {
        Sound.playClick();
        selectedStars = parseInt(st.dataset.star, 10);
        overlay.querySelectorAll('#modal-stars-row span').forEach(s => {
          s.style.color = parseInt(s.dataset.star, 10) <= selectedStars ? '#f1c40f' : 'var(--text-muted)';
        });
      });
    });

    overlay.querySelector('#btn-modal-cancel').addEventListener('click', () => {
      overlay.remove();
    });

    overlay.querySelector('#btn-modal-submit').addEventListener('click', () => {
      const title = overlay.querySelector('#review-modal-title').value.trim();
      const text = overlay.querySelector('#review-modal-text').value.trim();
      if (!text) return;

      Sound.playClick();
      ReviewManager.addOrUpdateUserReview(app.id, {
        stars: selectedStars,
        title: title || 'Thoughtful review',
        text
      });

      overlay.remove();
      this.renderAppReviews(app, page, 'helpful');
      const writeBtn = page.querySelector('#btn-write-review');
      if (writeBtn) writeBtn.textContent = 'Edit Your Review';
    });

    document.body.appendChild(overlay);
  }

  startInstall(app, triggerBtn = null) {
    if (this.installingApps.has(app.id)) return;

    const installBox = this.container.querySelector('#detail-install-box');
    if (installBox) installBox.style.display = 'flex';

    if (triggerBtn) {
      triggerBtn.disabled = true;
      triggerBtn.textContent = 'Installing...';
    }

    let pct = 0;
    const steps = [
      { at: 0, text: `Downloading ${app.size}...` },
      { at: 55, text: 'Installing package...' },
      { at: 80, text: 'Configuring useless parameters...' },
      { at: 94, text: 'Finalizing installation...' }
    ];

    const timer = setInterval(() => {
      pct += Math.floor(6 + Math.random() * 8);
      if (pct > 100) pct = 100;

      // Find step text
      let currentStep = steps[0].text;
      steps.forEach(s => {
        if (pct >= s.at) currentStep = s.text;
      });

      // Update detail UI if visible
      const pctEl = this.container.querySelector('#detail-install-pct');
      const stepEl = this.container.querySelector('#detail-install-step');
      const fillEl = this.container.querySelector('#detail-progress-fill');
      const speedEl = this.container.querySelector('#detail-install-speed');

      if (pctEl) pctEl.textContent = `${pct}%`;
      if (stepEl) stepEl.textContent = currentStep;
      if (fillEl) fillEl.style.width = `${pct}%`;
      if (speedEl) speedEl.textContent = `${Math.floor(pct * 7.4)} MB / ${app.size} @ 48.2 MB/s`;

      if (pct >= 100) {
        clearInterval(timer);
        this.installingApps.delete(app.id);

        StoreState.installApp(app.id);

        Notifications.notify({
          app: 'Useless App Store',
          title: 'Installation Complete',
          message: `${app.name} (${app.size}) is ready to waste your time.`,
          icon: 'appStore'
        });

        if (installBox) installBox.style.display = 'none';

        if (triggerBtn) {
          triggerBtn.disabled = false;
          triggerBtn.textContent = 'OPEN';
          triggerBtn.classList.add('open');
        }

        // Post-install celebration dialog
        Dialog.show({
          title: 'Installation Complete',
          message: `${app.name} has been installed.`,
          subtext: `Installed size: ${app.size}.\nReason: The application is very high quality, but does nothing.`,
          type: 'check',
          buttons: [
            { text: 'Launch App', primary: true },
            { text: 'Done' }
          ]
        }).then(res => {
          if (res === 'Launch App') {
            this.appLauncher(app.id);
          }
        });
      }
    }, 180);

    this.installingApps.set(app.id, { timer });

    // Cancel button in detail view
    const cancelBtn = this.container.querySelector('#btn-cancel-install');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        Dialog.show({
          title: 'Cancel Installation',
          message: `Cancel installing ${app.name}?`,
          subtext: 'Your simulated download progress will be lost.',
          type: 'warning',
          buttons: [
            { text: 'Cancel Installation', primary: true },
            { text: 'Continue' }
          ]
        }).then(res => {
          if (res === 'Cancel Installation') {
            clearInterval(timer);
            this.installingApps.delete(app.id);
            if (installBox) installBox.style.display = 'none';
            if (triggerBtn) {
              triggerBtn.disabled = false;
              triggerBtn.textContent = 'GET';
            }
          }
        });
      });
    }
  }

  confirmUninstall(app) {
    Dialog.show({
      title: 'Uninstall Application',
      message: `Uninstall ${app.name}?`,
      subtext: `The application and its ${app.size} of useless data will be permanently removed.`,
      type: 'warning',
      buttons: [
        { text: 'Uninstall', primary: true },
        { text: 'Cancel' }
      ]
    }).then(res => {
      if (res === 'Uninstall') {
        StoreState.uninstallApp(app.id);
        Dialog.show({
          title: 'Uninstalled',
          message: `${app.name} removed.`,
          subtext: 'Nothing important was removed from your system.',
          type: 'check'
        });
      }
    });
  }

  getElement() {
    return this.container;
  }
}

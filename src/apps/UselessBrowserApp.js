/**
 * Useless Browser Application
 * A high-fidelity, believable desktop web browser running a completely local, offline,
 * hilarious search engine and website simulator.
 */

import { Icons } from '../core/icons.js';
import { Sound } from '../core/audio.js';
import { Notifications } from '../components/NotificationCenter.js';
import { UselessnessEngine } from '../core/uselessnessEngine.js';
import { AchievementEngine } from '../core/achievementEngine.js';

const OFFLINE_SEARCH_DATABASE = {
  'how to become productive': {
    title: 'How to Become Productive — Search Results',
    results: [
      {
        title: 'How to become productive tomorrow',
        url: 'https://tomorrow.void/productivity/guides',
        snippet: 'Why accomplish something today when tomorrow has significantly more empty hours? A comprehensive guide to postponing ambition.'
      },
      {
        title: '17 reasons why you should not start today',
        url: 'https://procrastinate.org/daily/17-reasons',
        snippet: 'Reason #1: The alignment of the stars is suboptimal. Reason #2: You might need a snack first. Reason #3: Doing nothing is free.'
      },
      {
        title: 'Waiting is an underrated productivity technique',
        url: 'https://waitjournal.edu/essays/patience',
        snippet: 'By waiting long enough, 84% of tasks resolve themselves or become completely irrelevant.'
      },
      {
        title: 'Useless OS Productivity Center',
        url: 'null://security/productivity',
        snippet: 'Our certified Security Center recommends immediate quarantine of all productive habits.'
      }
    ]
  },
  'weather': {
    title: 'Global Atmospheric Inaction Network',
    results: [
      {
        title: 'The weather exists outside.',
        url: 'https://sky.nature/ambient/reality',
        snippet: 'Current temperature: Noticeable. Precipitation: Possible. Recommendation: Remain indoors and look at your screen.'
      },
      {
        title: 'Should you go outside today?',
        url: 'https://outside-advisory.net/verdict',
        snippet: 'Our meteorologists have concluded that going outside provides zero desktop operating system utility.'
      }
    ]
  },
  'how to fix my computer': {
    title: 'Computer Diagnostics & Repair',
    results: [
      {
        title: 'Have you tried turning it off and doing nothing?',
        url: 'https://helpdesk.null/troubleshooting/inaction',
        snippet: 'Power cycling without resuming any tasks reduces computer error rates to zero.'
      },
      {
        title: '10 errors that were completely in your head',
        url: 'https://existential-tech.io/mind/bugs',
        snippet: 'If a program crashes and nobody cared about the results, did it really fail?'
      }
    ]
  },
  'news': {
    title: 'Null Daily News — Global Inaction Network',
    results: [
      {
        title: 'World Continues to Spin; Nothing Else Reported',
        url: 'https://nullnews.com/world/status',
        snippet: 'International delegates met today and confirmed that tomorrow will likely follow today.'
      },
      {
        title: 'Local Rock Remains Stationary for 4th Consecutive Year',
        url: 'https://nullnews.com/science/rock-watch',
        snippet: 'Geologists report exceptional stability. No further movement anticipated.'
      }
    ]
  },
  'cats': {
    title: 'Feline Observation Portal',
    results: [
      {
        title: 'Cats Master the Art of Uselessness',
        url: 'https://felinevoid.com/studies/nap',
        snippet: 'Cats sleep 16 hours a day and look regal doing it. Learn how to emulate their complete lack of urgency.'
      }
    ]
  }
};

export class UselessBrowserApp {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'browser-window';
    this.tabs = [
      { id: 1, title: 'New Tab', url: 'null://newtab', history: ['null://newtab'], historyIndex: 0 }
    ];
    this.activeTabId = 1;
    this.nextTabId = 2;
    this.bookmarks = [
      { name: 'Null News', url: 'null://news' },
      { name: 'Weather Void', url: 'null://weather' },
      { name: 'Productivity Stopper', url: 'null://search?q=how+to+become+productive' },
      { name: 'Existential Wiki', url: 'null://wiki' }
    ];
    this.searchHistory = JSON.parse(localStorage.getItem('nullos_browser_history_v2') || '[]');

    this.render();
  }

  saveHistory(query, url) {
    this.searchHistory.unshift({ query, url, date: new Date().toLocaleTimeString() });
    if (this.searchHistory.length > 50) this.searchHistory.pop();
    try {
      localStorage.setItem('nullos_browser_history_v2', JSON.stringify(this.searchHistory));
    } catch (e) {}
  }

  getActiveTab() {
    return this.tabs.find(t => t.id === this.activeTabId) || this.tabs[0];
  }

  render() {
    this.container.innerHTML = `
      <!-- Tab Strip -->
      <div class="browser-tab-strip" id="browser-tab-strip">
        <div class="browser-tabs-container" id="tabs-container"></div>
        <button class="browser-tab-add" id="btn-add-tab" title="New tab">${Icons.plus}</button>
      </div>

      <!-- Navigation & Omni-box Toolbar -->
      <div class="browser-toolbar">
        <div class="browser-nav-btns">
          <button class="browser-tool-btn" id="btn-nav-back" title="Back">${Icons.arrowLeft}</button>
          <button class="browser-tool-btn" id="btn-nav-forward" title="Forward">${Icons.arrowRight}</button>
          <button class="browser-tool-btn" id="btn-nav-reload" title="Reload">${Icons.refresh}</button>
          <button class="browser-tool-btn" id="btn-nav-home" title="Home">${Icons.home}</button>
        </div>

        <div class="browser-address-bar">
          <div class="browser-lock-icon">${Icons.lock}</div>
          <input type="text" class="browser-url-input" id="browser-url-input" placeholder="Search with Useless Search or enter address" />
          <button class="browser-tool-btn" id="btn-bookmark-current" title="Bookmark">${Icons.bookmark}</button>
        </div>

        <div class="browser-actions">
          <button class="browser-tool-btn" id="btn-history" title="History">${Icons.clock}</button>
        </div>
      </div>

      <!-- Bookmarks Bar -->
      <div class="browser-bookmarks-bar" id="browser-bookmarks-bar">
        ${this.bookmarks.map(b => `
          <button class="browser-bookmark-item" data-url="${b.url}">
            ${Icons.browser}
            <span>${b.name}</span>
          </button>
        `).join('')}
      </div>

      <!-- Simulated Loading Bar -->
      <div class="browser-loading-bar" id="browser-loading-bar"></div>

      <!-- Web Content Viewport -->
      <div class="browser-viewport" id="browser-viewport"></div>
    `;

    this.bindEvents();
    this.renderTabs();
    this.loadUrl(this.getActiveTab().url);
  }

  bindEvents() {
    // New tab
    this.container.querySelector('#btn-add-tab').addEventListener('click', () => {
      Sound.playClick();
      this.addNewTab();
    });

    // Navigation buttons
    this.container.querySelector('#btn-nav-back').addEventListener('click', () => {
      const tab = this.getActiveTab();
      if (tab.historyIndex > 0) {
        Sound.playClick();
        tab.historyIndex--;
        this.loadUrl(tab.history[tab.historyIndex], false);
      }
    });

    this.container.querySelector('#btn-nav-forward').addEventListener('click', () => {
      const tab = this.getActiveTab();
      if (tab.historyIndex < tab.history.length - 1) {
        Sound.playClick();
        tab.historyIndex++;
        this.loadUrl(tab.history[tab.historyIndex], false);
      }
    });

    this.container.querySelector('#btn-nav-reload').addEventListener('click', () => {
      Sound.playClick();
      this.loadUrl(this.getActiveTab().url, false);
    });

    this.container.querySelector('#btn-nav-home').addEventListener('click', () => {
      Sound.playClick();
      this.loadUrl('null://newtab');
    });

    // URL input enter
    const urlInput = this.container.querySelector('#browser-url-input');
    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = urlInput.value.trim();
        if (!query) return;

        if (query.startsWith('http://') || query.startsWith('https://') || query.startsWith('null://')) {
          this.loadUrl(query);
        } else {
          this.loadUrl(`null://search?q=${encodeURIComponent(query)}`);
        }
      }
    });

    // Bookmarks click
    this.container.querySelectorAll('.browser-bookmark-item').forEach(btn => {
      btn.addEventListener('click', () => {
        Sound.playClick();
        this.loadUrl(btn.dataset.url);
      });
    });

    // History button
    this.container.querySelector('#btn-history').addEventListener('click', () => {
      Sound.playClick();
      this.loadUrl('null://history');
    });
  }

  renderTabs() {
    const container = this.container.querySelector('#tabs-container');
    container.innerHTML = '';

    this.tabs.forEach(tab => {
      const el = document.createElement('div');
      el.className = `browser-tab ${tab.id === this.activeTabId ? 'active' : ''}`;
      el.innerHTML = `
        <span class="browser-tab-icon">${Icons.browser}</span>
        <span class="browser-tab-title">${tab.title}</span>
        <button class="browser-tab-close">${Icons.close}</button>
      `;

      el.addEventListener('click', (e) => {
        if (e.target.closest('.browser-tab-close')) return;
        Sound.playClick();
        this.activeTabId = tab.id;
        this.renderTabs();
        this.loadUrl(tab.url, false);
      });

      el.querySelector('.browser-tab-close').addEventListener('click', (e) => {
        e.stopPropagation();
        Sound.playClick();
        this.closeTab(tab.id);
      });

      container.appendChild(el);
    });
  }

  addNewTab(url = 'null://newtab') {
    const newTab = {
      id: this.nextTabId++,
      title: 'New Tab',
      url,
      history: [url],
      historyIndex: 0
    };
    this.tabs.push(newTab);
    this.activeTabId = newTab.id;
    this.renderTabs();
    this.loadUrl(url);
  }

  closeTab(tabId) {
    if (this.tabs.length <= 1) {
      // Just reset the single tab
      const tab = this.tabs[0];
      tab.url = 'null://newtab';
      tab.title = 'New Tab';
      tab.history = ['null://newtab'];
      tab.historyIndex = 0;
      this.renderTabs();
      this.loadUrl(tab.url);
      return;
    }

    this.tabs = this.tabs.filter(t => t.id !== tabId);
    if (this.activeTabId === tabId) {
      this.activeTabId = this.tabs[this.tabs.length - 1].id;
    }
    this.renderTabs();
    this.loadUrl(this.getActiveTab().url, false);
  }

  loadUrl(url, addToHistory = true) {
    const tab = this.getActiveTab();
    tab.url = url;

    if (addToHistory && tab.history[tab.historyIndex] !== url) {
      tab.history = tab.history.slice(0, tab.historyIndex + 1);
      tab.history.push(url);
      tab.historyIndex = tab.history.length - 1;
    }

    const urlInput = this.container.querySelector('#browser-url-input');
    if (urlInput) urlInput.value = url;

    // Trigger fake loading animation
    const loadBar = this.container.querySelector('#browser-loading-bar');
    if (loadBar) {
      loadBar.style.width = '30%';
      loadBar.style.opacity = '1';
      setTimeout(() => { loadBar.style.width = '70%'; }, 80);
      setTimeout(() => {
        loadBar.style.width = '100%';
        setTimeout(() => { loadBar.style.opacity = '0'; loadBar.style.width = '0%'; }, 150);
      }, 200);
    }

    this.renderPage(url);
  }

  renderPage(url) {
    const viewport = this.container.querySelector('#browser-viewport');
    viewport.scrollTop = 0;

    const tab = this.getActiveTab();

    if (url === 'null://newtab') {
      tab.title = 'New Tab';
      this.renderTabs();
      viewport.innerHTML = `
        <div class="browser-newtab">
          <div class="browser-search-logo">
            ${Icons.browser}
            <span>Useless Search</span>
          </div>
          <div class="browser-search-box-wrap">
            ${Icons.search}
            <input type="text" class="browser-search-input" id="nt-search" placeholder="Search the offline useless web..." autofocus />
          </div>
          <div class="browser-quick-links">
            <button class="browser-ql-item" data-q="how to become productive">
              <span class="browser-ql-icon">💼</span>
              <span>Productivity</span>
            </button>
            <button class="browser-ql-item" data-q="weather">
              <span class="browser-ql-icon">☀️</span>
              <span>Weather</span>
            </button>
            <button class="browser-ql-item" data-q="how to fix my computer">
              <span class="browser-ql-icon">🖥️</span>
              <span>Tech Support</span>
            </button>
            <button class="browser-ql-item" data-q="cats">
              <span class="browser-ql-icon">🐱</span>
              <span>Cats</span>
            </button>
          </div>
        </div>
      `;

      const ntInput = viewport.querySelector('#nt-search');
      ntInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const q = ntInput.value.trim();
          if (q) this.loadUrl(`null://search?q=${encodeURIComponent(q)}`);
        }
      });

      viewport.querySelectorAll('.browser-ql-item').forEach(btn => {
        btn.addEventListener('click', () => {
          Sound.playClick();
          this.loadUrl(`null://search?q=${encodeURIComponent(btn.dataset.q)}`);
        });
      });
      return;
    }

    if (url.startsWith('null://search?q=')) {
      const q = decodeURIComponent(url.split('null://search?q=')[1] || '').toLowerCase().trim();
      tab.title = `${q} - Useless Search`;
      this.renderTabs();

      this.saveHistory(q, url);
      UselessnessEngine.recordSearch();
      AchievementEngine.incrementProgress('browser-user', 1);

      // Notification requirement
      Notifications.notify({
        title: 'Useless Browser',
        message: 'Your search produced 14 useless results.',
        app: 'Useless Browser',
        icon: 'browser',
        duration: 4000
      });

      this.renderSearchResults(viewport, q);
      return;
    }

    if (url === 'null://history') {
      tab.title = 'Browsing History';
      this.renderTabs();
      viewport.innerHTML = `
        <div class="browser-history-page">
          <h2>Browsing History</h2>
          <p style="color:var(--text-secondary);font-size:12px;margin-bottom:14px;">All searches were performed locally and produced zero useful consequences.</p>
          <div class="browser-history-list">
            ${this.searchHistory.length > 0 ? this.searchHistory.map(h => `
              <div class="browser-history-item" data-url="${h.url}">
                <span style="font-weight:500;">${h.query}</span>
                <span style="font-size:11px;color:var(--text-muted);">${h.date}</span>
              </div>
            `).join('') : '<div style="color:var(--text-muted);font-size:12px;">No history recorded yet.</div>'}
          </div>
        </div>
      `;

      viewport.querySelectorAll('.browser-history-item').forEach(item => {
        item.addEventListener('click', () => {
          Sound.playClick();
          this.loadUrl(item.dataset.url);
        });
      });
      return;
    }

    if (url === 'null://news') {
      tab.title = 'Null Daily News';
      this.renderTabs();
      viewport.innerHTML = `
        <div class="browser-page-content">
          <h1>The Daily Void</h1>
          <p class="meta">Published: 11-09-2026 · Global Edition</p>
          <hr/>
          <h2>Study Finds Looking at Rocks Increases Stillness by 100%</h2>
          <p>Researchers at the Useless Institute of Technology confirmed today that individuals who observe motionless stones achieve unprecedented levels of zero productivity.</p>
          <h2>Weather Alert: Outside Temperature Is Noticeable</h2>
          <p>Local authorities advise staying at your keyboard and browsing further useless websites.</p>
        </div>
      `;
      return;
    }

    if (url === 'null://weather') {
      tab.title = 'Weather Void';
      this.renderTabs();
      viewport.innerHTML = `
        <div class="browser-page-content" style="text-align:center;padding:40px 20px;">
          <div style="font-size:64px;">⛅</div>
          <h1>The weather exists outside.</h1>
          <p style="color:var(--text-secondary);max-width:380px;margin:12px auto;line-height:1.6;">
            Sensors confirm that atmospheric conditions are occurring continuously beyond your window.
            No action is required.
          </p>
        </div>
      `;
      return;
    }

    // Generic simulated web page
    tab.title = url.replace('https://', '').replace('http://', '');
    this.renderTabs();
    viewport.innerHTML = `
      <div class="browser-page-content">
        <h1>Simulated Web Destination</h1>
        <p class="meta">URL: ${url}</p>
        <hr/>
        <p>This web page was generated offline by Useless OS. It contains no external tracking, no cookies to accept, and zero useful information.</p>
      </div>
    `;
  }

  renderSearchResults(viewport, query) {
    const known = OFFLINE_SEARCH_DATABASE[query];

    let results = [];
    if (known) {
      results = known.results;
    } else {
      results = [
        {
          title: `Why ${query} will not solve your problems`,
          url: `https://voidsearch.org/inquiry/${encodeURIComponent(query)}`,
          snippet: `A detailed investigation into why looking up "${query}" did not fundamentally alter your present situation.`
        },
        {
          title: `14 alternative things to do instead of ${query}`,
          url: `https://distraction.net/ideas/${encodeURIComponent(query)}`,
          snippet: `Number 1: Stare into the middle distance. Number 2: Open Rock Simulator. Number 3: Continue waiting.`
        },
        {
          title: `The history of contemplating ${query}`,
          url: `https://existential-archive.org/topics/${encodeURIComponent(query)}`,
          snippet: `Philosophers have pondered "${query}" for centuries with negligible actionable outcomes.`
        }
      ];
    }

    viewport.innerHTML = `
      <div class="browser-results-page">
        <div class="browser-results-header">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px;">
            About 14 results (0.002 seconds) — All completely useless.
          </div>
        </div>

        <div class="browser-results-list">
          ${results.map(r => `
            <div class="browser-result-item">
              <a class="browser-result-url" href="javascript:void(0)">${r.url}</a>
              <a class="browser-result-title" href="javascript:void(0)" data-url="${r.url}">${r.title}</a>
              <div class="browser-result-snippet">${r.snippet}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    viewport.querySelectorAll('.browser-result-title').forEach(link => {
      link.addEventListener('click', () => {
        Sound.playClick();
        this.loadUrl(link.dataset.url);
      });
    });
  }

  getElement() {
    return this.container;
  }
}

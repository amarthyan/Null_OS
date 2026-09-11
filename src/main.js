/**
 * NullOS Main Application Bootstrap
 * Orchestrates desktop environment, window manager, App Store, Security Center,
 * Browser, Achievements, Process Engine, Developer API, and installed runtimes.
 */

import { Icons } from './core/icons.js';
import { Sound } from './core/audio.js';
import { FileSystem } from './core/fileSystem.js';
import { RealLoadEngine } from './core/loadEngine.js';
import { WindowManager } from './core/windowManager.js';
import { DeviceOptimizer } from './core/deviceOptimizer.js';
import { AppCatalog, StoreState, getMergedAppCatalog } from './core/appCatalog.js';

import { DeveloperAPI } from './core/developerAPI.js';
import { UselessnessEngine } from './core/uselessnessEngine.js';
import { AchievementEngine } from './core/achievementEngine.js';
import { ProcessEngine } from './core/processEngine.js';
import { PermissionManager } from './core/permissionManager.js';
import { EasterEggEngine } from './core/easterEggEngine.js';

import { BootScreen } from './components/BootScreen.js';
import { LockScreen } from './components/LockScreen.js';
import { StartMenu } from './components/StartMenu.js';
import { QuickSettings } from './components/QuickSettings.js';
import { ContextMenu } from './components/ContextMenu.js';
import { Dialog } from './components/Dialog.js';
import { Notifications } from './components/NotificationCenter.js';

import { AppStoreApp } from './apps/AppStoreApp.js';
import { SecurityCenterApp } from './apps/SecurityCenterApp.js';
import { UselessBrowserApp } from './apps/UselessBrowserApp.js';
import { AchievementsApp } from './apps/AchievementsApp.js';
import { DeveloperConsoleApp } from './apps/DeveloperConsoleApp.js';
import { FileManagerApp } from './apps/FileManagerApp.js';
import { SystemMonitorApp } from './apps/SystemMonitorApp.js';
import { CalculatorApp } from './apps/CalculatorApp.js';
import { NotepadApp } from './apps/NotepadApp.js';
import { SettingsApp } from './apps/SettingsApp.js';
import { TerminalApp } from './apps/TerminalApp.js';
import { RecycleBinApp } from './apps/RecycleBinApp.js';

import { NothingApp } from './apps/hiddenApps/NothingApp.js';
import { LoadingSimulatorApp } from './apps/hiddenApps/LoadingSimulatorApp.js';
import { ProductivityApp } from './apps/hiddenApps/ProductivityApp.js';
import { SecretCalculatorApp } from './apps/hiddenApps/SecretCalculatorApp.js';

import { createUselessAppContent } from './apps/uselessApps/uselessAppRunner.js';

class OperatingSystem {
  constructor() {
    this.pinnedApps = [
      { id: 'appStore', name: 'Store', icon: 'appStore' },
      { id: 'browser', name: 'Browser', icon: 'browser' },
      { id: 'securityCenter', name: 'Security', icon: 'shieldCheck' },
      { id: 'achievements', name: 'Achievements', icon: 'trophy' },
      { id: 'fileManager', name: 'Files', icon: 'fileManager' },
      { id: 'systemMonitor', name: 'System Monitor', icon: 'systemMonitor' },
      { id: 'calculator', name: 'Calculator', icon: 'calculator' },
      { id: 'settings', name: 'Settings', icon: 'settings' }
    ];

    this.baseDesktopIcons = [
      { id: 'appStore', name: 'App Store', icon: 'appStore', type: 'app' },
      { id: 'browser', name: 'Useless Browser', icon: 'browser', type: 'app' },
      { id: 'securityCenter', name: 'Security Center', icon: 'shieldCheck', type: 'app' },
      { id: 'achievements', name: 'Achievements', icon: 'trophy', type: 'app' },
      { id: 'fileManager', name: 'This PC', icon: 'fileManager', type: 'app' },
      { id: 'notepad', name: 'Notepad', icon: 'notepad', type: 'app' },
      { id: 'systemMonitor', name: 'System Monitor', icon: 'systemMonitor', type: 'app' },
      { id: 'calculator', name: 'Calculator', icon: 'calculator', type: 'app' },
      { id: 'terminal', name: 'Terminal', icon: 'terminal', type: 'app' },
      { id: 'recycleBin', name: 'Recycle Bin', icon: 'recycleBin', type: 'app' },
      { id: 'notice', name: 'important_notice.txt', icon: 'fileText', type: 'file', path: 'C:/Users/Aizen/Desktop/important_notice.txt' }
    ];

    DeveloperAPI.setLauncher((appId, args) => this.launchApp(appId, args));
    this.init();
  }

  init() {
    // 1. Initialize Core Services
    const workspaceEl = document.getElementById('window-workspace');
    WindowManager.init(workspaceEl);

    Dialog.init(document.getElementById('modal-container'));
    ContextMenu.init(document.getElementById('context-menu'));
    Notifications.init(document.getElementById('notification-container'));

    // 2. Hardware Resource Telemetry Engine (Safe simulation mode)
    RealLoadEngine.start();

    // 3. Initialize Screens
    const bootEl = document.getElementById('boot-screen');
    const lockEl = document.getElementById('lock-screen');
    const desktopEl = document.getElementById('desktop-environment');

    this.lockScreen = new LockScreen(lockEl, () => {
      desktopEl.classList.add('active');
      this.onDesktopReady();
    });

    this.bootScreen = new BootScreen(bootEl, () => {
      this.lockScreen.show();
    });

    // 4. Register Window State Sync with Taskbar
    WindowManager.onWindowStateChange = (winId, state) => {
      this.updateTaskbar();
    };

    // 5. Subscribe to Store changes to update Desktop icons
    StoreState.subscribe(() => {
      this.renderDesktopIcons();
      this.updateTaskbar();
    });

    // 6. Subscribe to DeveloperAPI custom registrations
    DeveloperAPI.subscribe(() => {
      this.renderDesktopIcons();
      this.updateTaskbar();
    });
  }

  onDesktopReady() {
    this.renderDesktopIcons();
    this.renderTaskbar();

    // Setup Start Menu & Quick Settings
    const startMenuEl = document.getElementById('start-menu');
    this.startMenu = new StartMenu(startMenuEl, (appId, args) => this.launchApp(appId, args), {
      showMenu: (x, y) => this.showPowerMenu(x, y)
    });

    const quickSettingsEl = document.getElementById('quick-settings');
    this.quickSettings = new QuickSettings(quickSettingsEl, (appId) => this.launchApp(appId));

    this.setupDesktopInteractions();
    this.startClock();

    // Launch App Store by default so the user immediately experiences the marketplace!
    setTimeout(() => {
      this.launchApp('appStore');
    }, 500);
  }

  renderDesktopIcons() {
    const grid = document.getElementById('desktop-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const currentIcons = [...this.baseDesktopIcons];

    // Add icons for installed store apps & custom registered apps
    const allApps = getMergedAppCatalog();
    allApps.forEach(app => {
      if (StoreState.isInstalled(app.id) && !currentIcons.some(i => i.id === app.id)) {
        currentIcons.push({
          id: app.id,
          name: app.name,
          iconText: app.icon,
          type: 'app'
        });
      }
    });

    currentIcons.forEach(item => {
      const el = document.createElement('div');
      el.className = 'desktop-icon';
      el.dataset.id = item.id;

      let iconHtml;
      if (item.iconText) {
        iconHtml = `<div style="font-size:32px;">${item.iconText}</div>`;
      } else {
        const iconSvg = Icons[item.icon] || Icons.fileText;
        iconHtml = `<div class="desktop-icon-svg">${iconSvg}</div>`;
      }

      el.innerHTML = `
        ${iconHtml}
        <span class="desktop-icon-label">${item.name}</span>
      `;

      // Select icon
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        grid.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
        el.classList.add('selected');
      });

      // Double click to open
      el.addEventListener('dblclick', () => {
        if (item.type === 'app') {
          this.launchApp(item.id);
        } else if (item.type === 'file') {
          this.launchApp('notepad', { path: item.path });
        }
      });

      // Icon Context Menu
      el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        grid.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
        el.classList.add('selected');

        ContextMenu.show(e.clientX, e.clientY, [
          {
            label: 'Open',
            icon: Icons.fileText,
            action: () => {
              if (item.type === 'app') this.launchApp(item.id);
              else this.launchApp('notepad', { path: item.path });
            }
          },
          {
            label: 'Properties',
            icon: Icons.info,
            action: () => {
              Dialog.show({
                title: `${item.name} Properties`,
                message: item.name,
                subtext: `Target: ${item.id}\nStatus: Certified Useless\nPersistence: Active in Local Storage`,
                type: 'info'
              });
            }
          }
        ]);
      });

      grid.appendChild(el);
    });

    // Deselect on desktop click
    document.getElementById('wallpaper-layer').addEventListener('click', () => {
      grid.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
    });
  }

  renderTaskbar() {
    const taskbar = document.getElementById('taskbar');
    taskbar.innerHTML = `
      <div class="taskbar-apps-container" id="taskbar-apps">
        <button class="taskbar-item" id="taskbar-start-btn" title="Start">
          ${Icons.osLogo}
        </button>
        <button class="taskbar-search-btn" id="taskbar-search-btn">
          ${Icons.search}
          <span>Search</span>
        </button>
        <div id="taskbar-pinned-icons" style="display:flex;align-items:center;gap:3px;height:100%;"></div>
      </div>

      <div class="taskbar-tray">
        <div class="tray-group" id="tray-network-group" title="Internet & Quick Settings">
          ${Icons.wifi}
          ${Icons.volume}
          ${Icons.battery}
        </div>

        <div class="tray-clock" id="tray-clock" title="Date & Time" style="cursor:pointer;">
          <span class="tray-clock-time" id="tray-time">18:34</span>
          <span class="tray-clock-date" id="tray-date">11-09-2026</span>
        </div>

        <div class="taskbar-peek" id="taskbar-peek" title="Show Desktop"></div>
      </div>
    `;

    // Start Menu Toggle
    taskbar.querySelector('#taskbar-start-btn').addEventListener('click', () => {
      this.startMenu.toggle();
      if (this.quickSettings) this.quickSettings.close();
    });

    // Search Toggle
    taskbar.querySelector('#taskbar-search-btn').addEventListener('click', () => {
      this.startMenu.open();
    });

    // Quick Settings Toggle
    taskbar.querySelector('#tray-network-group').addEventListener('click', () => {
      this.quickSettings.toggle();
      if (this.startMenu) this.startMenu.close();
    });

    // Show Desktop
    taskbar.querySelector('#taskbar-peek').addEventListener('click', () => {
      Sound.playClick();
      WindowManager.windows.forEach(w => {
        WindowManager.minimizeWindow(w.id);
      });
    });

    // Clock Easter Egg check
    taskbar.querySelector('#tray-clock').addEventListener('click', () => {
      Sound.playClick();
      EasterEggEngine.checkClockReminder();
    });

    this.updateTaskbar();
  }

  updateTaskbar() {
    const container = document.getElementById('taskbar-pinned-icons');
    if (!container) return;
    container.innerHTML = '';

    const displayApps = [...this.pinnedApps];

    // Also include any currently running window in taskbar
    WindowManager.windows.forEach((win, id) => {
      if (!displayApps.some(a => a.id === id)) {
        displayApps.push({ id, name: win.title, icon: win.icon });
      }
    });

    displayApps.forEach(app => {
      const win = WindowManager.getWindow(app.id);
      const isOpen = !!win;
      const isFocused = isOpen && WindowManager.activeWindowId === app.id && !win.isMinimized;

      const btn = document.createElement('button');
      btn.className = `taskbar-item ${isOpen ? 'active' : ''} ${isFocused ? 'focused' : ''}`;
      btn.title = app.name;

      let iconSvg;
      if (Icons[app.icon]) {
        iconSvg = Icons[app.icon];
      } else {
        const storeApp = getMergedAppCatalog().find(a => a.id === app.id);
        iconSvg = storeApp?.icon ? `<span style="font-size:18px;">${storeApp.icon}</span>` : Icons.fileManager;
      }

      btn.innerHTML = `
        ${iconSvg}
        ${isOpen ? '<div class="taskbar-indicator"></div>' : ''}
      `;

      btn.addEventListener('click', () => {
        if (!isOpen) {
          this.launchApp(app.id);
        } else if (isFocused) {
          WindowManager.minimizeWindow(app.id);
        } else if (win.isMinimized) {
          WindowManager.restoreWindow(app.id);
        } else {
          WindowManager.focusWindow(app.id);
        }
      });

      container.appendChild(btn);
    });
  }

  launchApp(appId, args = null) {
    UselessnessEngine.recordAppOpen(appId);

    // Achievement milestones
    if (appId === 'rockSimulator') {
      AchievementEngine.incrementProgress('rock-collector', 1);
    } else if (appId === 'box3D') {
      AchievementEngine.incrementProgress('box-enthusiast', 1);
    }

    if (WindowManager.windows.has(appId)) {
      const win = WindowManager.getWindow(appId);
      if (win.isMinimized) WindowManager.restoreWindow(appId);
      WindowManager.focusWindow(appId);
      return;
    }

    // 1. App Store
    if (appId === 'appStore') {
      const app = new AppStoreApp((id, a) => this.launchApp(id, a));
      WindowManager.createWindow({
        id: 'appStore',
        title: 'Useless App Store',
        icon: 'appStore',
        width: 880,
        height: 580,
        minWidth: 620,
        minHeight: 400,
        content: app.getElement()
      });
      return;
    }

    // 2. Security Center
    if (appId === 'securityCenter') {
      const app = new SecurityCenterApp();
      WindowManager.createWindow({
        id: 'securityCenter',
        title: 'Security Center',
        icon: 'shieldCheck',
        width: 860,
        height: 560,
        minWidth: 600,
        minHeight: 420,
        content: app.getElement()
      });
      return;
    }

    // 3. Useless Browser
    if (appId === 'browser') {
      const app = new UselessBrowserApp();
      WindowManager.createWindow({
        id: 'browser',
        title: 'Useless Browser',
        icon: 'browser',
        width: 900,
        height: 600,
        minWidth: 580,
        minHeight: 400,
        content: app.getElement()
      });
      return;
    }

    // 4. Achievements
    if (appId === 'achievements') {
      const app = new AchievementsApp();
      WindowManager.createWindow({
        id: 'achievements',
        title: 'Achievements',
        icon: 'trophy',
        width: 780,
        height: 540,
        minWidth: 540,
        minHeight: 380,
        content: app.getElement()
      });
      return;
    }

    // 5. Developer & Diagnostic Console
    if (appId === 'developerConsole') {
      const app = new DeveloperConsoleApp((id) => this.launchApp(id));
      WindowManager.createWindow({
        id: 'developerConsole',
        title: 'Developer & Diagnostic Console',
        icon: 'code',
        width: 720,
        height: 460,
        minWidth: 480,
        minHeight: 300,
        content: app.getElement()
      });
      return;
    }

    // 6. Hidden Apps
    if (appId === 'hidden_nothing') {
      const app = new NothingApp();
      WindowManager.createWindow({
        id: 'hidden_nothing',
        title: 'Nothing',
        icon: 'boxIcon',
        width: 440,
        height: 320,
        minWidth: 300,
        minHeight: 200,
        content: app.getElement()
      });
      return;
    }

    if (appId === 'hidden_loading') {
      const app = new LoadingSimulatorApp();
      WindowManager.createWindow({
        id: 'hidden_loading',
        title: 'Loading Simulator',
        icon: 'refresh',
        width: 460,
        height: 320,
        minWidth: 320,
        minHeight: 220,
        content: app.getElement()
      });
      return;
    }

    if (appId === 'hidden_productivity') {
      const app = new ProductivityApp();
      WindowManager.createWindow({
        id: 'hidden_productivity',
        title: 'Productivity Mode',
        icon: 'warning',
        width: 440,
        height: 300,
        minWidth: 300,
        minHeight: 200,
        content: app.getElement()
      });
      return;
    }

    if (appId === 'hidden_secretCalc') {
      const app = new SecretCalculatorApp();
      WindowManager.createWindow({
        id: 'hidden_secretCalc',
        title: 'Secret Calculator',
        icon: 'calculator',
        width: 320,
        height: 440,
        minWidth: 280,
        minHeight: 380,
        content: app.getElement()
      });
      return;
    }

    // 7. Custom Developer Apps (Registered via UselessOS.registerApp)
    const customApp = DeveloperAPI.getCustomApp(appId);
    if (customApp) {
      let contentEl = null;
      if (typeof customApp.launch === 'function') {
        try {
          contentEl = customApp.launch();
        } catch (e) {
          console.error(e);
        }
      }

      if (!contentEl) {
        contentEl = document.createElement('div');
        contentEl.style.padding = '24px';
        contentEl.style.textAlign = 'center';
        contentEl.innerHTML = `
          <div style="font-size:48px;margin-bottom:12px;">${customApp.icon || '📦'}</div>
          <h2>${customApp.name}</h2>
          <p style="color:var(--text-secondary);font-size:13px;margin:8px auto;max-width:320px;">
            ${customApp.description}
          </p>
          <div style="margin-top:16px;font-size:11px;color:var(--text-muted);">
            Uselessness Level: ${customApp.uselessness}% · Version: ${customApp.version}
          </div>
        `;
      }

      WindowManager.createWindow({
        id: customApp.id,
        title: customApp.name,
        icon: 'appStore',
        width: 520,
        height: 420,
        content: contentEl
      });
      return;
    }

    // 8. Downloadable Store Apps
    const catalogApp = AppCatalog.find(a => a.id === appId);
    if (catalogApp) {
      const appContent = createUselessAppContent(appId, WindowManager);
      WindowManager.createWindow({
        id: appId,
        title: catalogApp.name,
        icon: 'appStore',
        width: 480,
        height: 420,
        minWidth: 320,
        minHeight: 280,
        content: appContent
      });
      return;
    }

    // 9. Built-in Standard OS Apps
    switch (appId) {
      case 'fileManager': {
        const app = new FileManagerApp((id, a) => this.launchApp(id, a));
        WindowManager.createWindow({
          id: 'fileManager',
          title: 'File Manager',
          icon: 'fileManager',
          width: 780,
          height: 500,
          minWidth: 480,
          minHeight: 320,
          content: app.getElement()
        });
        break;
      }

      case 'systemMonitor': {
        const app = new SystemMonitorApp();
        WindowManager.createWindow({
          id: 'systemMonitor',
          title: 'System Monitor',
          icon: 'systemMonitor',
          width: 760,
          height: 500,
          minWidth: 520,
          minHeight: 340,
          content: app.getElement(),
          onClose: () => app.destroy()
        });
        break;
      }

      case 'calculator': {
        const app = new CalculatorApp();
        WindowManager.createWindow({
          id: 'calculator',
          title: 'Calculator',
          icon: 'calculator',
          width: 320,
          height: 440,
          minWidth: 280,
          minHeight: 380,
          content: app.getElement()
        });
        break;
      }

      case 'notepad': {
        const app = new NotepadApp(args);
        WindowManager.createWindow({
          id: 'notepad',
          title: args?.path ? `Notepad - ${args.path.split('/').pop()}` : 'Notepad - Untitled',
          icon: 'notepad',
          width: 680,
          height: 460,
          minWidth: 360,
          minHeight: 240,
          content: app.getElement()
        });
        break;
      }

      case 'terminal': {
        let winRef = null;
        const app = new TerminalApp(() => {
          if (winRef) WindowManager.closeWindow('terminal');
        });
        winRef = WindowManager.createWindow({
          id: 'terminal',
          title: 'Terminal - C:\\Users\\Aizen',
          icon: 'terminal',
          width: 660,
          height: 420,
          minWidth: 400,
          minHeight: 260,
          content: app.getElement()
        });
        break;
      }

      case 'settings': {
        const app = new SettingsApp((wallpaperClass) => {
          const wpLayer = document.getElementById('wallpaper-layer');
          wpLayer.className = wallpaperClass;
        }, (id) => this.launchApp(id));
        WindowManager.createWindow({
          id: 'settings',
          title: 'Settings',
          icon: 'settings',
          width: 800,
          height: 540,
          minWidth: 540,
          minHeight: 380,
          content: app.getElement()
        });
        break;
      }

      case 'recycleBin': {
        const app = new RecycleBinApp();
        WindowManager.createWindow({
          id: 'recycleBin',
          title: 'Recycle Bin',
          icon: 'recycleBin',
          width: 680,
          height: 420,
          minWidth: 420,
          minHeight: 280,
          content: app.getElement()
        });
        break;
      }
    }
  }

  setupDesktopInteractions() {
    const wallpaper = document.getElementById('wallpaper-layer');

    // Desktop 20 clicks Easter Egg
    wallpaper.addEventListener('click', () => {
      EasterEggEngine.recordDesktopClick();
    });

    wallpaper.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      ContextMenu.show(e.clientX, e.clientY, [
        {
          label: 'View',
          icon: Icons.sun,
          action: () => {}
        },
        {
          label: 'Sort by Existential Weight',
          icon: Icons.cpu,
          action: () => {
            this.renderDesktopIcons();
          }
        },
        {
          label: 'Refresh',
          icon: Icons.refresh,
          action: () => {
            document.getElementById('desktop-environment').style.opacity = '0.7';
            setTimeout(() => {
              document.getElementById('desktop-environment').style.opacity = '1';
            }, 80);
          }
        },
        { separator: true },
        {
          label: 'Open App Store',
          icon: Icons.appStore,
          action: () => this.launchApp('appStore')
        },
        {
          label: 'Open Browser',
          icon: Icons.browser,
          action: () => this.launchApp('browser')
        },
        {
          label: 'New Text Document',
          icon: Icons.fileText,
          action: () => this.launchApp('notepad')
        },
        { separator: true },
        {
          label: 'Display Settings',
          icon: Icons.systemMonitor,
          action: () => this.launchApp('settings')
        },
        {
          label: 'Personalize',
          icon: Icons.sun,
          action: () => this.launchApp('settings')
        }
      ]);
    });
  }

  showPowerMenu(x, y) {
    ContextMenu.show(x, y - 100, [
      {
        label: 'Sleep',
        icon: Icons.moon,
        action: () => {
          this.lockScreen.show();
        }
      },
      {
        label: 'Restart',
        icon: Icons.restart,
        action: () => {
          window.location.reload();
        }
      },
      {
        label: 'Shut down',
        icon: Icons.power,
        action: () => {
          Dialog.show({
            title: 'System Shutdown',
            message: 'Shutdown halted by kernel.',
            subtext: 'Reason: Useless OS requires your undivided companionship.',
            type: 'warning'
          });
        }
      }
    ]);
  }

  startClock() {
    const timeEl = document.getElementById('tray-time');
    const dateEl = document.getElementById('tray-date');

    const update = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      if (timeEl) timeEl.textContent = `${hours}:${minutes}`;

      const d = String(now.getDate()).padStart(2, '0');
      const m = String(now.getMonth() + 1).padStart(2, '0');
      const y = now.getFullYear();
      if (dateEl) dateEl.textContent = `${d}-${m}-${y}`;
    };

    update();
    setInterval(update, 1000);
  }
}

// Start NullOS when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  window.NullOS = new OperatingSystem();
});

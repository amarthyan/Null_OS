/**
 * Useless OS Developer API
 * Public extensibility layer enabling third-party modules to register applications,
 * processes, achievements, permissions, and query the Uselessness Score.
 *
 * @typedef {Object} UselessApp
 * @property {string} id - Unique identifier (e.g. "my-app")
 * @property {string} name - Display title
 * @property {string} version - Semantic version
 * @property {string} description - Description
 * @property {string} category - Category (e.g. "Entertainment", "Utilities")
 * @property {string} size - Simulated download size (e.g. "240 MB")
 * @property {string} icon - Icon name or emoji
 * @property {number} uselessness - Rating from 0 to 100
 * @property {string[]} [permissions] - Requested permissions
 * @property {() => HTMLElement|string|void} [launch] - Execution handler
 */

import { WindowManager } from './windowManager.js';
import { Notifications } from '../components/NotificationCenter.js';
import { ProcessEngine } from './processEngine.js';
import { AchievementEngine } from './achievementEngine.js';
import { PermissionManager } from './permissionManager.js';
import { UselessnessEngine } from './uselessnessEngine.js';
import { ReviewManager } from './reviewManager.js';

class UselessDeveloperPlatform {
  constructor() {
    this.customApps = new Map();
    this.listeners = new Set();
    this.settingsStorageKey = 'nullos_user_custom_settings_v2';
    this.appLauncherCallback = null;
  }

  setLauncher(fn) {
    this.appLauncherCallback = fn;
  }

  /**
   * Register a new application into Useless OS.
   * Automatically adds to App Store, Start Menu, and Window Manager.
   * @param {UselessApp} appConfig
   */
  registerApp(appConfig) {
    if (!appConfig || !appConfig.id || !appConfig.name) {
      throw new Error('registerApp requires an object with at least { id, name }');
    }

    const normalizedApp = {
      id: appConfig.id,
      name: appConfig.name,
      tagline: appConfig.tagline || appConfig.description || 'A certified useless application.',
      description: appConfig.description || 'No description provided because none is needed.',
      category: appConfig.category || 'Utilities',
      version: appConfig.version || '1.0.0',
      size: appConfig.size || '128 MB',
      rating: 5.0,
      downloads: '10K',
      developer: appConfig.developer || 'Community Contributor',
      icon: appConfig.icon || '📦',
      uselessness: appConfig.uselessness !== undefined ? appConfig.uselessness : 99,
      permissions: appConfig.permissions || [],
      features: appConfig.features || ['Certified uselessness', 'Zero productive side-effects'],
      reviews: appConfig.reviews || [
        { user: 'Tester', stars: 5, text: 'Installs cleanly and accomplishes nothing.' }
      ],
      launch: appConfig.launch || null,
      isCustom: true
    };

    this.customApps.set(normalizedApp.id, normalizedApp);
    UselessnessEngine.increment('customRegisteredApps', 1);

    // Notify App Store & Desktop
    this.notify();

    Notifications.notify({
      title: 'App Registered',
      message: `${normalizedApp.name} (v${normalizedApp.version}) registered in catalog.`,
      app: 'Developer API',
      icon: 'code',
      duration: 4000
    });

    return normalizedApp;
  }

  getCustomApps() {
    return Array.from(this.customApps.values());
  }

  getCustomApp(id) {
    return this.customApps.get(id);
  }

  /**
   * Launch an application by ID.
   * @param {string} appId
   * @param {any} [args]
   */
  launchApp(appId, args = null) {
    if (this.appLauncherCallback) {
      this.appLauncherCallback(appId, args);
      UselessnessEngine.recordAppOpen(appId);
    }
  }

  /**
   * Close an open application window.
   * @param {string} appId
   */
  closeApp(appId) {
    WindowManager.closeWindow(appId);
  }

  /**
   * Display an authentic operating-system notification.
   * @param {{ title: string, message: string, app?: string, icon?: string, duration?: number }} config
   */
  notify(config) {
    Notifications.notify(config);
  }

  /**
   * Request an application permission interactively.
   * @param {string} appId
   * @param {string} permission
   */
  async requestPermission(appId, permission) {
    const app = this.customApps.get(appId) || { name: appId };
    return await PermissionManager.requestPermission(appId, app.name, permission);
  }

  /**
   * Unlock an achievement.
   * @param {string} achievementId
   */
  unlockAchievement(achievementId) {
    AchievementEngine.unlock(achievementId);
  }

  /**
   * Register a background service.
   * @param {{ name: string, cpu?: number, mem?: number, description?: string }} config
   */
  registerProcess(config) {
    return ProcessEngine.registerProcess(config);
  }

  /**
   * Retrieve a custom persisted setting.
   * @param {string} key
   * @param {any} [defaultVal]
   */
  getSetting(key, defaultVal = null) {
    try {
      const saved = localStorage.getItem(this.settingsStorageKey);
      if (saved) {
        const obj = JSON.parse(saved);
        return obj[key] !== undefined ? obj[key] : defaultVal;
      }
    } catch (e) {}
    return defaultVal;
  }

  /**
   * Store a custom setting in local storage.
   * @param {string} key
   * @param {any} val
   */
  setSetting(key, val) {
    try {
      const saved = localStorage.getItem(this.settingsStorageKey);
      const obj = saved ? JSON.parse(saved) : {};
      obj[key] = val;
      localStorage.setItem(this.settingsStorageKey, JSON.stringify(obj));
    } catch (e) {}
  }

  /**
   * Get the current global Uselessness Score %.
   */
  getUselessnessScore() {
    return UselessnessEngine.getScore();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(); } catch (e) {}
    });
  }
}

export const DeveloperAPI = new UselessDeveloperPlatform();

// Expose on global window object for console / script access
if (typeof window !== 'undefined') {
  window.UselessOS = DeveloperAPI;
}

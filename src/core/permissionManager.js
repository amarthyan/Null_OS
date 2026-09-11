/**
 * NullOS Application Permissions System
 * Handles permission grants, denials, interactive prompt dialogs, and local persistence.
 */

import { Dialog } from '../components/Dialog.js';
import { AchievementEngine } from './achievementEngine.js';

export const PERMISSION_TYPES = [
  { id: 'microphone', name: 'Microphone', icon: 'mic', desc: 'Allow app to simulate audio input.' },
  { id: 'camera', name: 'Camera', icon: 'camera', desc: 'Allow app to contemplate your physical appearance.' },
  { id: 'location', name: 'Location', icon: 'location', desc: 'Allow app to assume you are on planet Earth.' },
  { id: 'files', name: 'File System', icon: 'fileText', desc: 'Allow app to read and write useless data.' },
  { id: 'notifications', name: 'Notifications', icon: 'bell', desc: 'Allow app to interrupt your procrastination.' },
  { id: 'clipboard', name: 'Clipboard', icon: 'clipboard', desc: 'Allow app to observe copied void.' }
];

export const DENIAL_MESSAGES = {
  microphone: "Microphone access denied. Fortunately, we weren't planning to record anything anyway.",
  camera: "Camera access blocked. The system will continue to imagine what you look like.",
  location: "Location access denied. The system assumes you are somewhere on Earth, probably sitting down.",
  files: "File system access denied. Your files remain blissfully unexamined.",
  notifications: "Notification access denied. You will remain undisturbed by nothing.",
  clipboard: "Clipboard access denied. The clipboard was full of nothing anyway."
};

class PermissionEngine {
  constructor() {
    this.storageKey = 'nullos_app_permissions_v2';
    this.listeners = new Set();
    this.permissions = this.load();
  }

  load() {
    const defaults = {
      rockSimulator: { files: 'allow', notifications: 'allow', microphone: 'deny' },
      airManager: { location: 'allow', notifications: 'allow' },
      browser: { network: 'allow', location: 'ask', clipboard: 'allow' },
      voiceRecorder: { microphone: 'ask', files: 'ask' }
    };

    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return { ...defaults, ...JSON.parse(saved) };
      }
    } catch (e) {}

    return defaults;
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.permissions));
    } catch (e) {}
  }

  getPermission(appId, permId) {
    if (!this.permissions[appId]) return 'ask';
    return this.permissions[appId][permId] || 'ask';
  }

  setPermission(appId, permId, state) {
    if (!this.permissions[appId]) {
      this.permissions[appId] = {};
    }
    this.permissions[appId][permId] = state;
    this.save();
    this.notify();
  }

  getAllPermissions() {
    return this.permissions;
  }

  async requestPermission(appId, appName, permId) {
    const current = this.getPermission(appId, permId);
    if (current === 'allow') return true;
    if (current === 'deny') return false;

    const permDef = PERMISSION_TYPES.find(p => p.id === permId) || { name: permId };

    const choice = await Dialog.show({
      title: 'Application Permission Request',
      message: `${appName} is requesting access to your ${permDef.name}.`,
      subtext: `Allowing access will enable ${appName} to perform simulated operations with authentic-looking non-results.`,
      type: 'info',
      buttons: [
        { text: 'Allow', primary: true },
        { text: 'Allow Once' },
        { text: 'Deny' }
      ]
    });

    if (choice === 'Allow') {
      this.setPermission(appId, permId, 'allow');
      return true;
    } else if (choice === 'Allow Once') {
      return true; // Not saved permanently
    } else {
      this.setPermission(appId, permId, 'deny');
      AchievementEngine.unlock('permission-denier');
      return false;
    }
  }

  getDenialMessage(permId) {
    return DENIAL_MESSAGES[permId] || 'Access denied by system security policy.';
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.permissions); } catch (e) {}
    });
  }
}

export const PermissionManager = new PermissionEngine();

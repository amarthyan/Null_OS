/**
 * NullOS Centralized Easter Egg Engine
 * An event-driven engine tracking sequences, shortcuts, repeated actions, and hidden triggers.
 */

import { Dialog } from '../components/Dialog.js';
import { Sound } from './audio.js';
import { UselessnessEngine } from './uselessnessEngine.js';
import { AchievementEngine } from './achievementEngine.js';

class EasterEggSystem {
  constructor() {
    this.keyBuffer = [];
    this.konamiSequence = [
      'arrowup', 'arrowup', 'arrowdown', 'arrowdown',
      'arrowleft', 'arrowright', 'arrowleft', 'arrowright',
      'b', 'a'
    ];
    this.desktopClickCount = 0;
    this.desktopClickTimer = null;
    this.discoveredEggs = new Set();
    this.storageKey = 'nullos_discovered_easter_eggs_v2';
    this.loadDiscovered();

    this.initKeyboardListener();
  }

  loadDiscovered() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        this.discoveredEggs = new Set(JSON.parse(saved));
      }
    } catch (e) {}
  }

  saveDiscovered() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify([...this.discoveredEggs]));
    } catch (e) {}
  }

  markDiscovered(eggId) {
    if (!this.discoveredEggs.has(eggId)) {
      this.discoveredEggs.add(eggId);
      this.saveDiscovered();
      UselessnessEngine.recordEasterEgg();
    }
  }

  initKeyboardListener() {
    if (typeof window === 'undefined') return;

    window.addEventListener('keydown', (e) => {
      // Don't intercept if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        return;
      }

      const key = e.key.toLowerCase();
      this.keyBuffer.push(key);
      if (this.keyBuffer.length > 20) {
        this.keyBuffer.shift();
      }

      this.checkKonami();
    });
  }

  checkKonami() {
    const bufferTail = this.keyBuffer.slice(-this.konamiSequence.length);
    if (bufferTail.length < this.konamiSequence.length) return;

    const isMatch = this.konamiSequence.every((val, i) => val === bufferTail[i]);
    if (isMatch) {
      this.keyBuffer = [];
      this.triggerKonamiCode();
    }
  }

  triggerKonamiCode() {
    Sound.playNotification();
    this.markDiscovered('konami-code');
    AchievementEngine.unlock('konami-code');

    Dialog.show({
      title: 'Kernel Notification',
      message: 'Something has happened.',
      subtext: 'The operating system acknowledges your input.',
      type: 'info'
    }).then(() => {
      setTimeout(() => {
        Dialog.show({
          title: 'Kernel Verification',
          message: 'Nothing has happened.',
          subtext: 'Equilibrium has been successfully restored.',
          type: 'check'
        });
      }, 800);
    });
  }

  recordDesktopClick() {
    this.desktopClickCount++;
    clearTimeout(this.desktopClickTimer);

    if (this.desktopClickCount >= 20) {
      this.desktopClickCount = 0;
      this.markDiscovered('desktop-click-20');
      Dialog.show({
        title: 'Desktop Assistant',
        message: 'Are you looking for something?',
        subtext: 'There is nothing beneath the wallpaper except more desktop.',
        type: 'info'
      });
      return;
    }

    this.desktopClickTimer = setTimeout(() => {
      this.desktopClickCount = 0;
    }, 4000);
  }

  recordRecycleBinEmpty(wasEmpty) {
    if (wasEmpty) {
      this.markDiscovered('empty-recycle-bin');
      AchievementEngine.unlock('nothing-cleaner');
      Dialog.show({
        title: 'Recycle Bin',
        message: 'There was nothing to delete.',
        subtext: 'The bin was already empty. Zero bytes of void have been vacuumed.',
        type: 'info'
      });
    }
  }

  checkClockReminder() {
    const now = new Date();
    const hours = now.getHours();
    this.markDiscovered('clock-reminder');
    if (hours >= 23 || hours < 5) {
      Dialog.show({
        title: 'Sleep Advisory',
        message: 'You should probably go to sleep.',
        subtext: 'Nothing inside Useless OS is urgent, nor will it become urgent tomorrow.',
        type: 'info'
      });
    } else {
      Dialog.show({
        title: 'System Chronometer',
        message: `Current simulated time is ${String(hours).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}.`,
        subtext: 'Time continues to pass regardless of productivity.',
        type: 'info'
      });
    }
  }

  triggerCalculatorZeroDivide() {
    this.markDiscovered('calculator-zero');
    return 'Nice try.';
  }
}

export const EasterEggEngine = new EasterEggSystem();

/**
 * NullOS Global Achievement Engine
 * Tracks user progress, milestones, and unlocks authentic system notifications.
 */

import { Notifications } from '../components/NotificationCenter.js';
import { Sound } from './audio.js';
import { UselessnessEngine } from './uselessnessEngine.js';

export const INITIAL_ACHIEVEMENTS = [
  {
    id: 'rock-collector',
    name: 'Rock Collector',
    description: 'Open Rock Simulator 10 times.',
    category: 'Tenacity',
    target: 10,
    rarity: 'Common',
    icon: '🪨'
  },
  {
    id: 'button-masher',
    name: 'Button Masher',
    description: 'Click the Button app 1,000 times.',
    category: 'Tenacity',
    target: 1000,
    rarity: 'Rare',
    icon: '🔘'
  },
  {
    id: 'professional-procrastinator',
    name: 'Professional Procrastinator',
    description: 'Waste 30 minutes inside Useless OS.',
    category: 'Inefficiency',
    target: 30, // in minutes
    rarity: 'Common',
    icon: '⏳'
  },
  {
    id: 'box-enthusiast',
    name: 'Box Enthusiast',
    description: 'Inspect the box 50 times.',
    category: 'Exploration',
    target: 50,
    rarity: 'Rare',
    icon: '📦'
  },
  {
    id: 'nothing-cleaner',
    name: 'Nothing Cleaner',
    description: 'Empty an already-empty recycle bin.',
    category: 'Inefficiency',
    target: 1,
    rarity: 'Common',
    icon: '🗑️'
  },
  {
    id: 'storage-destroyer',
    name: 'Storage Destroyer',
    description: 'Install 10 useless applications.',
    category: 'Exploration',
    target: 10,
    rarity: 'Rare',
    icon: '💾'
  },
  {
    id: 'update-survivor',
    name: 'Update Survivor',
    description: 'Complete a useless OS update.',
    category: 'System',
    target: 1,
    rarity: 'Common',
    icon: '🔄'
  },
  {
    id: 'security-expert',
    name: 'Security Expert',
    description: 'Run Security Center scans 10 times.',
    category: 'Security',
    target: 10,
    rarity: 'Rare',
    icon: '🛡️'
  },
  {
    id: 'browser-user',
    name: 'Browser User',
    description: 'Perform 25 useless searches.',
    category: 'Exploration',
    target: 25,
    rarity: 'Rare',
    icon: '🌐'
  },
  {
    id: 'konami-code',
    name: 'Secret Explorer',
    description: 'Input the legendary Konami code.',
    category: 'Secret',
    target: 1,
    rarity: 'Ultra Rare',
    icon: '🎮'
  },
  {
    id: 'certified-critic',
    name: 'Certified Critic',
    description: 'Submit an insightful review on the App Store.',
    category: 'Community',
    target: 1,
    rarity: 'Common',
    icon: '⭐'
  },
  {
    id: 'permission-denier',
    name: 'Privacy Maximalist',
    description: 'Deny an application permission request.',
    category: 'Security',
    target: 1,
    rarity: 'Common',
    icon: '🔒'
  },
  {
    id: 'productivity-hunter',
    name: 'Productivity Eliminator',
    description: 'Remove productivity.exe via Security Center.',
    category: 'Security',
    target: 1,
    rarity: 'Rare',
    icon: '⚠️'
  },
  {
    id: 'master-of-nothing',
    name: 'Master of Nothing',
    description: 'Unlock every achievement in Useless OS.',
    category: 'Legendary',
    target: 13,
    rarity: 'Legendary',
    icon: '👑'
  }
];

class AchievementManager {
  constructor() {
    this.storageKey = 'nullos_achievements_v2';
    this.listeners = new Set();
    this.state = this.load();
    this.checkTimeBasedAchievements();
  }

  load() {
    const defaultData = {};
    INITIAL_ACHIEVEMENTS.forEach(ach => {
      defaultData[ach.id] = {
        unlocked: false,
        progress: 0,
        unlockedAt: null
      };
    });

    // Default starting state: e.g. some initial progress
    defaultData['professional-procrastinator'] = {
      unlocked: true,
      progress: 30,
      unlockedAt: '11-09-2026 18:24'
    };
    defaultData['nothing-cleaner'] = {
      unlocked: true,
      progress: 1,
      unlockedAt: '11-09-2026 19:05'
    };

    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return { ...defaultData, ...JSON.parse(saved) };
      }
    } catch (e) {}

    return defaultData;
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {}
  }

  checkTimeBasedAchievements() {
    setInterval(() => {
      const mins = Math.floor(UselessnessEngine.state.secondsWasted / 60);
      this.setProgress('professional-procrastinator', mins);
    }, 10000);
  }

  getAchievements() {
    return INITIAL_ACHIEVEMENTS.map(item => {
      const st = this.state[item.id] || { unlocked: false, progress: 0, unlockedAt: null };
      return {
        ...item,
        unlocked: st.unlocked,
        progress: Math.min(st.progress, item.target),
        unlockedAt: st.unlockedAt
      };
    });
  }

  setProgress(achId, value) {
    const ach = INITIAL_ACHIEVEMENTS.find(a => a.id === achId);
    if (!ach) return;

    if (!this.state[achId]) {
      this.state[achId] = { unlocked: false, progress: 0, unlockedAt: null };
    }

    const current = this.state[achId];
    if (current.unlocked) return;

    current.progress = value;
    if (current.progress >= ach.target) {
      this.unlock(achId);
    } else {
      this.save();
      this.notify();
    }
  }

  incrementProgress(achId, amount = 1) {
    const ach = INITIAL_ACHIEVEMENTS.find(a => a.id === achId);
    if (!ach) return;

    const current = this.state[achId] || { unlocked: false, progress: 0, unlockedAt: null };
    if (current.unlocked) return;

    this.setProgress(achId, (current.progress || 0) + amount);
  }

  unlock(achId) {
    const ach = INITIAL_ACHIEVEMENTS.find(a => a.id === achId);
    if (!ach) return;

    const current = this.state[achId] || { unlocked: false, progress: 0, unlockedAt: null };
    if (current.unlocked) return;

    current.unlocked = true;
    current.progress = ach.target;
    const now = new Date();
    current.unlockedAt = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    this.save();
    UselessnessEngine.recordAchievement();

    // Sound & System Notification
    Sound.playNotification();
    Notifications.notify({
      title: 'Achievement Unlocked',
      message: `${ach.name}: ${ach.description}`,
      app: 'Achievements',
      icon: 'trophy',
      duration: 7000
    });

    this.notify();
    this.checkMasterOfNothing();
  }

  checkMasterOfNothing() {
    if (this.state['master-of-nothing']?.unlocked) return;
    const others = INITIAL_ACHIEVEMENTS.filter(a => a.id !== 'master-of-nothing');
    const allUnlocked = others.every(a => this.state[a.id]?.unlocked);
    const unlockedCount = others.filter(a => this.state[a.id]?.unlocked).length;

    this.setProgress('master-of-nothing', unlockedCount);
    if (allUnlocked) {
      this.unlock('master-of-nothing');
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.getAchievements()); } catch (e) {}
    });
  }
}

export const AchievementEngine = new AchievementManager();

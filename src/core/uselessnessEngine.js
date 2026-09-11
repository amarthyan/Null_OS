/**
 * Uselessness Engine & Global Telemetry Score
 * Tracks all user activity in Useless OS and compiles the definitive Uselessness Score %.
 * Persisted in localStorage.
 */

class UselessnessTracker {
  constructor() {
    this.storageKey = 'nullos_uselessness_engine_v2';
    this.listeners = new Set();
    this.state = this.load();

    // Session time tracking
    this.sessionStartTime = Date.now();
    this.startTimer();
  }

  load() {
    const defaults = {
      secondsWasted: 14 * 3600 + 27 * 60 + 34, // Default baseline time
      appsInstalled: 7,
      appsOpened: 42,
      appsUninstalled: 1,
      updatesCompleted: 3,
      browserSearches: 9,
      calculatorCalculations: 14,
      buttonClicks: 218,
      filesCreated: 4,
      filesDeleted: 2,
      securityScans: 3,
      reviewsSubmitted: 2,
      ratingsSubmitted: 4,
      easterEggsDiscovered: 1,
      achievementsUnlocked: 2,
      customRegisteredApps: 0
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
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {}
  }

  startTimer() {
    setInterval(() => {
      this.state.secondsWasted += 1;
      // Auto save every 15 seconds
      if (this.state.secondsWasted % 15 === 0) {
        this.save();
      }
      // If tab/window is hidden in background, avoid triggering DOM renders across listeners
      if (typeof document !== 'undefined' && document.hidden) {
        return;
      }
      this.notify();
    }, 1000);

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          this.notify();
        }
      });
    }
  }

  increment(metric, count = 1) {
    if (this.state[metric] !== undefined) {
      this.state[metric] += count;
      this.save();
      this.notify();
    }
  }

  recordAppOpen(appId) {
    this.increment('appsOpened', 1);
  }

  recordAppInstall(appId) {
    this.increment('appsInstalled', 1);
  }

  recordAppUninstall(appId) {
    this.increment('appsUninstalled', 1);
  }

  recordSearch() {
    this.increment('browserSearches', 1);
  }

  recordCalculation() {
    this.increment('calculatorCalculations', 1);
  }

  recordClick() {
    this.increment('buttonClicks', 1);
  }

  recordSecurityScan() {
    this.increment('securityScans', 1);
  }

  recordReview() {
    this.increment('reviewsSubmitted', 1);
  }

  recordRating() {
    this.increment('ratingsSubmitted', 1);
  }

  recordEasterEgg() {
    this.increment('easterEggsDiscovered', 1);
  }

  recordAchievement() {
    this.increment('achievementsUnlocked', 1);
  }

  recordUpdate() {
    this.increment('updatesCompleted', 1);
  }

  getScore() {
    // Generates a convincing 99.85% - 99.99% score
    const actions = 
      this.state.appsOpened +
      this.state.browserSearches * 2 +
      this.state.calculatorCalculations +
      this.state.buttonClicks * 0.1 +
      this.state.securityScans * 5 +
      this.state.easterEggsDiscovered * 10 +
      this.state.achievementsUnlocked * 8;

    // As actions increase, uselessness approaches 99.99% asymptotically
    const calculated = 99.70 + Math.min(0.29, (actions / (actions + 150)) * 0.29);
    return calculated.toFixed(2);
  }

  getProductivity() {
    const score = parseFloat(this.getScore());
    return (100 - score).toFixed(2);
  }

  getTimeWastedFormatted() {
    const totalSec = this.state.secondsWasted;
    const hours = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    return `${hours}h ${mins}m`;
  }

  getStats() {
    return {
      uselessnessScore: `${this.getScore()}%`,
      productivityScore: `${this.getProductivity()}%`,
      timeWasted: this.getTimeWastedFormatted(),
      appsInstalled: this.state.appsInstalled,
      appsOpened: this.state.appsOpened,
      appsUninstalled: this.state.appsUninstalled,
      updatesCompleted: this.state.updatesCompleted,
      browserSearches: this.state.browserSearches,
      calculatorCalculations: this.state.calculatorCalculations,
      buttonClicks: this.state.buttonClicks,
      securityScans: this.state.securityScans,
      reviewsSubmitted: this.state.reviewsSubmitted,
      easterEggsDiscovered: this.state.easterEggsDiscovered,
      achievementsUnlocked: this.state.achievementsUnlocked
    };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.getStats()); } catch (e) {}
    });
  }
}

export const UselessnessEngine = new UselessnessTracker();

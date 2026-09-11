/**
 * NullOS Hardware & Device Spec Optimization Engine
 * Detects device hardware specifications (CPU, RAM, GPU, Touch, Display DPI, Screen Size)
 * and dynamically tunes glassmorphism blurs, animations, canvas scaling, and window layouts
 * for maximum performance and buttery-smooth responsiveness on any device.
 */

class HardwareDeviceOptimizer {
  constructor() {
    this.storageKey = 'nullos_device_perf_mode_v2';
    this.listeners = new Set();

    // Stored preferences with defaults
    this.userMode = this.loadPref('mode', 'auto'); // 'auto', 'low', 'balanced', 'high'
    this.blurEnabled = this.loadPref('blur', true);
    this.autoMaximizeOnMobile = this.loadPref('autoMaximize', true);
    this.backgroundThrottle = this.loadPref('bgThrottle', true);

    this.specs = this.detectHardware();
    this.currentTier = this.resolveTier();

    this.init();
  }

  loadPref(key, defaultVal) {
    try {
      const raw = localStorage.getItem(`${this.storageKey}_${key}`);
      if (raw !== null) {
        return JSON.parse(raw);
      }
    } catch (e) {}
    return defaultVal;
  }

  savePref(key, val) {
    try {
      localStorage.setItem(`${this.storageKey}_${key}`, JSON.stringify(val));
    } catch (e) {}
  }

  detectHardware() {
    const cores = typeof navigator !== 'undefined' ? (navigator.hardwareConcurrency || 4) : 4;
    const memory = typeof navigator !== 'undefined' && 'deviceMemory' in navigator ? (navigator.deviceMemory || 4) : 4;
    const isTouch = typeof window !== 'undefined' && (
      ('ontouchstart' in window) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)
    );
    const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
    const width = typeof window !== 'undefined' ? window.innerWidth : 1280;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;

    let formFactor = 'desktop';
    if (width < 640) formFactor = 'mobile';
    else if (width < 1024) formFactor = 'tablet';
    else if (width >= 2160) formFactor = 'ultrawide-4k';

    // GPU / WebGL detection
    let gpuRenderer = 'Standard GPU';
    let isLowEndGpu = false;
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          gpuRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'WebGL Supported';
          const lower = gpuRenderer.toLowerCase();
          if (lower.includes('swiftshader') || lower.includes('llvmpipe') || lower.includes('software')) {
            isLowEndGpu = true;
          }
        }
      }
    } catch (e) {}

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return {
      cores,
      memory,
      isTouch,
      dpr,
      width,
      height,
      formFactor,
      gpuRenderer,
      isLowEndGpu,
      prefersReducedMotion
    };
  }

  resolveTier() {
    if (this.userMode !== 'auto') {
      return this.userMode;
    }

    const { cores, memory, formFactor, isLowEndGpu, prefersReducedMotion } = this.specs;

    if (prefersReducedMotion || isLowEndGpu || (cores <= 4 && memory <= 4 && formFactor === 'mobile')) {
      return 'low';
    }

    if (cores >= 8 && memory >= 8 && !isLowEndGpu) {
      return 'high';
    }

    return 'balanced';
  }

  init() {
    this.applyClasses();
    this.bindEvents();
  }

  bindEvents() {
    if (typeof window === 'undefined') return;

    let resizeDebounce = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeDebounce);
      resizeDebounce = setTimeout(() => {
        const prevFactor = this.specs.formFactor;
        this.specs.width = window.innerWidth;
        this.specs.height = window.innerHeight;
        this.specs.dpr = window.devicePixelRatio || 1;

        if (this.specs.width < 640) this.specs.formFactor = 'mobile';
        else if (this.specs.width < 1024) this.specs.formFactor = 'tablet';
        else if (this.specs.width >= 2160) this.specs.formFactor = 'ultrawide-4k';
        else this.specs.formFactor = 'desktop';

        this.currentTier = this.resolveTier();
        this.applyClasses();

        if (prevFactor !== this.specs.formFactor) {
          this.notify();
        }
      }, 100);
    });

    // Page Visibility API - battery & CPU conservation
    document.addEventListener('visibilitychange', () => {
      if (this.backgroundThrottle) {
        document.body.classList.toggle('page-hidden', document.hidden);
        this.notify();
      }
    });
  }

  applyClasses() {
    if (typeof document === 'undefined') return;
    const body = document.body;

    // Remove previous device & tier classes
    body.classList.remove(
      'perf-tier-low', 'perf-tier-balanced', 'perf-tier-high',
      'device-mobile', 'device-tablet', 'device-desktop', 'device-ultrawide',
      'device-touch', 'device-retina', 'no-blur'
    );

    // Apply active tier
    body.classList.add(`perf-tier-${this.currentTier}`);

    // Apply device form factor
    if (this.specs.width < 640) body.classList.add('device-mobile');
    else if (this.specs.width < 1024) body.classList.add('device-tablet');
    else if (this.specs.width >= 2160) body.classList.add('device-ultrawide');
    else body.classList.add('device-desktop');

    // Touch & DPR markers
    if (this.specs.isTouch) body.classList.add('device-touch');
    if (this.specs.dpr >= 1.5) body.classList.add('device-retina');

    // Blur / Glassmorphism control
    if (!this.blurEnabled || this.currentTier === 'low') {
      body.classList.add('no-blur');
    }
  }

  setPerformanceMode(mode) {
    if (['auto', 'low', 'balanced', 'high'].includes(mode)) {
      this.userMode = mode;
      this.savePref('mode', mode);
      this.currentTier = this.resolveTier();
      this.applyClasses();
      this.notify();
    }
  }

  setBlurEffects(enabled) {
    this.blurEnabled = !!enabled;
    this.savePref('blur', this.blurEnabled);
    this.applyClasses();
    this.notify();
  }

  setAutoMaximizeOnMobile(enabled) {
    this.autoMaximizeOnMobile = !!enabled;
    this.savePref('autoMaximize', this.autoMaximizeOnMobile);
    this.notify();
  }

  setBackgroundThrottle(enabled) {
    this.backgroundThrottle = !!enabled;
    this.savePref('bgThrottle', this.backgroundThrottle);
    this.notify();
  }

  getSpecs() {
    return {
      ...this.specs,
      userMode: this.userMode,
      effectiveTier: this.currentTier,
      blurEnabled: this.blurEnabled,
      autoMaximizeOnMobile: this.autoMaximizeOnMobile,
      backgroundThrottle: this.backgroundThrottle,
      isPageHidden: typeof document !== 'undefined' ? document.hidden : false
    };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    const specs = this.getSpecs();
    this.listeners.forEach(cb => {
      try { cb(specs); } catch (e) {}
    });
  }
}

export const DeviceOptimizer = new HardwareDeviceOptimizer();

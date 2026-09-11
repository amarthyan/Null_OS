/**
 * NullOS Simulated Resource Engine
 * Provides realistic fluctuating telemetry for the System Monitor & Settings
 * without consuming real high CPU or RAM, keeping the OS ultra-lightweight and responsive.
 */

class ResourceEngine {
  constructor() {
    this.isActive = true;
    this.hardwareCores = typeof navigator !== 'undefined' ? (navigator.hardwareConcurrency || 8) : 8;
    this.listeners = new Set();
    this.simulatedCpu = 54;
    this.simulatedRamMb = 5324; // Displays 5.2 GB simulated usage
    this.totalRamMb = 8192; // 8.0 GB
  }

  start() {
    this.isActive = true;
    this.notify();
  }

  stop() {
    this.isActive = false;
    this.notify();
  }

  toggle() {
    this.isActive = !this.isActive;
    this.notify();
  }

  getMetrics() {
    if (!this.isActive) {
      return {
        isActive: false,
        activeWorkers: 0,
        targetCores: this.hardwareCores,
        actualAllocatedMb: 18,
        allocatedBuffersCount: 0,
        cpuUsagePct: 4,
        simulatedRamMb: 512,
        totalRamMb: this.totalRamMb
      };
    }

    // Dynamic believable fluctuation
    const fluctuation = Math.sin(Date.now() / 1500) * 8 + (Math.random() * 4 - 2);
    const cpuUsagePct = Math.min(88, Math.max(48, Math.round(58 + fluctuation)));
    const ramFluctuation = Math.round(Math.cos(Date.now() / 3000) * 80);

    return {
      isActive: true,
      activeWorkers: Math.max(2, Math.ceil(this.hardwareCores * 0.55)),
      targetCores: this.hardwareCores,
      actualAllocatedMb: this.simulatedRamMb + ramFluctuation,
      allocatedBuffersCount: 16,
      cpuUsagePct,
      simulatedRamMb: this.simulatedRamMb + ramFluctuation,
      totalRamMb: this.totalRamMb
    };
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.getMetrics()); } catch (e) {}
    });
  }
}

export const RealLoadEngine = new ResourceEngine();

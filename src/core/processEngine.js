/**
 * NullOS Simulated Background Process Engine
 * Simulates enterprise operating system processes, dynamic resource telemetry,
 * lifecycle management (start/stop/restart), and persistent useless background activity.
 */

import { Notifications } from '../components/NotificationCenter.js';

export const INITIAL_PROCESSES = [
  {
    name: 'NothingService.exe',
    appId: null,
    baseCpu: 0.0,
    baseMem: 18,
    disk: '0.0 MB/s',
    network: '0.0 KB/s',
    status: 'Running',
    description: 'Guarantees that nothing occurs in the background.'
  },
  {
    name: 'RockService.exe',
    appId: 'rockSimulator',
    baseCpu: 4.8,
    baseMem: 380,
    disk: '0.1 MB/s',
    network: '0.0 KB/s',
    status: 'Monitoring stillness',
    description: 'Continuously monitors the rock to ensure zero movement occurs.'
  },
  {
    name: 'AirManagerService.exe',
    appId: 'airManager',
    baseCpu: 1.2,
    baseMem: 140,
    disk: '0.0 MB/s',
    network: '0.0 KB/s',
    status: 'Managing atmosphere',
    description: 'Verifies the room air remains 100% managed.'
  },
  {
    name: 'UselessUpdate.exe',
    appId: null,
    baseCpu: 2.1,
    baseMem: 94,
    disk: '1.2 MB/s',
    network: '14.2 KB/s',
    status: 'Checking for void',
    description: 'Periodically searches for updates that will change nothing.'
  },
  {
    name: 'WaitingBackground.exe',
    appId: 'waitingApp',
    baseCpu: 0.2,
    baseMem: 42,
    disk: '0.0 MB/s',
    network: '0.0 KB/s',
    status: 'Waiting purposefully',
    description: 'Passively waits for future events that are not scheduled.'
  },
  {
    name: 'ProductivityBlocker.exe',
    appId: null,
    baseCpu: 1.8,
    baseMem: 128,
    disk: '0.4 MB/s',
    network: '0.0 KB/s',
    status: 'Active prevention',
    description: 'Intercepts incoming productive thoughts and safely archives them.'
  },
  {
    name: 'BoxRenderer.exe',
    appId: 'box3D',
    baseCpu: 5.4,
    baseMem: 290,
    disk: '0.2 MB/s',
    network: '0.0 KB/s',
    status: 'Rendering cardboard',
    description: 'Pre-renders six-sided cardboard topologies in system cache.'
  },
  {
    name: 'ButtonMonitor.exe',
    appId: 'button',
    baseCpu: 0.9,
    baseMem: 68,
    disk: '0.0 MB/s',
    network: '0.0 KB/s',
    status: 'Monitoring clicks',
    description: 'Keeps count of clicks expended toward achieving nothing.'
  },
  {
    name: 'UselessBrowserService.exe',
    appId: 'browser',
    baseCpu: 3.6,
    baseMem: 460,
    disk: '2.4 MB/s',
    network: '28.1 KB/s',
    status: 'Hoarding cache',
    description: 'Maintains offline search indexes for useless queries.'
  },
  {
    name: 'AchievementService.exe',
    appId: 'achievements',
    baseCpu: 0.8,
    baseMem: 52,
    disk: '0.0 MB/s',
    network: '0.0 KB/s',
    status: 'Tracking milestones',
    description: 'Evaluates existential criteria for unlocking useless achievements.'
  },
  {
    name: 'SecurityShield.exe',
    appId: 'securityCenter',
    baseCpu: 1.5,
    baseMem: 180,
    disk: '0.8 MB/s',
    network: '0.0 KB/s',
    status: 'Guarding inactivity',
    description: 'Scans for productivity hazards such as productivity.exe.'
  },
  {
    name: 'PermissionDaemon.exe',
    appId: 'settings',
    baseCpu: 0.4,
    baseMem: 38,
    disk: '0.0 MB/s',
    network: '0.0 KB/s',
    status: 'Verifying non-access',
    description: 'Ensures application permissions are denied with extreme politeness.'
  }
];

class ProcessManager {
  constructor() {
    this.processes = new Map();
    this.listeners = new Set();
    this.nextPid = 4100;
    this.initProcesses();
    this.startTelemetryLoop();
  }

  initProcesses() {
    INITIAL_PROCESSES.forEach(def => {
      const pid = this.nextPid++;
      this.processes.set(pid, {
        pid,
        name: def.name,
        appId: def.appId,
        baseCpu: def.baseCpu,
        currentCpu: def.baseCpu,
        baseMem: def.baseMem,
        currentMem: def.baseMem,
        disk: def.disk,
        network: def.network,
        status: def.status,
        description: def.description,
        isCustom: false
      });
    });
  }

  startTelemetryLoop() {
    setInterval(() => {
      this.processes.forEach(proc => {
        // Subtle realistic fluctuations
        const jitter = (Math.random() - 0.48) * 0.8;
        proc.currentCpu = Math.max(0.0, +(proc.baseCpu + jitter).toFixed(1));
        const memJitter = Math.floor((Math.random() - 0.5) * 8);
        proc.currentMem = Math.max(12, proc.baseMem + memJitter);
      });
      this.notify();
    }, 1500);
  }

  getProcesses() {
    return Array.from(this.processes.values());
  }

  getProcess(pid) {
    return this.processes.get(Number(pid));
  }

  registerProcess(config) {
    const pid = this.nextPid++;
    const proc = {
      pid,
      name: config.name || `CustomProcess_${pid}.exe`,
      appId: config.appId || null,
      baseCpu: config.cpu || 1.0,
      currentCpu: config.cpu || 1.0,
      baseMem: config.mem || 64,
      currentMem: config.mem || 64,
      disk: config.disk || '0.0 MB/s',
      network: config.network || '0.0 KB/s',
      status: config.status || 'Running',
      description: config.description || 'Registered user process.',
      isCustom: true
    };
    this.processes.set(pid, proc);
    this.notify();
    return pid;
  }

  terminateProcess(pid) {
    pid = Number(pid);
    const proc = this.processes.get(pid);
    if (!proc) return false;

    this.processes.delete(pid);
    this.notify();

    // Special Humor Requirement:
    // If user terminates NothingService.exe, show terminated message,
    // and a few seconds later it automatically restarts itself!
    if (proc.name === 'NothingService.exe') {
      setTimeout(() => {
        const newPid = this.nextPid++;
        this.processes.set(newPid, {
          ...proc,
          pid: newPid,
          status: 'Running'
        });
        Notifications.notify({
          title: 'Service Restored',
          message: 'NothingService.exe has restarted itself.',
          app: 'System Monitor',
          icon: 'restart',
          duration: 5000
        });
        this.notify();
      }, 3500);
    }

    return true;
  }

  restartProcess(pid) {
    pid = Number(pid);
    const proc = this.processes.get(pid);
    if (!proc) return false;

    proc.status = 'Restarting...';
    this.notify();

    setTimeout(() => {
      proc.status = 'Running';
      this.notify();
      Notifications.notify({
        title: 'Process Restarted',
        message: `${proc.name} (PID: ${proc.pid}) restarted successfully.`,
        app: 'System Monitor',
        icon: 'refresh',
        duration: 4000
      });
    }, 1000);

    return true;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.getProcesses()); } catch (e) {}
    });
  }
}

export const ProcessEngine = new ProcessManager();

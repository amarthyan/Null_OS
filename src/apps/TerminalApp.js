/**
 * NullOS Terminal / Command Prompt
 */

import { FileSystem } from '../core/fileSystem.js';
import { RealLoadEngine } from '../core/loadEngine.js';

export class TerminalApp {
  constructor(onClose) {
    this.onClose = onClose;
    this.container = document.createElement('div');
    this.container.className = 'terminal-window';
    this.history = [];
    this.historyIdx = 0;
    this.currentDir = 'C:\\Users\\Aizen';
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="terminal-banner">
        NullOS Command Line Interface [Version 10.0.26100.1]<br/>
        (c) Null Corporation. All rights reserved.<br/>
        Type "help" for a list of available commands.
      </div>
      <div class="terminal-history" id="term-history"></div>
      <div class="terminal-input-row">
        <span class="terminal-prompt" id="term-prompt">${this.currentDir}&gt;</span>
        <input type="text" class="terminal-input" id="term-input" autofocus spellcheck="false" autocomplete="off" />
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const input = this.container.querySelector('#term-input');

    this.container.addEventListener('click', () => {
      input.focus();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim();
        input.value = '';
        if (cmd) {
          this.history.push(cmd);
          this.historyIdx = this.history.length;
          this.execCommand(cmd);
        } else {
          this.appendLine(`${this.currentDir}&gt;`);
        }
      } else if (e.key === 'ArrowUp') {
        if (this.historyIdx > 0) {
          this.historyIdx--;
          input.value = this.history[this.historyIdx];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIdx < this.history.length - 1) {
          this.historyIdx++;
          input.value = this.history[this.historyIdx];
        } else {
          this.historyIdx = this.history.length;
          input.value = '';
        }
      }
    });
  }

  appendLine(text, color = '#cfd6e0') {
    const hist = this.container.querySelector('#term-history');
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.style.color = color;
    line.innerHTML = text;
    hist.appendChild(line);
    this.container.scrollTop = this.container.scrollHeight;
  }

  execCommand(raw) {
    this.appendLine(`${this.currentDir}&gt; ${raw}`, '#ffffff');
    const [cmd, ...args] = raw.trim().split(/\s+/);
    const command = cmd.toLowerCase();

    switch (command) {
      case 'help':
        this.appendLine(`
Available commands:
  help      - Display this help message
  dir / ls  - List directory contents
  cls/clear - Clear the terminal screen
  ping      - Ping a host
  tasklist  - Show running processes
  stress    - Run CPU & 500 MB RAM stress script
  bash      - Execute shell scripts (e.g. bash stress.sh)
  filesize  - Inspect testfile.org-5GB.dat size
  load      - Display real hardware CPU/RAM consumption status
  whoami    - Display current user identity
  echo      - Echo arguments
  matrix    - Enter the digital void
  exit      - Close terminal window
        `);
        break;

      case 'stress':
      case 'bash': {
        if (cmd === 'bash' && args[0] !== 'stress.sh') {
          this.appendLine(`Executing ${args.join(' ')}... Script completed with 0 output.`);
          break;
        }

        this.appendLine('[STRESS ENGINE] Starting CPU & RAM stress routine...');
        if (window.desktopBridge && window.desktopBridge.startStress) {
          window.desktopBridge.startStress().then(res => {
            this.appendLine(`[NATIVE DESKTOP] ${res.message}`);
          });
        } else {
          RealLoadEngine.start();
          this.appendLine(`[WEB WORKERS] Spawned workers on all detected cores. Holding RAM buffers.`);
        }
        this.appendLine('RAM load: 500 MB allocated into memory.');
        this.appendLine('CPU load: All cores executing infinite multiplication loop.');
        this.appendLine('Type "stress-stop" to terminate stress jobs.');
        break;
      }

      case 'stress-stop': {
        if (window.desktopBridge && window.desktopBridge.stopStress) {
          window.desktopBridge.stopStress().then(res => {
            this.appendLine(`[NATIVE DESKTOP] ${res.message}`);
          });
        } else {
          RealLoadEngine.stop();
          this.appendLine('[WEB WORKERS] Stress workers stopped.');
        }
        break;
      }

      case 'filesize': {
        this.appendLine(`
--- APPLICATION DISK FOOTPRINT ---
File: testfile.org-5GB.dat
Size: 5,000,000,000 bytes (5.00 GB)
Status: Bundled into native desktop application
        `);
        break;
      }

      case 'dir':
      case 'ls': {
        const pathConverted = this.currentDir.replace(/\\/g, '/');
        const items = FileSystem.getItems(pathConverted);
        let out = `<br/> Directory of ${this.currentDir}<br/><br/>`;
        items.forEach(it => {
          const typeStr = it.type === 'directory' ? '&lt;DIR&gt;' : '     ';
          out += `11/09/2026  06:00 PM    ${typeStr}   ${it.name}<br/>`;
        });
        out += `<br/>               ${items.length} File(s) / Dir(s)<br/>`;
        this.appendLine(out);
        break;
      }

      case 'cls':
      case 'clear':
        this.container.querySelector('#term-history').innerHTML = '';
        break;

      case 'whoami':
        this.appendLine('nullos\\aizen (Group: Administrators of Nothing)');
        break;

      case 'echo':
        this.appendLine(args.join(' '));
        break;

      case 'load': {
        const m = RealLoadEngine.getMetrics();
        this.appendLine(`
--- REAL HARDWARE RESOURCE ENGINE ---
Active Status: ${m.isActive ? 'RUNNING' : 'STOPPED'}
Logical Cores: ${m.hardwareCores}
Active Worker Threads: ${m.activeWorkers} (≥50% HW Target)
Real Allocated RAM Buffers: ${m.actualAllocatedMb} MB
Browser Heap Used: ${m.heapUsedMb} MB
Purpose: Genuine hardware cycle consumption without productive result.
        `);
        break;
      }

      case 'ping': {
        const target = args[0] || '127.0.0.1';
        this.appendLine(`Pinging ${target} with 32 bytes of data:`);
        let count = 0;
        const pingInterval = setInterval(() => {
          if (count < 4) {
            count++;
            this.appendLine(`Reply from ${target}: bytes=32 time&lt;1ms TTL=128 (Packets delivered to void)`);
          } else {
            clearInterval(pingInterval);
            this.appendLine(`Ping statistics for ${target}: Packets: Sent = 4, Received = 4, Lost = 0 (0% loss). Productivity loss = 100%.`);
          }
        }, 300);
        break;
      }

      case 'tasklist':
        this.appendLine(`
Image Name                     PID Session Name        Mem Usage
========================= ======== ================ ============
System Kernel                    4 Services               180 MB
useless-compute-worker.exe    1084 Console                340 MB
ram-buffer-retention.exe      2192 Console                640 MB
desktop-window-manager.exe    1420 Console                 95 MB
zero-progress-engine.exe      3380 Console                120 MB
browser-tab-hoarder.exe       5120 Console                420 MB
        `);
        break;

      case 'sudo':
        this.appendLine('aizen is not in the sudoers file. This incident will be reported to nobody.');
        break;

      case 'matrix':
        this.appendLine('Streaming reality matrix...', '#2ecc71');
        for (let i = 0; i < 8; i++) {
          let line = '';
          for (let j = 0; j < 40; j++) line += Math.random() > 0.5 ? '1' : '0';
          this.appendLine(line, '#2ecc71');
        }
        break;

      case 'exit':
        if (this.onClose) this.onClose();
        break;

      default:
        this.appendLine(`'${cmd}' is not recognized as an internal or external command, operable program or batch file.`);
    }
  }

  getElement() {
    return this.container;
  }
}

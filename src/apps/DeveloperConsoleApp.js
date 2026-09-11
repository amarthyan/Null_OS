/**
 * NullOS Developer / Diagnostic Console
 * Simulated interactive terminal for inspecting and manipulating internal OS subsystems.
 */

import { DeveloperAPI } from '../core/developerAPI.js';
import { ProcessEngine } from '../core/processEngine.js';
import { AchievementEngine } from '../core/achievementEngine.js';
import { PermissionManager } from '../core/permissionManager.js';
import { UselessnessEngine } from '../core/uselessnessEngine.js';
import { getMergedAppCatalog } from '../core/appCatalog.js';

export class DeveloperConsoleApp {
  constructor(appLauncher) {
    this.appLauncher = appLauncher;
    this.container = document.createElement('div');
    this.container.className = 'terminal-window dev-console';
    this.history = [];
    this.historyIndex = -1;

    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="terminal-body" id="dev-console-body" style="background:#0c0d10;font-family:'JetBrains Mono',monospace;font-size:12px;line-height:1.5;padding:16px;overflow-y:auto;height:100%;color:#c9d1d9;">
        <div style="color:#58a6ff;font-weight:600;margin-bottom:8px;">UselessOS Developer & Diagnostic Console [Version 2.0.0]</div>
        <div style="color:#8b949e;margin-bottom:12px;">Type 'help' to view available diagnostic APIs. Commands are evaluated in a safe sandbox.</div>
        <div id="dev-console-output"></div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
          <span style="color:#3fb950;font-weight:700;">&gt;</span>
          <input type="text" id="dev-console-input" style="flex:1;background:transparent;border:none;outline:none;color:#f0f6fc;font-family:inherit;font-size:inherit;" autofocus spellcheck="false" />
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const input = this.container.querySelector('#dev-console-input');
    const output = this.container.querySelector('#dev-console-output');

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim();
        if (!cmd) return;

        this.history.push(cmd);
        this.historyIndex = this.history.length;
        input.value = '';

        this.appendLine(`> ${cmd}`, '#f0f6fc');
        this.executeCommand(cmd);

        const body = this.container.querySelector('#dev-console-body');
        body.scrollTop = body.scrollHeight;
      } else if (e.key === 'ArrowUp') {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          input.value = '';
        }
      }
    });
  }

  appendLine(text, color = '#8b949e') {
    const output = this.container.querySelector('#dev-console-output');
    const div = document.createElement('div');
    div.style.color = color;
    div.style.whiteSpace = 'pre-wrap';
    div.style.marginBottom = '4px';
    div.textContent = text;
    output.appendChild(div);
  }

  executeCommand(rawCmd) {
    const cmd = rawCmd.trim();

    if (cmd === 'clear' || cmd === 'cls') {
      this.container.querySelector('#dev-console-output').innerHTML = '';
      return;
    }

    if (cmd === 'help') {
      this.appendLine(`Available Commands:
  apps.list()                   List all registered applications
  apps.launch(id)               Launch an application by ID
  processes.list()              List simulated active background processes
  achievements.list()           List achievements and unlock status
  achievements.unlock(id)       Manually unlock an achievement
  uselessness.getScore()        Query the definitive global Uselessness Score %
  permissions.list()            List per-app permission grants
  system.info()                 Print system kernel & hardware simulation specs
  clear                         Clear console output`, '#58a6ff');
      return;
    }

    if (cmd === 'apps.list()') {
      const all = getMergedAppCatalog();
      let text = `${all.length} applications registered in catalog:\n`;
      all.forEach(a => {
        text += `  • [${a.id}] ${a.name} (v${a.version}) - ${a.category} (${a.size})\n`;
      });
      this.appendLine(text, '#c9d1d9');
      return;
    }

    if (cmd.startsWith('apps.launch(') && cmd.endsWith(')')) {
      const match = cmd.match(/apps\.launch\((?:'|")?([^'")]+)(?:'|")?\)/);
      if (match && match[1]) {
        const id = match[1];
        if (this.appLauncher) {
          this.appLauncher(id);
          this.appendLine(`Application '${id}' launched successfully.`, '#3fb950');
        }
        return;
      }
    }

    if (cmd === 'processes.list()') {
      const procs = ProcessEngine.getProcesses();
      let text = `${procs.length} simulated processes active:\n`;
      procs.forEach(p => {
        text += `  PID: ${p.pid} | ${p.name.padEnd(25)} | CPU: ${p.currentCpu}% | RAM: ${p.currentMem} MB | ${p.status}\n`;
      });
      this.appendLine(text, '#c9d1d9');
      return;
    }

    if (cmd === 'achievements.list()') {
      const achs = AchievementEngine.getAchievements();
      const unlocked = achs.filter(a => a.unlocked).length;
      let text = `${unlocked} / ${achs.length} achievements unlocked:\n`;
      achs.forEach(a => {
        text += `  ${a.unlocked ? '✓ [UNLOCKED]' : '✗ [LOCKED]  '} ${a.name.padEnd(28)} Progress: ${a.progress}/${a.target}\n`;
      });
      this.appendLine(text, '#c9d1d9');
      return;
    }

    if (cmd.startsWith('achievements.unlock(') && cmd.endsWith(')')) {
      const match = cmd.match(/achievements\.unlock\((?:'|")?([^'")]+)(?:'|")?\)/);
      if (match && match[1]) {
        const id = match[1];
        AchievementEngine.unlock(id);
        this.appendLine(`Achievement '${id}' unlocked.`, '#3fb950');
        return;
      }
    }

    if (cmd === 'uselessness.getScore()') {
      const stats = UselessnessEngine.getStats();
      let text = `=================================\n`;
      text += `USELESSNESS SCORE: ${stats.uselessnessScore}\n`;
      text += `Productivity:      ${stats.productivityScore}\n`;
      text += `Time Wasted:       ${stats.timeWasted}\n`;
      text += `Apps Opened:       ${stats.appsOpened}\n`;
      text += `Browser Searches:  ${stats.browserSearches}\n`;
      text += `Easter Eggs Found: ${stats.easterEggsDiscovered}\n`;
      text += `=================================`;
      this.appendLine(text, '#f1c40f');
      return;
    }

    if (cmd === 'permissions.list()') {
      const perms = PermissionManager.getAllPermissions();
      this.appendLine(JSON.stringify(perms, null, 2), '#79c0ff');
      return;
    }

    if (cmd === 'system.info()') {
      const text = `Useless OS 26H2 (Build 26100.1742)
Kernel: NullKernel Enterprise 2.0 (x86_64)
Telemetry Engine: RealLoadEngine (Safe Simulation Mode)
Active Process Count: ${ProcessEngine.getProcesses().length}
Global Inaction Rating: ${UselessnessEngine.getScore()}%`;
      this.appendLine(text, '#58a6ff');
      return;
    }

    this.appendLine(`Command '${cmd}' unrecognized. Type 'help' for diagnostics.`, '#f85149');
  }

  getElement() {
    return this.container;
  }
}

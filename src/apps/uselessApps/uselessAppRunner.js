/**
 * NullOS Useless Application Launcher & Runtimes
 * Creates fully interactive, authentic window content for all downloadable store apps.
 */

import { Icons } from '../../core/icons.js';
import { Sound } from '../../core/audio.js';
import { StoreState } from '../../core/appCatalog.js';
import { Dialog } from '../../components/Dialog.js';

export function createUselessAppContent(appId, winManager) {
  const container = document.createElement('div');
  container.className = 'useless-app-view';
  container.style.padding = '20px';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.height = '100%';
  container.style.gap = '16px';
  container.style.userSelect = 'none';

  switch (appId) {
    case 'rockSimulator': {
      let rotation = 0;
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">ROCK SIMULATOR V1.0.0</div>
        <div id="rock-visual" style="font-size:72px;transition:transform 300ms ease;filter:drop-shadow(0 8px 16px rgba(0,0,0,0.5));cursor:default;">🪨</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:12px 18px;font-size:12px;display:flex;flex-direction:column;gap:4px;width:240px;">
          <div><strong>Rock status:</strong> <span style="color:var(--status-green)">Stable</span></div>
          <div><strong>Rock movement:</strong> None</div>
          <div><strong>Rock productivity:</strong> 0%</div>
          <div id="rock-note" style="color:var(--accent);font-size:11px;margin-top:4px;">Observation active.</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="dialog-btn primary" id="btn-rotate-rock">Rotate Rock</button>
          <button class="dialog-btn" id="btn-reset-rock">Reset</button>
        </div>
      `;

      const visual = container.querySelector('#rock-visual');
      const note = container.querySelector('#rock-note');

      container.querySelector('#btn-rotate-rock').addEventListener('click', () => {
        Sound.playClick();
        rotation += 3;
        visual.style.transform = `rotate(${rotation}deg)`;
        note.textContent = `The rock has rotated approximately ${rotation} degrees.`;
        StoreState.addScore(10);
      });

      container.querySelector('#btn-reset-rock').addEventListener('click', () => {
        Sound.playClick();
        rotation = 0;
        visual.style.transform = `rotate(0deg)`;
        note.textContent = 'The rock is at rest.';
      });
      break;
    }

    case 'mouseTester': {
      let clickCount = 0;
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">MOUSE EXISTENCE VERIFICATION SUITE</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:16px;width:300px;font-size:12px;display:flex;flex-direction:column;gap:8px;">
          <div>Mouse detected: <strong style="color:var(--status-green)">YES</strong></div>
          <div id="mt-left">Left button: <span>✓ Working</span></div>
          <div id="mt-right">Right button: <span>✓ Working</span></div>
          <div id="mt-wheel">Scroll wheel: <span>✓ Working</span></div>
          <div id="mt-coords">Position: <span>X: 0, Y: 0</span></div>
          <div style="margin-top:6px;padding-top:6px;border-top:1px solid var(--border-divider);">
            <strong>Conclusion:</strong>
            <div id="mt-conclusion" style="color:var(--status-green);font-weight:500;margin-top:2px;">Your mouse exists.</div>
          </div>
        </div>
        <button class="dialog-btn primary" id="btn-test-again">Test Again</button>
      `;

      container.addEventListener('mousemove', (e) => {
        const coords = container.querySelector('#mt-coords span');
        if (coords) coords.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
      });

      container.querySelector('#btn-test-again').addEventListener('click', () => {
        Sound.playClick();
        clickCount++;
        const conc = container.querySelector('#mt-conclusion');
        conc.textContent = clickCount % 2 === 0 ? 'Your mouse still exists.' : 'Physical existence re-confirmed.';
        StoreState.addScore(15);
      });
      break;
    }

    case 'personSimulator': {
      let step = 0;
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">PERSON SIMULATOR</div>
        <div id="person-avatar" style="font-size:64px;transition:transform 300ms ease;">🧍</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:14px;width:260px;font-size:12px;display:flex;flex-direction:column;gap:5px;">
          <div><strong>Current activity:</strong> Standing</div>
          <div><strong>Status:</strong> <span style="color:var(--status-green)">Doing nothing</span></div>
          <div><strong>Productivity:</strong> 0%</div>
          <div id="person-msg" style="color:var(--text-secondary);font-size:11px;margin-top:4px;">The person is content.</div>
        </div>
        <button class="dialog-btn primary" id="btn-move-person">Make Person Move</button>
      `;

      const avatar = container.querySelector('#person-avatar');
      const msg = container.querySelector('#person-msg');

      container.querySelector('#btn-move-person').addEventListener('click', () => {
        Sound.playClick();
        step = (step + 1) % 2;
        avatar.style.transform = step === 1 ? 'translateX(24px)' : 'translateX(0px)';
        msg.textContent = 'The person moved.';
        StoreState.addScore(10);

        setTimeout(() => {
          msg.textContent = 'The person has returned to doing nothing.';
        }, 1500);
      });
      break;
    }

    case 'airManager': {
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">AIR MANAGER V3.0</div>
        <div style="font-size:56px;">💨</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:14px;width:280px;font-size:12px;display:flex;flex-direction:column;gap:5px;">
          <div>Air detected: <strong style="color:var(--status-green)">YES</strong></div>
          <div>Air quality: <strong>Probably fine</strong></div>
          <div>Air quantity: <strong>A lot</strong></div>
          <div>Air temperature: <strong>Unknown</strong></div>
          <div>Air managed: <strong style="color:var(--accent)">100%</strong></div>
          <div id="air-status-msg" style="color:var(--text-muted);font-size:11px;margin-top:4px;">Atmosphere calibrated.</div>
        </div>
        <button class="dialog-btn primary" id="btn-manage-air">Manage Air</button>
      `;

      container.querySelector('#btn-manage-air').addEventListener('click', () => {
        Sound.playClick();
        container.querySelector('#air-status-msg').textContent = 'Air successfully managed.';
        StoreState.addScore(10);
      });
      break;
    }

    case 'waitingApp': {
      let seconds = 0;
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">WAITING SIMULATOR</div>
        <div style="font-size:24px;color:var(--text-secondary);">Please wait...</div>
        <div id="wait-timer" style="font-size:44px;font-weight:300;font-family:var(--font-mono);color:var(--text-primary);">00:00:00</div>
        <div id="wait-message" style="font-size:12px;color:var(--text-secondary);text-align:center;max-width:280px;min-height:36px;">
          You are successfully waiting.
        </div>
        <div style="display:flex;gap:8px;">
          <button class="dialog-btn primary" id="btn-continue-wait">Continue Waiting</button>
          <button class="dialog-btn" id="btn-stop-wait">Stop Wasting Time</button>
        </div>
      `;

      const timerEl = container.querySelector('#wait-timer');
      const msgEl = container.querySelector('#wait-message');

      const interval = setInterval(() => {
        seconds++;
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        timerEl.textContent = `00:${mins}:${secs}`;

        if (seconds === 10) {
          msgEl.innerHTML = 'You have waited 10 seconds.<br/>Congratulations. Nothing happened.';
          Sound.playNotification();
          StoreState.addScore(50);
        } else if (seconds === 30) {
          msgEl.innerHTML = 'You have waited 30 seconds.<br/>You could have made toast.';
          StoreState.addScore(100);
        }
      }, 1000);

      container.querySelector('#btn-continue-wait').addEventListener('click', () => {
        Sound.playClick();
        msgEl.textContent = 'Continuing to wait with dedication.';
      });

      container.querySelector('#btn-stop-wait').addEventListener('click', () => {
        Sound.playClick();
        clearInterval(interval);
        msgEl.textContent = 'Waiting paused. Nothing was missed.';
      });
      break;
    }

    case 'numberViewer': {
      let num = 42;
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">NUMBER VIEWER PROFESSIONAL</div>
        <div style="font-size:13px;color:var(--text-secondary);">Current number:</div>
        <div id="nv-display" style="font-size:56px;font-weight:600;font-family:var(--font-mono);color:var(--text-primary);">${num}</div>
        <div id="nv-remark" style="font-size:12px;color:var(--accent);">You have successfully viewed a number.</div>
        <div style="display:flex;gap:8px;margin-top:8px;">
          <button class="dialog-btn primary" id="btn-next-num">NEXT NUMBER</button>
          <button class="dialog-btn" id="btn-rand-num">Random Number</button>
        </div>
      `;

      const display = container.querySelector('#nv-display');
      const remark = container.querySelector('#nv-remark');

      container.querySelector('#btn-next-num').addEventListener('click', () => {
        Sound.playClick();
        num++;
        display.textContent = num;
        remark.textContent = `You are now viewing ${num}.`;
        StoreState.addScore(5);
      });

      container.querySelector('#btn-rand-num').addEventListener('click', () => {
        Sound.playClick();
        num = Math.floor(100000 + Math.random() * 900000);
        display.textContent = num;
        remark.textContent = 'You have observed a random integer.';
        StoreState.addScore(10);
      });
      break;
    }

    case 'box': {
      let zoom = 1;
      let rot = 0;
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">BOX INSPECTION SUITE</div>
        <div id="box-3d" style="width:100px;height:100px;border:2px solid var(--accent);background:rgba(0,120,212,0.15);border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:600;transition:all 200ms ease;box-shadow:0 8px 24px rgba(0,0,0,0.4);">
          BOX
        </div>
        <div style="font-size:12px;color:var(--text-secondary);text-align:center;">
          Status: <strong style="color:var(--status-green)">Box</strong> · Condition: <strong>Fine</strong>
        </div>
        <div id="box-desc" style="font-size:11px;color:var(--text-muted);">Ready for inspection.</div>
        <div style="display:flex;gap:8px;">
          <button class="dialog-btn" id="btn-rotate-box">Rotate</button>
          <button class="dialog-btn" id="btn-zoom-box">Zoom</button>
          <button class="dialog-btn primary" id="btn-inspect-box">Inspect</button>
        </div>
      `;

      const box = container.querySelector('#box-3d');
      const desc = container.querySelector('#box-desc');

      container.querySelector('#btn-rotate-box').addEventListener('click', () => {
        Sound.playClick();
        rot += 45;
        box.style.transform = `rotate(${rot}deg) scale(${zoom})`;
        desc.textContent = `Box rotated to ${rot}°. Still a box.`;
      });

      container.querySelector('#btn-zoom-box').addEventListener('click', () => {
        Sound.playClick();
        zoom = zoom === 1 ? 1.3 : 1;
        box.style.transform = `rotate(${rot}deg) scale(${zoom})`;
        desc.textContent = zoom > 1 ? 'Box magnified.' : 'Box restored.';
      });

      container.querySelector('#btn-inspect-box').addEventListener('click', () => {
        Sound.playClick();
        desc.textContent = 'Conclusion: It is a box.';
        StoreState.addScore(10);
      });
      break;
    }

    case 'button': {
      let clicks = 0;
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">OPTIMIZED BUTTON ENGINE</div>
        <button id="the-mighty-btn" style="width:140px;height:56px;background:var(--accent);color:#ffffff;font-size:16px;font-weight:600;border-radius:6px;border:none;box-shadow:0 4px 14px rgba(0,120,212,0.4);transition:all var(--anim-fast);cursor:default;">
          CLICK
        </button>
        <div style="font-size:18px;font-weight:500;color:var(--text-primary);" id="btn-counter">Clicks: 0</div>
        <div id="btn-message" style="font-size:12px;color:var(--text-secondary);min-height:20px;">Push the button to increase nothing.</div>
      `;

      const btn = container.querySelector('#the-mighty-btn');
      const counter = container.querySelector('#btn-counter');
      const msg = container.querySelector('#btn-message');

      btn.addEventListener('click', () => {
        Sound.playClick();
        clicks++;
        counter.textContent = `Clicks: ${clicks}`;
        StoreState.addScore(2);

        if (clicks === 10) {
          msg.textContent = 'You have clicked 10 times. Good start.';
        } else if (clicks === 50) {
          msg.textContent = '50 clicks achieved. Still no purpose.';
        } else if (clicks === 100) {
          msg.innerHTML = 'You have clicked the button 100 times.<br/><strong>Why? 🏆 Achievement: Button Master</strong>';
          Sound.playNotification();
          StoreState.addScore(200);
        }
      });
      break;
    }

    case 'plantMonitor': {
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">PLANT MONITOR 24/7</div>
        <div style="font-size:64px;">🌱</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:14px;width:260px;font-size:12px;display:flex;flex-direction:column;gap:4px;">
          <div>Plant status: <strong style="color:var(--status-green)">Alive</strong></div>
          <div>Growth: <strong>0.00001%</strong></div>
          <div>Movement: <strong>None</strong></div>
          <div>Water level: <strong>Probably okay</strong></div>
          <div>Plant activity: <strong>Standing</strong></div>
        </div>
        <button class="dialog-btn primary" id="btn-check-plant">Check Plant</button>
      `;

      container.querySelector('#btn-check-plant').addEventListener('click', () => {
        Sound.playClick();
        Dialog.show({
          title: 'Plant Telemetry',
          message: 'Your plant is still there.',
          subtext: 'Photosynthesis is proceeding at normal existential rates.',
          type: 'check'
        });
      });
      break;
    }

    case 'sleepSimulator': {
      let sleepSeconds = 0;
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">SLEEP SIMULATOR</div>
        <div style="font-size:56px;">😴</div>
        <div style="font-size:13px;color:var(--text-secondary);">Time asleep:</div>
        <div id="sleep-time" style="font-size:36px;font-family:var(--font-mono);font-weight:300;color:var(--text-primary);">00:00:00</div>
        <div id="sleep-note" style="font-size:12px;color:var(--text-secondary);text-align:center;">
          Simulating deep rest while staring at screen...
        </div>
        <button class="dialog-btn primary" id="btn-wake-up">Wake Up</button>
      `;

      const timerEl = container.querySelector('#sleep-time');
      const note = container.querySelector('#sleep-note');

      const interval = setInterval(() => {
        sleepSeconds++;
        const s = String(sleepSeconds % 60).padStart(2, '0');
        const m = String(Math.floor(sleepSeconds / 60)).padStart(2, '0');
        timerEl.textContent = `00:${m}:${s}`;
      }, 1000);

      container.querySelector('#btn-wake-up').addEventListener('click', () => {
        Sound.playClick();
        clearInterval(interval);
        note.innerHTML = '<strong>You have simulated sleep. You are still awake.</strong>';
      });
      break;
    }

    case 'uselessAI': {
      container.style.justifyContent = 'flex-start';
      container.style.alignItems = 'stretch';
      container.innerHTML = `
        <div style="font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px;border-bottom:1px solid var(--border-divider);padding-bottom:10px;">
          ${Icons.bot}
          <span>UselessAI Neural Network</span>
        </div>
        <div id="ai-chat" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:10px;padding:8px 0;">
          <div style="background:var(--surface-card);padding:10px 14px;border-radius:6px;font-size:12px;align-self:flex-start;max-width:85%;">
            Hello. I am UselessAI. Ask me anything, and I will confidently provide no help at all.
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <input type="text" id="ai-input" placeholder="Ask UselessAI..." style="flex:1;height:32px;background:var(--surface-input);border:1px solid var(--border-strong);border-radius:4px;padding:0 10px;font-size:12px;color:#fff;" />
          <button class="dialog-btn primary" id="ai-send" style="height:32px;">Ask</button>
        </div>
      `;

      const chat = container.querySelector('#ai-chat');
      const input = container.querySelector('#ai-input');
      const sendBtn = container.querySelector('#ai-send');

      const answers = [
        'That is an interesting question. Have you considered not worrying about it?',
        'Based on my 500-billion parameters, the answer is technically somewhere in the universe.',
        'I could answer that, but staring at the desktop icons would be equally productive.',
        'Error 0x00: Wisdom detected, immediately suppressed for safety.',
        'According to recent data, 10 out of 10 rocks recommend doing nothing.',
        'The solution is simple: Close all your tabs and take a deep breath.'
      ];

      const send = () => {
        const q = input.value.trim();
        if (!q) return;
        input.value = '';

        const userBubble = document.createElement('div');
        userBubble.style.cssText = 'background:var(--accent);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px;align-self:flex-end;max-width:85%;';
        userBubble.textContent = q;
        chat.appendChild(userBubble);
        chat.scrollTop = chat.scrollHeight;

        setTimeout(() => {
          Sound.playNotification();
          const aiBubble = document.createElement('div');
          aiBubble.style.cssText = 'background:var(--surface-card);padding:10px 14px;border-radius:6px;font-size:12px;align-self:flex-start;max-width:85%;';
          aiBubble.textContent = answers[Math.floor(Math.random() * answers.length)];
          chat.appendChild(aiBubble);
          chat.scrollTop = chat.scrollHeight;
          StoreState.addScore(25);
        }, 500);
      };

      sendBtn.addEventListener('click', send);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
      break;
    }

    case 'loadingSimulator': {
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">LOADING SIMULATOR</div>
        <div style="font-size:14px;color:var(--text-primary);margin-top:20px;">Loading components...</div>
        <div style="width:280px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;margin:12px 0;">
          <div style="width:99%;height:100%;background:var(--accent);border-radius:3px;"></div>
        </div>
        <div style="font-size:16px;font-weight:600;color:var(--text-primary);">99%</div>
        <div style="font-size:12px;color:var(--text-muted);font-style:italic;">Still loading... Almost there for eternity.</div>
      `;
      break;
    }

    case 'uselessAntivirus': {
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">NULLDEFEND ANTIVIRUS ENTERPRISE</div>
        <div style="font-size:56px;">🛡️</div>
        <div id="av-status" style="font-size:14px;font-weight:600;color:var(--status-green);">System Protected (No active threats)</div>
        <div id="av-sub" style="font-size:12px;color:var(--text-muted);">0 threats found. 0 productive programs allowed.</div>
        <button class="dialog-btn primary" id="btn-quick-scan">Run Quick Scan</button>
      `;

      const btn = container.querySelector('#btn-quick-scan');
      const sub = container.querySelector('#av-sub');

      btn.addEventListener('click', () => {
        Sound.playClick();
        btn.disabled = true;
        btn.textContent = 'Scanning 512,000 files...';
        setTimeout(() => {
          Sound.playNotification();
          btn.disabled = false;
          btn.textContent = 'Scan Complete';
          sub.textContent = 'Scanned 512,000 files in 1.2s. 0 Threats. 0 Ambitions found.';
          StoreState.addScore(50);
        }, 1200);
      });
      break;
    }

    case 'performanceBooster': {
      container.innerHTML = `
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">TURBO PERFORMANCE ACCELERATOR</div>
        <div style="font-size:56px;">🚀</div>
        <div id="boost-status" style="font-size:16px;font-weight:600;color:var(--text-primary);">System Velocity: 100%</div>
        <div id="boost-sub" style="font-size:12px;color:var(--text-muted);">Ready to accelerate imaginary clock frequencies.</div>
        <button class="dialog-btn primary" id="btn-boost">Boost Now</button>
      `;

      const btn = container.querySelector('#btn-boost');
      const status = container.querySelector('#boost-status');
      const sub = container.querySelector('#boost-sub');

      btn.addEventListener('click', () => {
        Sound.playNotification();
        status.textContent = 'System Velocity: 1000% (Maximum Overclock)';
        status.style.color = 'var(--status-green)';
        sub.textContent = 'Performance increased tenfold. Everything runs at the exact same speed.';
        StoreState.addScore(100);
      });
      break;
    }

    default: {
      container.innerHTML = `
        <div style="font-size:48px;">📦</div>
        <div style="font-size:16px;font-weight:600;">${appId}</div>
        <div style="font-size:12px;color:var(--text-secondary);">Application loaded successfully. It has no functional instructions.</div>
        <button class="dialog-btn primary" onclick="alert('Action completed. Zero result.')">Perform Task</button>
      `;
    }
  }

  return container;
}

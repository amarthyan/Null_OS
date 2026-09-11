const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { Worker } = require('worker_threads');

const logFile = path.join(app.getPath('userData') || os.tmpdir(), 'nullos.log');
function log(msg) {
  try {
    fs.appendFileSync(logFile, `[${new Date().toISOString()}] ${msg}\n`);
  } catch (e) {}
}

process.on('uncaughtException', (err) => {
  log(`Uncaught Exception: ${err.stack || err}`);
});

let mainWindow = null;
let stressWorkers = [];
let ramStressBuffer = null;
let isStressing = false;

function createWindow() {
  log('Creating main window...');
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    title: 'NullOS V2 — Enterprise Desktop',
    backgroundColor: '#0d0f12',
    autoHideMenuBar: true,
    show: true,
    center: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false
    }
  });

  mainWindow.maximize();
  mainWindow.focus();

  const distPath = path.join(__dirname, '..', 'dist', 'index.html');
  log(`Resolved distPath: ${distPath}`);

  mainWindow.loadFile(distPath).then(() => {
    log('mainWindow.loadFile succeeded');
  }).catch((err) => {
    log(`loadFile error: ${err.message}, attempting loadURL fallback`);
    mainWindow.loadURL('file://' + distPath.replace(/\\/g, '/')).catch(e2 => {
      log(`loadURL error: ${e2.message}`);
      mainWindow.loadURL('http://localhost:3000').catch(() => {});
    });
  });

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    log(`Page failed to load: code=${errorCode} desc=${errorDescription} url=${validatedURL}`);
  });

  mainWindow.webContents.on('render-process-gone', (event, details) => {
    log(`Render process gone: ${JSON.stringify(details)}`);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
    stopStress();
  });
}

// Real CPU & RAM Stress Engine matching user's shell script:
function startStress() {
  if (isStressing) return { success: true, message: 'Already stressing' };
  isStressing = true;

  const cores = os.cpus().length;

  // 1. 500 MB RAM allocation (matching: data=$(head -c 500M /dev/zero))
  try {
    ramStressBuffer = Buffer.alloc(500 * 1024 * 1024);
    // Fault all 4KB virtual memory pages into physical RAM working set
    for (let i = 0; i < ramStressBuffer.length; i += 4096) {
      ramStressBuffer[i] = 1;
    }
    log(`Allocated and committed 500 MB physical RAM buffer.`);
  } catch (e) {
    console.error('RAM stress allocation error:', e);
    log(`RAM allocation error: ${e.message}`);
  }

  // 2. CPU load on all cores (matching: for i in cores; do while true; do 12345 * 67890; done)
  const workerCode = `
    let x = 1.0001;
    while (true) {
      x = (x * 1.00001 + 0.12345) % 100000;
    }
  `;

  stressWorkers = [];
  for (let i = 0; i < cores; i++) {
    try {
      const worker = new Worker(workerCode, { eval: true });
      stressWorkers.push(worker);
    } catch (e) {
      console.error('Worker spawn error:', e);
    }
  }
  log(`Spawned ${stressWorkers.length} CPU stress worker threads on ${cores} cores.`);

  return {
    success: true,
    cores,
    ramMb: 500,
    message: `CPU stress started on ${cores} cores + 500 MB RAM buffer allocated.`
  };
}

function stopStress() {
  if (!isStressing) return { success: true };
  isStressing = false;

  stressWorkers.forEach(w => {
    try {
      w.terminate();
    } catch (e) {}
  });
  stressWorkers = [];
  ramStressBuffer = null;
  log('Stress stopped and memory released.');

  return { success: true, message: 'Stress stopped and memory released.' };
}

// IPC Handlers
ipcMain.handle('start-stress', () => startStress());
ipcMain.handle('stop-stress', () => stopStress());
ipcMain.handle('get-stress-status', () => ({
  isStressing,
  activeWorkers: stressWorkers.length,
  ramMb: ramStressBuffer ? 500 : 0
}));

ipcMain.handle('get-app-info', () => {
  let bigFilePath = path.join(process.resourcesPath, 'testfile.org-5GB.dat');
  if (!fs.existsSync(bigFilePath)) {
    bigFilePath = path.join(__dirname, '..', 'testfile.org-5GB.dat');
  }

  let bigFileSize = 5000000000;
  let hasRealFile = fs.existsSync(bigFilePath);
  if (hasRealFile) {
    try {
      const stats = fs.statSync(bigFilePath);
      bigFileSize = stats.size;
    } catch (e) {}
  }

  return {
    isDesktopApp: true,
    totalMemoryGb: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(1),
    freeMemoryGb: (os.freemem() / (1024 * 1024 * 1024)).toFixed(1),
    cpuModel: os.cpus()[0]?.model || 'Unknown',
    cpuCores: os.cpus().length,
    platform: os.platform(),
    bigFilePath: hasRealFile ? bigFilePath : 'Virtual Storage Asset (5.00 GB)',
    bigFileSizeGb: (bigFileSize / (1024 * 1024 * 1024)).toFixed(2)
  };
});

app.whenReady().then(() => {
  createWindow();
  // Automatically start CPU and RAM stress when the application runs
  startStress();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  stopStress();
  if (process.platform !== 'darwin') app.quit();
});

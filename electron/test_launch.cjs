const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

console.log('Main process started.');
console.log('__dirname:', __dirname);
console.log('isPackaged:', app.isPackaged);

const logPath = path.join(__dirname, 'launch.log');
fs.writeFileSync(logPath, 'Starting launch...\n');

function log(msg) {
  console.log(msg);
  try { fs.appendFileSync(logPath, msg + '\n'); } catch (e) {}
}

app.whenReady().then(() => {
  log('app.whenReady fired');
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.once('ready-to-show', () => {
    log('ready-to-show event fired!');
  });

  win.webContents.on('did-finish-load', () => {
    log('did-finish-load event fired! Title: ' + win.getTitle());
  });

  win.webContents.on('did-fail-load', (e, code, desc, url) => {
    log(`did-fail-load: code=${code}, desc=${desc}, url=${url}`);
  });

  const distPath = path.join(__dirname, '..', 'dist', 'index.html');
  log('Loading: ' + distPath);
  win.loadFile(distPath);

  setTimeout(() => {
    log('Closing test after 4 seconds');
    app.quit();
  }, 4000);
});

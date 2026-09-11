const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('desktopBridge', {
  isDesktopApp: true,
  getAppInfo: () => ipcRenderer.invoke('get-app-info'),
  startStress: () => ipcRenderer.invoke('start-stress'),
  stopStress: () => ipcRenderer.invoke('stop-stress'),
  getStressStatus: () => ipcRenderer.invoke('get-stress-status')
});

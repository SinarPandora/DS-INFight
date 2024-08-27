import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
// noinspection JSUnusedGlobalSymbols
const api = {
  quitApp: () => ipcRenderer.send('quitApp'),
  mainWindow: {
    resizeTo: (width: number, height: number) => ipcRenderer.send('mainWindow:resizeTo', width, height),
    getIsOnTop: () => ipcRenderer.invoke('mainWindow:getIsOnTop'),
    switchOnTop: () => ipcRenderer.send('mainWindow:switchOnTop')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

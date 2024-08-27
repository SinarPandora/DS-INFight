import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      quitApp: () => void
      mainWindow: {
        resizeTo: (width: number, height: number) => void
        getIsOnTop: () => Promise<boolean>
        switchOnTop: () => void
      }
    }
  }
}

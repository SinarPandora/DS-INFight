import { app, BrowserWindow, ipcMain } from 'electron'

/**
 * 初始化 Election Api
 *
 * @param mainWindow 主窗口
 */
export function setupAPI(mainWindow: BrowserWindow) {
  ipcMain
    .on('quitApp', () => app.quit())
    // Main window Api
    .on('mainWindow:resizeTo', (_, width, height) => mainWindow.setSize(width, height, true))
    .on('mainWindow:switchOnTop', () => mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop()))

  ipcMain.handle('mainWindow:getIsOnTop', () => mainWindow.isAlwaysOnTop())
}

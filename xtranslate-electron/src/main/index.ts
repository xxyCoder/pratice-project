import { app, shell, BrowserWindow, ipcMain, screen } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

const winWidth = 450
const winOffsetPosition = 50

function setBrowserWindowAttr(mainWindow: BrowserWindow) {
  mainWindow.setWindowButtonVisibility(false)
  mainWindow.setResizable(true)
}

function createWindow() {
  const { width } = screen.getPrimaryDisplay().workAreaSize
  const mainWindow = new BrowserWindow({
    width: winWidth,
    resizable: false,
    x: width - winWidth - winOffsetPosition,
    y: winOffsetPosition,
    titleBarStyle: 'hidden',
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  setBrowserWindowAttr(mainWindow)
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

const handleIPCMainListener = () => {
  ipcMain.on('ping', () => console.log('pong')) // test
  ipcMain.on('set-always-on-top', (event, flag) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    if (win) win.setAlwaysOnTop(flag)
  })
}
app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  handleIPCMainListener()
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

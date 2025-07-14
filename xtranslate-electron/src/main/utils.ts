import { App, BrowserWindow, IpcMain, Menu, NativeImage, Tray } from 'electron'

export function setBrowserWindowAttr(mainWindow: BrowserWindow) {
  mainWindow.setWindowButtonVisibility(false)
}

export function setTray({
  mainWindow,
  app,
  icon
}: {
  mainWindow: BrowserWindow
  app: App
  icon: NativeImage | string
}) {
  const tray = new Tray(icon)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '打开',
      click: () => {
        const win = BrowserWindow.getAllWindows()[0]
        if (win) win.show()
      }
    },
    {
      label: '退出',
      click: () => {
        app.quit()
      }
    }
  ])
  tray.setToolTip('我的翻译')
  tray.setContextMenu(contextMenu)
  tray.on('click', () => {
    mainWindow?.isVisible() ? mainWindow?.hide() : mainWindow?.show()
  })
}

export const handleIPCMainListener = (ipcMain: IpcMain) => {
  ipcMain.on('ping', () => console.log('pong')) // test
  ipcMain.on('set-always-on-top', (event, flag) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    if (win) win.setAlwaysOnTop(flag)
  })
}

export function setDockMenu({ app, icon }: { app: App; icon: NativeImage | string }) {
  app.dock?.setIcon(icon)
  const dockMenu = Menu.buildFromTemplate([
    {
      label: '打开',
      click: () => {
        const win = BrowserWindow.getAllWindows()[0]
        if (win) win.show()
      }
    }
  ])
  app.dock?.setMenu(dockMenu)
}

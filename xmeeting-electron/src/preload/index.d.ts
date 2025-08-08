import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      env: {
        ENCRYPTION_KEY?: string
      }
    }
  }
}

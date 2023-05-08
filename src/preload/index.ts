import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electronAPI: ElectronAPI
    api: unknown
  }
}

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electronAPI', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electronAPI = electronAPI
  window.api = api
}

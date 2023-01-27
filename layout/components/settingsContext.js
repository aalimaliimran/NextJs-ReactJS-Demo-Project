// ** React Imports
import { createContext, useState, useEffect } from 'react'

// ** ThemeConfig Import
import themeConfig from './themeConfig'

const initialSettings = {
  layout: themeConfig.layout,
  navHidden: themeConfig.navHidden,
  navCollapsed: themeConfig.navCollapsed,
  verticalNavToggleType: themeConfig.verticalNavToggleType
}

// set settings in localStorage
const storeSettings = settings => {
  const initSettings = Object.assign({}, settings)
  delete initSettings.appBar
  delete initSettings.layout
  delete initSettings.navHidden
  window.localStorage.setItem('settings', JSON.stringify(initSettings))
}

// ** Create Context
export const SettingsContext = createContext({
  saveSettings: () => null,
  settings: initialSettings
})

export const SettingsProvider = ({ children, pageSettings }) => {
  // ** State
  const [settings, setSettings] = useState({ ...initialSettings })
  useEffect(() => {
   
    
    if (pageSettings) {
      setSettings({ ...settings, ...pageSettings })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSettings])


  const saveSettings = updatedSettings => {
    storeSettings(updatedSettings)
    setSettings(updatedSettings)
  }

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
}

export const SettingsConsumer = SettingsContext.Consumer

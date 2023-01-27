import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from './components/Layout'

// ** Navigation Imports
import VerticalNavItems from './navigation/navItems'

import AppBarContent from './appBar/AppBarContent'


// ** Hook Import
import { useSettings } from './components/useSettings'

const MainLayout = ({ children, contentHeightFixed }) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  const hidden = useMediaQuery('(max-width:1200px)')
 

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      contentHeightFixed={contentHeightFixed}
      verticalLayoutProps={{
        navMenu: {
          navItems: VerticalNavItems()
        },
        appBar: {
          content: props => (
            <AppBarContent
              hidden={hidden}
              settings={settings}
              saveSettings={saveSettings}
              toggleNavVisibility={props.toggleNavVisibility}
            />
          )
        }
      }}
     
    >
      {children}
      
    </Layout>
  )
}

export default MainLayout

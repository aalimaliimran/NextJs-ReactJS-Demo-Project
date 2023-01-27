import { Router } from 'next/router'

// ** Loader Import
import NProgress from 'nprogress'

// ** Component Imports
import MainLayout from '/layout'

// ** Contexts
import { SettingsProvider } from '/layout/components/settingsContext'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

import '../styles/globals.scss'

// ** Pace Loader
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux';

import store from '../shared/store/index';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
 
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <SettingsProvider>            
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </SettingsProvider>
       </Provider>
      </SessionProvider>
      
    </>
  )
}

export default MyApp

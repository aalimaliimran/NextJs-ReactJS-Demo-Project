import '../styles/globals.scss'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux';

import store from '../shared/store/index';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
       <Head>
        <title>Young Warriors | Next Demo Project</title>
        <meta name="description" content="A project of Young Warriors" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
       </Provider>
      </SessionProvider>
      
    </>
  )
}

export default MyApp

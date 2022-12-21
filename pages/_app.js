import '../styles/globals.scss'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
       <Head>
        <title>Young Warriors | Next Demo Project</title>
        <meta name="description" content="A project of Young Warriors" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp

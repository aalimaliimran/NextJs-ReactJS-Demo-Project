import '../styles/globals.scss'
import '../styles/footer.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
       <Head>
        <title>Young Warriors | Next Demo Project</title>
        <meta name="description" content="A project of Young Warriors" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

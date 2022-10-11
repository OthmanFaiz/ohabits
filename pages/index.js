import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ohabits</title>
        <meta name="description" content="Othman habits tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
    )
}

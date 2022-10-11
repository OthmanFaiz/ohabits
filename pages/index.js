import Head from 'next/head'
import Header from '../components/layout/Header'
import classes from '../styles/Home.module.css'

import Date from '../components/Date'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ohabits</title>
        <meta name="description" content="Othman habits tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={classes.container}>
        <Date />
      </div>
    </>
    )
}

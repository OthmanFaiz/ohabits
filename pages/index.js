import Head from 'next/head'
import Header from '../components/layout/Header'
import classes from '../styles/Home.module.css'

import Date from '../components/Date'
import Habits from '../components/Habits'
import Workout from '../components/Workout'

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
        <Habits />
        <Workout />
      </div>
    </>
    )
}

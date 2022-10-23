import Head from 'next/head'
import Header from '../components/layout/Header'
import classes from '../styles/workout.module.css'
import Image from 'next/image'

export default function Workout(){
    return (
        <>
            <Head>
                <title>Ohabits</title>
                <meta name="description" content="Othman habits tracker" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={classes.container}>
                <div className={classes.box}>
                    <span className={classes.title}>Workout</span>
                </div>
                <div className={classes.box}>
                    <div className={classes.workout_box}>
                        <span className={classes.workout_box_title}>Legs &amp; ABS</span>
                        <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} />
                    </div>
                    <div className={classes.workout_box}>
                        <span className={classes.workout_box_title}>Chest &amp; Shoulders &amp; Triceps 1</span>
                        <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} />
                    </div>
                    <div className={classes.workout_box}>
                        <span className={classes.workout_box_title}>Back &amp; Biceps 1</span>
                        <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} />
                    </div>
                    <div className={classes.workout_box}>
                        <span className={classes.workout_box_title}>Chest &amp; Shoulders &amp; Triceps 2</span>
                        <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} />
                    </div>
                    <div className={classes.workout_box}>
                        <span className={classes.workout_box_title}>Back &amp; Biceps 2</span>
                        <Image src='/images/svg/ar-down.svg' alt='down' width={16} height={16} />
                    </div>

                    <div className={classes.workout_inputbox}>
                        <input type="text" className={classes.workout_input} placeholder="New Workout ..." />
                        <Image src='/images/svg/add.svg' alt='plus' width={16} height={16} />
                    </div>
                </div>
            </div>
        </>
    )
}
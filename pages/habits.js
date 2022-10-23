import Head from 'next/head'
import Header from '../components/layout/Header'
import classes from '../styles/habits.module.css'
import Image from 'next/image'

export default function Habits() {
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
                    <span className={classes.title}>Habits</span>
                </div>
                <div className={classes.box}>
                    <div className={classes.habit_name}>
                        <span className={classes.habit_name_title}>Habit name</span>
                        <div className={classes.days}>
                            <div className={classes.day}>S</div>
                            <div className={classes.day}>S</div>
                            <div className={classes.day}>M</div>
                            <div className={classes.day}>T</div>
                            <div className={classes.day}>W</div>
                            <div className={classes.day}>T</div>
                            <div className={classes.day}>F</div>
                        </div>
                        <div className={classes.empty}></div>
                    </div>
                    <div className={classes.habit_habitbox}>
                        <span className={classes.habit_title}>Reading</span>
                        <div className={classes.checkboxs}>
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                        </div>
                        <div className={classes.x}>
                            <Image src='/images/svg/x.svg' alt='x' width={16} height={16} />
                        </div>
                    </div>
                    <div className={classes.habit_habitbox}>
                        <span className={classes.habit_title}>Learn Dutch</span>
                        <div className={classes.checkboxs}>
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                        </div>
                        <div className={classes.x}>
                            <Image src='/images/svg/x.svg' alt='x' width={16} height={16} />
                        </div>
                    </div>

                    <div className={classes.habit_habitbox}>
                        <span className={classes.habit_title}>Fast typing</span>
                        <div className={classes.checkboxs}>
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                        </div>
                        <div className={classes.x}>
                            <Image src='/images/svg/x.svg' alt='x' width={16} height={16} />
                        </div>
                    </div>
                    <div className={classes.habit_habitbox}>
                        <span className={classes.habit_title}>Work on startup</span>
                        <div className={classes.checkboxs}>
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                        </div>
                        <div className={classes.x}>
                            <Image src='/images/svg/x.svg' alt='x' width={16} height={16} />
                        </div>
                    </div>
                    <div className={classes.habit_habitbox}>
                        <span className={classes.habit_title}>Learn Rust</span>
                        <div className={classes.checkboxs}>
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                            <input type="checkbox" className={classes.checkbox} />
                        </div>
                        <div className={classes.x}>
                            <Image src='/images/svg/x.svg' alt='x' width={16} height={16} />
                        </div>
                    </div>

                    <div className={classes.habit_habitbox}>
                        <input type="text" className={classes.habit_input} placeholder="Add new habit ..." />
                        <Image src='/images/svg/add.svg' alt='plus' width={16} height={16} />
                    </div>
                </div>
            </div>
        </>
    )
}
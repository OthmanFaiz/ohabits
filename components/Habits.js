import classes from './Habits.module.css'
import { useState } from 'react'

export default function Habits() {
    return (
        <div className={classes.container}>
            <div className={classes.habits_title}>
                Habits
            </div>
            <div className={classes.habits}>
                <div className={classes.habit}>
                    <label className={classes.habit_left}>
                        <input type="checkbox" className={classes.checkbox} />
                        <div className={classes.habit_name}>
                            Reading
                        </div>
                    </label>
                    <label className={classes.habit_right}>
                        <input type="checkbox" className={classes.checkbox} />
                        <div className={classes.habit_name}>
                            Learn Dutch
                        </div>
                    </label>
                </div>
                <div className={classes.habit}>
                    <label className={classes.habit_left}>
                        <input type="checkbox" className={classes.checkbox} />
                        <div className={classes.habit_name}>
                            Fast Typing
                        </div>
                    </label>
                    <label className={classes.habit_right}>
                        <input type="checkbox" className={classes.checkbox} />
                        <div className={classes.habit_name}>
                            Work on startup
                        </div>
                    </label>
                </div>
                <div className={classes.habit}>
                    <label className={classes.habit_left}>
                        <input type="checkbox" className={classes.checkbox} />
                        <div className={classes.habit_name}>
                            Learn Rust
                        </div>
                    </label>
                </div>
            </div>

        </div>
    )
}
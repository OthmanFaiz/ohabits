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

            <div className={classes.habits_title}>
                Todo&apos;s
            </div>
            <div className={classes.habits}>
                <div className={classes.habit}>
                    <label className={classes.habit_left}>
                        <input type="checkbox" className={classes.checkbox} />
                        <div className={classes.habit_name}>
                            Call Othman
                        </div>
                    </label>
                    <label className={classes.habit_right}>
                        <input type="checkbox" className={classes.checkbox} />
                        <div className={classes.habit_name}>
                            Buy milk
                        </div>
                    </label>
                </div>
                <div className={classes.habit}>
                    <label className={classes.habit_left}>
                        <input type="checkbox" className={classes.checkbox} />
                        <div className={classes.habit_name}>
                            Reroll in discord
                        </div>
                    </label>
                </div>
                <input type="text" className={classes.input} placeholder="Today's tasks ..." />
            </div>

            <div className={classes.habits_title}>
                Today&apos;s note
            </div>
            <textarea className={classes.textarea} placeholder="Type what's in your mind ..." />

            <div className={`${classes.habits_title} ${classes.line}`}>
                Rate your day
            </div>
            <div className={classes.day_flex}>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="1" />
                    <label htmlFor="1">1</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="2" />
                    <label htmlFor="2">2</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="3" />
                    <label htmlFor="3">3</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="4" />
                    <label htmlFor="4">4</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="5" />
                    <label htmlFor="5">5</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="6" />
                    <label htmlFor="6">6</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="7" />
                    <label htmlFor="7">7</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="8" />
                    <label htmlFor="8">8</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="9" />
                    <label htmlFor="9">9</label>
                </div>
                <div className={classes.day_radio}>
                    <input className={classes.radio} type="radio" name="day" id="10" />
                    <label htmlFor="10">10</label>
                </div>
            </div>
        </div>
    )
}
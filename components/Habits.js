import classes from './Habits.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function Habits() {
    const [habits, setHabits] = useState([
        { name: 'Reading', done: false }, 
        { name: 'Learn Dutch', done: false },
        { name: 'Fast Typing', done: false },
        { name: 'Work on startup', done: false },
        { name: 'Learn Rust', done: false }
    ]);

    const handleHabit = (index) => {
        const newHabits = [...habits];
        newHabits[index].done = !newHabits[index].done;
        setHabits(newHabits);
        }

    return (
        <div className={classes.container}>
            <div className={classes.habits_title}>
                Habits
            </div>
            <div className={classes.habits}>
                {habits.map((habit, index) => {
                    if(index === habits.length - 1 && index % 2 === 0) {
                        return (
                        <div className={classes.habit}>
                            <label className={classes.habit_left}>
                                <input type="checkbox" className={classes.checkbox} onClick={() => handleHabit(index)} />
                                <div className={`${classes.habit_name} ${habit.done && classes.habit_name_crossed}`}>
                                    {habit.name}
                                </div>
                            </label>
                        </div>
                        )
                    }
                    else if(index === 0 || index % 2 === 0) {
                        return (
                            <div className={classes.habit}>
                                <label className={classes.habit_left}>
                                    <input type="checkbox" className={classes.checkbox} onClick={() => handleHabit(index)} />
                                    <div className={`${classes.habit_name} ${habit.done && classes.habit_name_crossed}`}>
                                        {habit.name}
                                    </div>
                                </label>
                                <label className={classes.habit_right}>
                                    <input type="checkbox" className={classes.checkbox} onClick={() => handleHabit(index + 1)} />
                                    <div className={`${classes.habit_name} ${habits[index + 1].done && classes.habit_name_crossed}`}>
                                        {habits[index + 1].name}
                                    </div>
                                </label>
                            </div>
                        )
                    }
                }
                )}
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
                <div className={classes.todo_add}>
                    <input type="text" className={classes.input} placeholder="Today's tasks ..." />
                    <div className={classes.todo_add_icon}>
                        <Image src="/images/svg/add.svg" width={24} height={24} />
                    </div>
                </div>
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
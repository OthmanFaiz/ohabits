import classes from './Workout.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Workout({ workout, handleWorkout }) {

    return (
        <form onChange={handleWorkout}>
        <div className={classes.container}>
            <div className={`${classes.workout_title} ${classes.flex}`}>
                Workout
                <input name='wight' type="text" placeholder='your wight' className={classes.wight_input} />
            </div>
            <div className={classes.today_workout}>
                <span className={classes.today_title}>Today&apos;s plan</span>
                <select name='plan' className={classes.dropdown}>
                    <option value="Legs &amp; ABS">Legs &amp; ABS</option>
                    <option value="Pull">Pull</option>
                    <option value="Legs">Legs</option>
                </select>
            </div>
            <div className={classes.workout_plan}>
                <div className={classes.workout_plan_section}>
                    <span className={classes.workout_plan_title}>
                        Squat
                    </span>
                    <input name='rep 1' type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <input name='rep 2' type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <input name='rep 3' type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <div className={classes.workout_plan_add}>
                        <Image src='/images/svg/add.svg' alt='add' width={16} height={16} />
                    </div>
                    <div className={classes.workout_plan_remove}>
                        <Image src='/images/svg/remove.svg' alt='remove' width={16} height={16} />
                    </div>
                </div>
                <div className={classes.workout_plan_section}>
                    <span className={classes.workout_plan_title}>
                        Squat
                    </span>
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <div className={classes.workout_plan_add}>
                        <Image src='/images/svg/add.svg' alt='add' width={16} height={16} />
                    </div>
                    <div className={classes.workout_plan_remove}>
                        <Image src='/images/svg/remove.svg' alt='remove' width={16} height={16} />
                    </div>
                </div>
                <div className={classes.workout_plan_section}>
                    <span className={classes.workout_plan_title}>
                        Squat
                    </span>
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <div className={classes.workout_plan_add}>
                        <Image src='/images/svg/add.svg' alt='add' width={16} height={16} />
                    </div>
                    <div className={classes.workout_plan_remove}>
                        <Image src='/images/svg/remove.svg' alt='remove' width={16} height={16} />
                    </div>
                </div>
                <div className={classes.workout_plan_section}>
                    <span className={classes.workout_plan_title}>
                        Squat
                    </span>
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <input type="text" placeholder='120 x 12' className={classes.workout_plan_input} />
                    <div className={classes.workout_plan_add}>
                        <Image src='/images/svg/add.svg' alt='add' width={16} height={16} />
                    </div>
                    <div className={classes.workout_plan_remove}>
                        <Image src='/images/svg/remove.svg' alt='remove' width={16} height={16} />
                    </div>
                </div>
                <div className={classes.workout_plan_section_add}>
                    <input type="text" placeholder='new workout' className={`${classes.workout_plan_input} ${classes.workout_plan_input_new}`} />
                    <div className={classes.workout_plan_add}>
                        <Image src='/images/svg/add.svg' alt='add' width={16} height={16} />
                    </div>
                </div>
            </div>
            <div className={`${classes.workout_title} ${classes.gap_top}`}>
                Cardio
            </div>
            <div className={classes.cardio}>
                <div className={classes.wrap}>                    
                    <input type="text" placeholder='cardio name' className={classes.cardio_name_input} />
                    <input type="text" placeholder='40 min' className={classes.cardio_min_input} />
                </div>
                <div className={classes.workout_plan_add}>
                    <Image src='/images/svg/add.svg' alt='add' width={24} height={24} />
                </div>
                <div className={classes.workout_plan_remove}>
                    <Image src='/images/svg/remove.svg' alt='remove' width={24} height={24} />
                </div>
            </div>
        </div>
        </form>
    )
}
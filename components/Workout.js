import classes from './Workout.module.css'

export default function Workout() {
    return (
        <div className={classes.container}>
            <div className={`${classes.workout_title} ${classes.flex}`}>
                Workout
                <input type="text" placeholder='your wight today' className={classes.wight_input} />
            </div>
            <div className={classes.today_workout}>
                <span className={classes.today_title}>Today's plan</span>
                <select className={classes.dropdown}>
                    <option value="1">Legs & ABS</option>
                    <option value="2">Pull</option>
                    <option value="3">Legs</option>
                </select>
            </div>
        </div>
    )
}
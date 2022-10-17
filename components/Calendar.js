import classes from './Calendar.module.css'
import Image from "next/image";

export default function Calender({date}) {
    return (
        <div className={classes.container}>
            <div className={classes.month_year}>
                <div className={classes.left_ar}>
                    <Image src="/images/svg/left.svg" alt='arrow left' width={32} height={32} />
                </div>
                <div className={classes.month_year_title}>
                    {date.toLocaleDateString('en-US', {month: 'long'}) + ' ' + date.toLocaleDateString('en-US', {year: 'numeric'})}
                </div>
                <div className={classes.right_ar}>
                    <Image src="/images/svg/right.svg" alt='arrow right' width={32} height={32} />
                </div>
            </div>
            <div className={classes.weekdays}>
                <div className={classes.weekday}>S</div>
                <div className={classes.weekday}>S</div>
                <div className={classes.weekday}>M</div>
                <div className={classes.weekday}>T</div>
                <div className={classes.weekday}>W</div>
                <div className={classes.weekday}>T</div>
                <div className={classes.weekday}>F</div>
            </div>
        </div>
    )
}
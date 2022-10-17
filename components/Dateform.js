import classes from './Dateform.module.css'
import Image from 'next/image'

import Pie from './Pie'

export default function Dateform({done, date, handleCalendar}) {
    return (
        <div className={classes.container}>
            <div className={classes.date}>
                <div>
                    <Image src="/images/svg/ar-left.svg" alt='arrow left' width={32} height={32} />
                </div>
                <div className={classes.day_and_month} onClick={handleCalendar}>
                    <p className={classes.day}>{date.toLocaleDateString('en-US', { weekday: 'long' })}</p>
                    <p className={classes.month}>{date.toLocaleDateString('en-US', {month: 'short'}) + ' / ' + date.toLocaleDateString('en-US', {day: 'numeric'})}</p>
                </div>
                <div>
                    <Image src="/images/svg/ar-right.svg" alt='arrow right' width={32} height={32} />
                </div>
            </div>
            <Pie percentage={done} colour="#F2600C" />
        </div>
    )
}
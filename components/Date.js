import classes from './Date.module.css'
import Image from 'next/image'

import Pie from './Pie'

export default function Date({done}) {
    return (
        <div className={classes.container}>
            <div className={classes.date}>
                <div>
                    <Image src="/images/svg/ar-left.svg" alt='arrow left' width={32} height={32} />
                </div>
                <div className={classes.day_and_month}>
                    <p className={classes.day}>Saturday</p>
                    <p className={classes.month}>Sep / 24</p>
                </div>
                <div>
                    <Image src="/images/svg/ar-right.svg" alt='arrow right' width={32} height={32} />
                </div>
            </div>
            <Pie percentage={done} colour="#F2600C" />
        </div>
    )
}
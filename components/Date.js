import classes from './Date.module.css'
import Image from 'next/image'

export default function Date() {
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
            <div>
                <Image src="/images/png/persent.png" alt='plus' width={70} height={70} />
            </div>
        </div>
    )
}
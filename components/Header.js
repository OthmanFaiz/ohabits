import classes from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <div className={classes.container}>
            <div>
                <Image src="/images/svg/bm.svg" alt="menu" width={24} height={24} />
            </div>
            <div className={classes.logo}>Ohabits</div>
            <div>
                <Image src="/images/svg/profile.svg" alt="bell" width={24} height={24} />
            </div>
        </div>
    )
}
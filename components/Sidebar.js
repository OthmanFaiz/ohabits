import Image from 'next/image';
import classes from './Sidebar.module.css';
import Link from 'next/link';

export default function Sidebar({handleSidebar}) {
    return (
        <>
            <div className={classes.sidebar}>
                <div className={classes.sidebar_box}>
                    <Image src="/images/svg/home.svg" alt="home" width={32} height={32} />
                    <div className={classes.sidebar_box_title}>Home</div>
                </div>
                <div className={classes.sidebar_box}>
                    <Image src="/images/svg/view.svg" alt="view" width={32} height={32} />
                    <div className={classes.sidebar_box_title}>View mode</div>
                </div>
                <Link href="/habits">
                <div className={classes.sidebar_box}>
                    <Image src="/images/svg/hashtag.svg" alt="habits" width={32} height={32} />
                    <div className={classes.sidebar_box_title}>Habits</div>
                </div>
                </Link>
                <div className={classes.sidebar_box}>
                    <Image src="/images/svg/export.svg" alt="workout" width={32} height={32} />
                    <div className={classes.sidebar_box_title}>Workout plans</div>
                </div>
                <div className={classes.sidebar_box}>
                    <Image src="/images/svg/profile1.svg" alt="profile" width={32} height={32} />
                    <div className={classes.sidebar_box_title}>Profile page</div>
                </div>
                <div className={classes.sidebar_box}>
                    <Image src="/images/svg/settings.svg" alt="settings" width={32} height={32} />
                    <div className={classes.sidebar_box_title}>Settings</div>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.sign_io}>
                    sign out
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.social}>
                    <Image src="/images/svg/instagram.svg" alt="instagram" width={32} height={32} />
                    <Image src="/images/svg/twitter.svg" alt="twitter" width={32} height={32} />
                    <Image src="/images/svg/github.svg" alt="github" width={32} height={32} />
                </div>
            </div>
            <div className={classes.myname}>
                designed by Othman alomair
            </div>
        </>
    )
}
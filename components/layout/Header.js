import classes from './Header.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [loggedIn, setLoggedIn] = useState(true);
    
    return (
        <div className={classes.container}>
            <div>
                <Image src="/images/svg/bm.svg" alt="menu" width={24} height={24} />
            </div>
            <div className={classes.logo}>Ohabits</div>
            <div>
                {loggedIn ? (
                    <div className={classes.logged_in}>
                        <div className={classes.profile_image}>
                            <Image src="/images/othman.jpg" objectFit="cover" alt="user" width={36} height={36} />
                        </div>
                        <div className={classes.profile_name}>Othman Alomair</div>
                    </div>
                ) : (
                    <Image src="/images/svg/profile.svg" alt="profile" width={24} height={24} />
                )}
                
            </div>
        </div>
    )
}
import classes from './Header.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Header({handleSidebar}) {
    const [loggedIn, setLoggedIn] = useState(true);
    
    return (
        <div className={classes.container}>
            <div onClick={handleSidebar}>
                <Image src="/images/svg/bm.svg" alt="menu" width={24} height={24} />
            </div>
            <div className={classes.logo}>Ohabits</div>
            <div>
                {loggedIn ? (
                    <div className={classes.logged_in}>
                            <Image className={classes.profile_image} src="/images/othman.jpg" objectFit="cover" alt="user" width={50} height={50} />
                        <div className={classes.profile_name}>Othman Alomair</div>
                    </div>
                ) : (
                    <Image src="/images/svg/profile.svg" alt="profile" width={24} height={24} />
                )}
                
            </div>
        </div>
    )
}
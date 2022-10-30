import classes from './Login.module.css';
import Image from 'next/image';

export default function Login() {
    return (
        <>
        <div className={classes.container}>
            <div className={classes.login_title}>
                <span>Login</span>
                <Image src='/images/svg/login.svg' alt='login' width={24} height={24} />
            </div>
        </div>

        <div className={classes.login_form}>
            <div className={classes.container}>
                <div className={classes.login_form_input}>
                    <Image src='/images/svg/mail.svg' alt='mail' width={24} height={24} />
                    <input className={classes.login_form_input_text} type="text" placeholder='Email' />
                </div>
                <div className={classes.login_form_input}>
                    <Image src='/images/svg/password.svg' alt='password' width={24} height={24} />
                    <input className={classes.login_form_input_text} type="password" placeholder='password' />
                </div>
                <button className={classes.login_form_button_primary}>
                    Sign In
                </button>
                <div className={classes.login_form_line}></div>
                <button className={classes.login_form_button}>
                    <Image src='/images/png/google.png' alt='google' width={29} height={27} />
                    <span className={classes.text_input}>Sign In with Google</span>
                </button>
                <button className={classes.login_form_button}>
                    <Image src='/images/png/apple.png' alt='apple' width={24} height={27.5} />
                    <span className={classes.text_input}>Sign In with Apple</span>
                </button>
                <button className={classes.login_form_button}>
                    <span className={classes.text_input}>Create Account</span>
                </button>
                <span className={classes.login_form_forgot}>Reset your password</span>
            </div>
        </div>
        </>
    )
}
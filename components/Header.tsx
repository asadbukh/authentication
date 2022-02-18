/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { syncBuiltinESMExports } from 'module'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



import styles from "./header.module.css"

const Header = () => {

    const { data: session, status } = useSession()

    return (
        <div className={styles.main_head}>
            <h1>next-auth-practice</h1>



            <div className={styles.navlinks}>
                <Link href="/protected">
                    <a className={styles.nav_link}>protected</a>
                </Link>
                <Link href="/aboutme">
                    <a className={styles.nav_link}>About</a>
                </Link>

                {!session &&
                    <Link href="/api/auth/signin">
                        <a className={styles.nav_link}>SignIn</a>
                    </Link>}

                {session && <Link href="/api/auth/signout">
                    <a className={styles.nav_link}>signout</a>
                </Link>}
                {session?.user &&
                    <img
                        src={`${session.user.image}`}
                        alt="this"
                        className={styles.user_img} />
                }
            </div>
        </div >
    )
}

export default Header
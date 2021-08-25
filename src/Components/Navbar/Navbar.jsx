import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav__main}>
        <div className={styles.nav}>
            <div className={styles.nav__navbar}>
            <img src="./images/hotels-logo1.png" alt="Hotels Logo"  />
                <div className={styles.nav__menus}>
                    <p>Country</p>
                    <p>INR</p>
                    <p>Help</p>
                    <p>Your Bookings</p>
                    <p>Signin</p>
            </div>
            </div>
            <div className={styles.nav__extrasLink}>
                <p>List your property</p>
                <p>Hotels.com Rewards</p>
            </div>
            </div>
            </div>
    )
}

export  {Navbar}

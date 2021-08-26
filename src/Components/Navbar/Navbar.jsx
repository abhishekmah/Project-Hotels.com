import React from 'react'
import styles from './Navbar.module.css'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className={styles.nav__main}>
        <div className={styles.nav}>
            <div className={styles.nav__navbar}>
            <img src="./images/hotels-logo1.png" alt="Hotels Logo"  />
                <div className={styles.nav__menus}>
                    <p> <img src="./images/india.png" alt="india icon"  width="15px"/> <IoMdArrowDropdown/></p>
                    <p>INR</p>
                    <p>Help</p>
                    <p><FaRegCalendarAlt/> Your Bookings</p>
                    <p>Sign in</p>
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

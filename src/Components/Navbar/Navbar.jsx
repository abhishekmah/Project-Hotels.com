import React from 'react'
import styles from './Navbar.module.css'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import {getData} from "../../Utils/localStorage";

const Links = styled(Link)`
text-decoration: none;
color: inherit;
`

const Navbar = () => {
    const isAuth = useSelector((state) => state.isAuth);
    let data = getData("data");
    const handleCountry = () => {
        console.log("clicked")
    }
    return (
        <div className={styles.nav__main}>
        <div className={styles.nav}>
            <div className={styles.nav__navbar}>
            <Links to="/"><img src="./images/hotels-logo1.png" alt="Hotels Logo"   height="33px"/></Links>
                <div  className={styles.nav__menus}>
                    <p onClick={handleCountry}> <img src="./images/india.png" alt="india icon" width="15px" /> <span className={ styles.nav__arroeDropdown}><IoMdArrowDropdown/></span></p>
                    <p>INR <span className={ styles.nav__arroeDropdown}><IoMdArrowDropdown/></span></p>
                    <p>Help <span className={ styles.nav__arroeDropdown}><IoMdArrowDropdown/></span></p>
                    <p><FaRegCalendarAlt/> &nbsp; Your Bookings</p>
                    <Links to="/signin"><p>{isAuth ? `${data[0].first} ${data[0].last}` : " Sign in"} </p></Links>
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

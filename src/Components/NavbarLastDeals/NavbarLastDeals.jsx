import React from 'react';
import styles from './NavbarLastDeals.module.css';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import {getData} from "../../Utils/localStorage";

const Navbar = () => {
    const isAuth = useSelector((state) => state.isAuth);
    let data = getData("data");
    return (
        <div className={styles.nav__main}>
        <div className={styles.nav}>
            <div className={styles.nav__navbar}>
            <Link to="/"><img src="./images/hotels-logo1.png" alt="Hotels Logo"  style={{ height:"45px",marginLeft: "80%"}}/></Link>
                <div className={styles.nav__menus}>
                    <p>Country</p>
                    <p>INR</p>
                    <p>Help</p>
                    <p>Your bookings</p>
                    <p>Create account</p>
                    <p><Link to="/signin">{isAuth ? `${data[0].first} ${data[0].last}` : " Sign in"} </Link></p>
            </div>
            </div>
            <hr style= {{backgroundColor: "#d32f2f"}}/>
            <div className={styles.nav__extrasLink}>
                <p>List your property</p>
                <p>Hotels.com Rewards</p>
            </div>
            </div>
            </div>
    )
}

export  {Navbar}

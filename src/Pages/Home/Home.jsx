import React from 'react'
import { CovidAd } from '../../Components/CovidAd/CovidAd'
import { HRLine } from '../../Components/HorizontalLine/HRLine'
import {Navbar} from '../../Components/Navbar/Navbar'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <CovidAd/>
            <HRLine />
            <Navbar />
            <div className={styles.home__backgroundImage}>
            <img src="https://a.cdn-hotels.com/cos/heroimage/homepage/INDIA.jpg?impolicy=fcrop&amp;w=1900&amp;h=425&amp;q=high" alt="" />
                <div className={styles.searchCard}>
                    <p>Where to?</p>
            </div>
            </div>

        </div>
    )
}

export  {Home}

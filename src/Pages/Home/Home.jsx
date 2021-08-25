import React from 'react'
import { CardSM } from '../../Components/CardSM/CardSM'
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
            <img src="./images/backgroundImg.png" alt="" />
                <div className={styles.searchCard}>
                    <p>Where to?</p>
            </div>
            </div>
            <div className={styles.home__body}>
                <div className={styles.home__Card}> 
                <CardSM/>
                <CardSM/>
                <CardSM/>
                <CardSM/>
                <CardSM/>
                <CardSM/>
                    </div>
            </div>
        </div>
        


    )
}

export  {Home}

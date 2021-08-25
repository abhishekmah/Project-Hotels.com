import React from 'react'
import styles from './CovidAd.module.css'
import {AiOutlineInfoCircle} from 'react-icons/ai'


const CovidAd = () => {
    return (
        <div className={styles.CovidAdMain}>
        <div className={styles.CovidAd}>
            
            
            <p> <AiOutlineInfoCircle/> Your safety is our priority</p>
            
            <p>See our travel guideline on COVID-19</p>
            </div>
            </div>
    )
}

export  {CovidAd}

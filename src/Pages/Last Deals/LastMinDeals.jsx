import React from 'react'
import styles from "./LastDeals.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function LastMinDeals(){
    const element = <FontAwesomeIcon icon={faSearch} />
    
    return (
        <div >
            <div className={styles.imgDiv}>
             <h1>Last Minute Deals</h1>
             <p>Book today and holiday tomorrow</p>
             <br />
             <div className={styles.date}>
              <h1>{element} Find a place to stay</h1>
              <input type="text" />
              <p>Enter a destination or property</p>
              <hr style={{width: "107%", marginLeft: -17, color: "white"}}/>
             </div>
             <br />
            </div>
        </div>
    )
}

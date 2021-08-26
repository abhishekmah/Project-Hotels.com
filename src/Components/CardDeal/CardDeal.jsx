import React from 'react'
import styles from "./CardDeal.module.css"

const CardDeal = ({children}) => {
    return (
        <div className={styles.details}>
            {children}
        </div>
    )
}

export default CardDeal

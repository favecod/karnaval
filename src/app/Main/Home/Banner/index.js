import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import { KeyboardArrowDown } from 'styled-icons/material'

const Banner = () => {
    return <div className={styles.banner} style={{backgroundImage: `url(${FILES.banner})`}}>
        <button className={classnames(styles.button, classes.pointer)}>
            <span>کجا میخوای بری؟</span>
            <span className={styles.arrowIcon}>
                <KeyboardArrowDown size='30'/>
            </span>
        </button>
    </div>
}

export default Banner
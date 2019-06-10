import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

// Icon
import { Calendar } from 'styled-icons/boxicons-regular'
import { Update } from 'styled-icons/material/'

const Header = () => {
    const name = 'بهاره فلاح'
    const job = 'نویسنده ارشد کارناوال'
    const publish = '08 بهمن 1397'
    const update = '08 بهمن 1397'
    return (
        <header className={styles.header}>
            <div className={classes.flexRowCenter}>
                <div style={{backgroundImage: `url(${FILES.userIcon})`}} className={classnames(styles.image, classes.imageCenter)} ></div>
                <div className={styles.names}>
                    <h4>{name}</h4>
                    <small className={classes.textMuted}>{job}</small>
                </div>
            </div>
            <div>
                <div className={classes.flexRowCenter}>
                    <Calendar size='20'/>
                    <span className={styles.details}>
                        <small className={styles.title}>انتشار</small>
                        <small className={classes.textMuted}>{publish}</small>
                    </span>
                    
                </div>
                <div className={classes.flexRowCenter}>
                    <Update size='20'/>
                    <span className={styles.details}>
                        <small  className={styles.title}>به روز رسانی</small>
                        <small className={classes.textMuted}>{update}</small>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header
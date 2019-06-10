import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

const Feature = ({icon,content}) => {
    return (
        <div className={styles.container}>
            <span className={styles.icon}>{icon}</span>
            <small>
                {content.map(item => (
                    <div key={`${Math.random() * 100000000}`}>
                        <span className={styles.title}>{item.title}:</span>
                        <span>{item.text}</span>
                    </div>
                ))}
            </small>
        </div>
    )
}

export default Feature
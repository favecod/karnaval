import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import defaultCardImage from 'Root/public/img/defaultCardImage.jpg'
import { KeyboardArrowLeft } from 'styled-icons/material'
import { Diamond } from 'styled-icons/boxicons-regular'

const Title = ({title}) => {
    return (
        <div
            className={classnames(styles.header, classes.flexColCenter)}
        >
            <hr className={styles.headerLine} />
            <h2 className={styles.headerTitle}>{title}</h2>
        </div>
    )
}


export default Title
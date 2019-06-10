import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import defaultCardImage from 'Root/public/img/defaultCardImage.jpg'
import { KeyboardArrowLeft } from 'styled-icons/material'
import { Diamond } from 'styled-icons/boxicons-regular'
import CONST from 'Root/constants'
import history from 'Root/history'

const ContainerCard = props => {
    return (
        <div
            className={classnames(styles.containerCard,props.className)}
            style={{ background: CONST.colors.green }}
        >
            {props.children}
        </div>
    )
}


export default ContainerCard
import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import helper from 'Root/helper'
import { Explore } from 'styled-icons/material'
import { UserCircle } from 'styled-icons/boxicons-solid'

const Buttons = () => {
    const [mobileScreen, setMobileScreen] = React.useState(
        helper.screenCheck()
    )

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setMobileScreen(helper.screenCheck())
        })
    })

    return (
        <div className={styles.buttons}>
            <span className={classnames(styles.button, classes.flexCenter)}>
                <Explore size='40' />
                {!mobileScreen && <span>نگارخانه</span>}
            </span>
            <span className={classnames(styles.button, classes.flexCenter)}>
                <UserCircle size='40' />
                {!mobileScreen && <span>حساب کاربری</span>}
            </span>
        </div>
    )
}

export default Buttons
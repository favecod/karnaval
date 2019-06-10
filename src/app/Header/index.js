import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Logo from './Logo'
import Search from './Search'
import Buttons from './Buttons'
import styles from './styles'
import classes from 'Root/styles/main'

const Header = props => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <div className={classes.flexRowCenter}>
                    <Search />
                    <Buttons />
                </div>
            </div>
        </header>
    )
}

export default Header
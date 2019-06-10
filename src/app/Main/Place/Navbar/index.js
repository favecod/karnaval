import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

import { Info, Directions, Message, Edit } from 'styled-icons/material'

const items = [
    { title: 'نقد و بررسی کارناوال', icon: <Edit size='40'/> },
    { title: 'مشخصات کلی', icon: <Info size='40'/> },
    { title: 'نقشه و مسیریابی', icon: <Directions size='40'/> },
    { title: 'کاربران', icon: <Message size='40'/> }
]

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={classnames(styles.items,classes.flexRowBetween)}>
                {items.map(item => (
                    <Nav key={item.title} title={item.title} icon={item.icon} />
                ))}
            </ul>
        </nav>
    )
}

const Nav = props => {
    return (
        <li className={classnames(styles.item, classes.flexColCenter)}>
            <span className={styles.icon}>{props.icon}</span>
            <span>{props.title}</span>
        </li>
    )
}

export default Navbar
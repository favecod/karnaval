import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import { Link } from 'react-router-dom'
const Logo = () => {
    return (
        <Link to='/'>
            <img className={styles.logo} src={FILES.logo} />
        </Link>
    )
}

export default Logo
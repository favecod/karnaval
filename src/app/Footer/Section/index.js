import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'

const Section = ({children, border}) => {
    return (
        <section className={classnames(styles.section, border && styles.border)}>{children}</section>
    )
}

export default Section
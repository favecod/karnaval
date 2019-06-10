import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

import ContainerCard from 'Root/elements/ContainerCard'
import Header from './Header'

const Comments = () => {
    return (
        <div className={styles.container}>
            <ContainerCard className={styles.containerCard}>
                <Header/>
            </ContainerCard>
        </div>
    )
}

export default Comments

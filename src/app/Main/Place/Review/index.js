import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

import Title from 'Root/elements/Title'
import ContainerCard from 'Root/elements/ContainerCard'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Review = ({ description, subtitle}) => {
    return (
        <div className={styles.container}>
            <Title title='نقد و برسی تخصصی کارناوال'/>
            <ContainerCard className={styles.containerCard}>
                <Header subtitle={subtitle}/>
                <Content description={description}/>
                <Footer subtitle={subtitle}/>
            </ContainerCard>
        </div>
    )
}

export default Review

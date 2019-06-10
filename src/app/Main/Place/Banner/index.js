import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import { MapMarkerAlt } from 'styled-icons/fa-solid'
import { ChevronLeft } from 'styled-icons/fa-solid'
import Skeleton from 'react-loading-skeleton'

const Banner = ({title, image}) => {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div>
                {
                    title ? 
                        <h1 className={styles.title}>{title}</h1>
                        :
                    <div className={classes.flexColCenter}>
                        <Skeleton width={600} height={50} />
                        <Skeleton width={300} height={30} />
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Banner
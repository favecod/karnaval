import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const Content = ({description}) => {
    return (
        <div >
            {description ? 
            <p>
                {description}
            </p>:
                <SkeletonTheme >
                    <p>
                        <Skeleton count={4} />
                    </p>
                </SkeletonTheme>}
        </div>
    )
}

export default Content
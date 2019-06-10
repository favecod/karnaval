import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import helper from 'Root/helper'
import { Search } from 'styled-icons/octicons'

const SearchBox = () => {
    const [mobileScreen, setMobileScreen] = React.useState(helper.screenCheck())

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setMobileScreen(helper.screenCheck())
        })
    })
    return (
        <>
        {   mobileScreen ?
            <Search size='30' color='#777' />
            : 
            <div className={classnames(styles.container,classes.flexCenter)}>
                <input placeholder='جستجو در کارناوال' className={styles.input} />
                <Search size='20' color='#777' />
            </div>
        }
        </>
        
    )
}

export default SearchBox
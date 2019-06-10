import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import store from 'Root/store'
import { connect } from 'react-redux'
// Icon
import { Calendar } from 'styled-icons/boxicons-regular'
import { Update } from 'styled-icons/material/'
import Skeleton from 'react-loading-skeleton'

const Header = props => {
    const [text, setText] = React.useState(null)
    React.useEffect(() => {
        if (!text && props.subtitle){
            console.log(props.subtitle)
            setText(props.subtitle.split('/'))
        }
    })
    
    return (
        <header className={styles.header}>
            <div className={classes.flexRowCenter}>
                {text ? <div style={{backgroundImage: `url(${FILES.userIcon})`}} className={classnames(styles.image, classes.imageCenter)} ></div>
                    : <Skeleton circle={true} height={50} width={50} />}
                <div className={styles.names}>
                    <h4>{text ? text[0] : <Skeleton/> }</h4>
                    {text ? <small className={classes.textMuted}>{text[2]}</small> : <Skeleton width={75} />}
                </div>
            </div>
            <div>
                <div className={classes.flexRowCenter}>
                    <Calendar size='20'/>
                    <span className={styles.details}>
                        <small className={styles.title}>انتشار</small>
                        {text ? <small className={classes.textMuted}>{text[1]}</small> : <Skeleton width={75} />}
                    </span>
                    
                </div>
                <div className={classes.flexRowCenter}>
                    <Update size='20'/>
                    <span className={styles.details}>
                        <small  className={styles.title}>به روز رسانی</small>
                        {text ? <small className={classes.textMuted}>{text[1]}</small> : <Skeleton width={75} />}
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header
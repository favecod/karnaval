import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

// Icon
import { Calendar } from 'styled-icons/boxicons-regular'
import { Update, ThumbUp, ThumbDown } from 'styled-icons/material/'
import Skeleton from 'react-loading-skeleton'

const Footer = props => {
    const [text, setText] = React.useState(null)
    React.useEffect(() => {
        if (!text && props.subtitle) {
            setText(props.subtitle.split('/'))
        }
    })
    const like = '18'
    const dislike = '14'
    return (
        <footer className={styles.footer}>
            {text ? <div style={{ backgroundImage: `url(${FILES.userIcon})` }} className={classnames(styles.image, classes.imageCenter)} ></div>
                : <Skeleton circle={true} height={75} width={75} />}
            <div className={styles.content}>
                {text ? <div className={styles.names}>
                    <h4 className={styles.name}>{text[0]}</h4>
                    <span className={styles.job}>
                        <span className={classes.textMuted} style={{ padding: '0 .3rem 0' }}>/</span>
                        <span className={classes.textMuted}>{text[2]}</span>
                    </span>
                </div>:
                <Skeleton />}
                <div className={styles.details}>
                    <span>
                        آیا این مطلب مفید بود؟
                    </span>
                    <span className={styles.buttons}>
                        <button className={styles.button}>
                            <small className={classes.textMuted}>{like}</small>
                            <span>
                                <ThumbUp size='15'/>
                            </span>
                        </button>
                        <button className={styles.button}>
                            <small className={classes.textMuted}>{dislike}</small>
                            <span>
                                <ThumbDown size='15' />
                            </span>
                        </button>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
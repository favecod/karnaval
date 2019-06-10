import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import defaultCardImage from 'Root/public/img/defaultCardImage.jpg'
import { KeyboardArrowLeft } from 'styled-icons/material'
import { Diamond } from 'styled-icons/boxicons-regular'
import history from 'Root/history'

const Card = ({data}) => {
    const [diamond, setDiamond] = React.useState([0,0,0,0,0])
    React.useEffect(() => {
        setDiamond(fillDiamond(data.diamond))
    },diamond)
    const fillDiamond = (number) => {
        let array = [0,0,0,0,0]
        for(let i = 0;i < number;i++) {
            array[i] = 1
        }
        return array
    }
    const handleLink = () => {
        history.push(`/place/${data.index}`)
    }
    return (
        <div onClick={handleLink} className={styles.card}>
            <div className={classnames(classes.imageCenter,styles.imageCard)} style={{backgroundImage: `url(${data.image})`}}>
                <div className={styles.imageTitle}>
                    <span className={styles.title}>{data.imageTitle}</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <img src={FILES.clockIcon} className={styles.clockIcon} />
                    <span>
                        <span style={{padding: '0 .2rem'}}>{data.start}</span>
                        تا
                        <span style={{padding: '0 .2rem'}}>{data.end}</span>
                        ساعت
                    </span> 
                </div>
                <div className={styles.text}>
                    <img src={FILES.dollarIcon} className={styles.dollarIcon} />
                    <span>
                        {data.price}
                        تومان
                    </span>  
                </div>
                <div className={classes.flexRowBetween}>
                    <div>
                        <span className={styles.score}>{data.diamond}</span>
                        <span>
                            {diamond.map(item => (
                                item ? 
                                    <Diamond key={`${Math.random() * 100000000}`} size='20' color='#3ab793' /> 
                                    : 
                                    <Diamond key={`${Math.random() * 100000000}`} size='20' />
                            ))}
                        </span>
                    </div>
                    
                    <button className={classnames(classes.r3, styles.button, classes.button,classes.flexCenter)}>
                        <span>جزئیات</span>  
                        <KeyboardArrowLeft size='16'/>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Card
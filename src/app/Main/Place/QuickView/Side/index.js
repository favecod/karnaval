import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'

// Icon
import { WeatherPartlySunny } from 'styled-icons/typicons'
import { KeyboardArrowDown, KeyboardArrowUp } from 'styled-icons/material'
import { Diamond, LeftArrowAlt } from 'styled-icons/boxicons-regular'

const Side = () => {
    const lowTemp = 20;
    const highTemp = 30;
    const currentTemp = 28;
    return (
        <div className={styles.container}>
            <div className={classes.flexRowBetween}>
                <WeatherPartlySunny size='100' color='#999' />
                <div className={styles.temps}>
                    <div>
                        <small>{highTemp}°</small>
                        <KeyboardArrowUp size='20' />
                    </div>
                    <div>
                        <small>{lowTemp}°</small>
                        <KeyboardArrowDown size='20' />
                    </div>
                    <div className={classes.flexRowBetween}>
                        <div className={classes.textMuted}>دمای کنونی</div>
                        <div className={styles.currentTemp}>
                            {currentTemp}°
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Score diamond={3} title='امتیاز نقد و بررسی کارناوال' color='#3ab793' />
                <Score diamond={3} title='امتیاز نقد و بررسی کاربران' color='#3a5abd' />
            </div>
        </div>
    )
}

const Score = props => {
    const [diamond, setDiamond] = React.useState([0, 0, 0, 0, 0])
    React.useEffect(() => {
        setDiamond(fillDiamond(props.diamond))
    }, diamond)
    const fillDiamond = number => {
        let array = [0, 0, 0, 0, 0]
        for (let i = 0; i < number; i++) {
            array[i] = 1
        }
        return array
    }
    return (
        <div className={styles.score}>
            <Diamond size='50' color={props.color}/>
            <div>
                <small>{props.title}</small>
                <div>
                    {diamond.map(item => (
                        item ? 
                            <Diamond key={`${Math.random() * 100000000}`} size='20' color={props.color} /> 
                            : 
                            <Diamond key={`${Math.random() * 100000000}`} size='20' />
                    ))}
                </div>
            </div>
            <div style={{padding: '0 .5rem'}}>
                <LeftArrowAlt size='30' color={props.color}/>
            </div>
        </div>
    )
}

export default Side
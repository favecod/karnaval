import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import Card from 'Root/elements/Card'
import Title from 'Root/elements/Title'

const Cards = ({title}) => {
    const [cards, setCards] = React.useState([])
    const card = {
        price: 1000,
        start: 2,
        end: 4,
        diamond: 3,
        imageTitle: 'جنگل'
    }
    React.useEffect(() => {
        for (let i = 0; i < 3; i++) {
            setCards(prevState => {
                return [...prevState, card]
            })
        }
    }, cards)
    return (
        <div className={styles.container}>
            <div className={classnames(styles.cards)}>
                <Title title={title}/>
                <div className={classnames(classes.flexCenter,styles.content)}>
                    {cards.map(card => (
                        <Card
                            key={`${Math.random() * 100000000}`}
                            data={card}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards
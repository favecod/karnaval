import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import Card from 'Root/elements/Card'
import Title from 'Root/elements/Title'
import API from 'Root/api'
import Skeleton from 'react-loading-skeleton'


const Cards = ({title, start, end}) => {
    const [cards, setCards] = React.useState(null)
    const card = {
        price: 1000,
        start: 2,
        end: 4,
        diamond: 3,
        imageTitle: 'جنگل',
    }
    React.useEffect(() => {
        let images = [], titles = [], c = []
        if(!cards) {
            for (let i = start; i <= end; i++) {
                API.recent.image(i).then(res => {
                    images[i] = res.data
                    
                })
            }
            for (let i = start; i <= end; i++) {
                API.recent.title(i).then(res => {
                    titles[i] = res.data
                    if (titles.length > end) {
                        for (let i = start; i <= end; i++) {
                            c[i] = {
                                ...card,
                                image: images[i],
                                imageTitle: titles[i],
                                index: i,
                            }
                            if (i == end) {
                                setCards([...c])
                            }
                        }
                    }
                })
            }

            
        }
    })
    return (
        <div className={styles.container}>
            <div className={classnames(styles.cards)}>
                <Title title={title}/>
                <div className={classnames(classes.flexCenter,styles.content)}>
                    {cards ? cards.map(card => (
                        <Card
                            key={`${Math.random() * 100000000}`}
                            data={card}
                        />
                    )):
                    <Skeleton width={1000} height={250}/>}
                </div>
            </div>
        </div>
    )
}

export default Cards
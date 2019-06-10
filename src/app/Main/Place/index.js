import React from 'react'
import styles from './styles'

import Banner from './Banner'
import Navbar from './Navbar'
import QuickView from './QuickView'
import Review from './Review'

import API from 'Root/api'
import placeData from 'Root/actions/place/data'

const Place = props => {
    const id = props.match.params.id
    const [title, setTitle] = React.useState(null)
    const [image, setImage] = React.useState(null)
    // const [address] = React.useState(['آسیا', 'ایران', 'استان هرمزگان', 'قشم'])
    const [description, setDescription] = React.useState(null)
    const [subtitle, setSubtitle] = React.useState(null)
    React.useEffect(() => {
        if (!title) {
            API.recent.title(id).then(res => {
                setTitle(res.data)
            })
            API.recent.image(id).then(res => {
                setImage(res.data)
            })
            API.recent.subtitle(id).then(res => {
                setSubtitle(res.data)
            })
            API.recent.description(id).then(res => {
                setDescription(res.data)
            })
        }
    })


    return (
        <div className={styles.container}>
            <Banner title={title} image={image} />
            <Navbar />
            <Review description={description} subtitle={subtitle} />
            <QuickView />
        </div>
    )
}

export default Place
import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'
import API from 'Root/api'
import Skeleton from 'react-loading-skeleton'


const Logo = () => {
    const [logo, setLogo] = React.useState(null)
    React.useEffect(() => {
        if(!logo) {
            API.footer.logo().then(res => {
                setLogo(res.data)
            })
        }
    })

    
    return (
        <>
        {logo ?
            <Link to='/'>
                <img className={styles.logo} src={logo} />
            </Link>
        :
        <Skeleton/>}
        </>
    )
}

export default Logo
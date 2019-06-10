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
        <Link to='/'>
        {logo ?
            
                <img className={styles.logo} src={logo} />
            
        :
        <Skeleton width={150} height={70}/>}
        </Link>
    )
}

export default Logo
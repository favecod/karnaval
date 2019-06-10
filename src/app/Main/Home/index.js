import React from 'react'
import styles from './styles'
import FILES from 'Root/constants/files'

import Banner from './Banner'
import Navbar from './Navbar'
import Cards from './Cards'
import Features from './Features'
import { apiURL,headers } from 'Root/config'

const Home = () => {
    return <>
        <Banner/>
        <Navbar/>
        <Features/>
        <Cards title='تازه های کارناوال' start={0} end={3}/>
        <Cards title='تازه های کارناوال' start={4} end={7}/>
        <Cards title='تازه های کارناوال' start={8} end={9}/>
    </>
}

export default Home
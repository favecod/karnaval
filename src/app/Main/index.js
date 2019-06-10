import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Routes
import Home from './Home'
import Place from './Place'

const Main = () => {
    return(
        <Switch>    
            <>
                <Route exact path='/' component={Home}/>
                <Route exact path='/place/:id' component={Place}/>
            </>
        </Switch>
    )
}

export default Main
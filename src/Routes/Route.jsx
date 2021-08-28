import React from 'react'
import { Switch,Route} from 'react-router-dom'
import { Signin } from '../Pages/Auth/Signin'
import { Home } from '../Pages/Home/Home'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" > <Home/> </Route>
                <Route path="/signin" > <Signin/> </Route>
                <Route path="/signup" > </Route>
            </Switch>
            
        </div>
    )
}

export  {Routes}

import React from 'react'
import { Switch,Route} from 'react-router-dom'
import { Signin } from '../Pages/Auth/Signin'
import { Signup } from '../Pages/Auth/Signup'
import { Home } from '../Pages/Home/Home'
import LastMinDeals from '../Pages/LastDeals/LastMinDeals'
import {Payment} from '../Pages/Payment/Payment'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" > <Home/> </Route>
                <Route path="/signin" > <Signin/> </Route>

                <Route path="/signup" > <Signup/> </Route>
                <Route path="/payment" > <Payment/> </Route>

                <Route path="/lastMinDeals" > <LastMinDeals/></Route>

            </Switch>
            
        </div>
    )
}

export  {Routes}

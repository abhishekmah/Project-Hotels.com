import React from 'react'
import { Switch,Route} from 'react-router-dom'
import { SigninPage } from '../Pages/Auth/SigninPage'
import { Signup } from '../Pages/Auth/Signup'
import { Home } from '../Pages/Home/Home'
import LastMinDeals from '../Pages/LastDeals/LastMinDeals'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" > <Home/> </Route>
                <Route path="/signin" > <SigninPage/> </Route>
                <Route path="/signup" > <Signup/> </Route>
                <Route path="/lastMinDeals" > <LastMinDeals/></Route>
            </Switch>
            
        </div>
    )
}

export  {Routes}

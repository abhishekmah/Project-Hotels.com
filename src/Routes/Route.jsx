import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Signin } from '../Pages/Auth/Signin'
import { Signup } from "../Pages/Auth/Signup";
import { Home } from "../Pages/Home/Home";
import LastMinDeals from "../Pages/LastDeals/LastMinDeals";
import { Payment } from "../Pages/Payment/Payment";
import { SigninPage } from "../Pages/Auth/SigninPage";
import { SearchResultPage } from "../Pages/SearchResult/SearchResultPage";
import Props from "../Pages/Perfect Propts/Props";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/lastMinDeals">
          <LastMinDeals />
        </Route>
        <Route path={`/hotel/:hotelId`}>
          <Props />
        </Route>
        <Route path="/search/:query">
          <SearchResultPage />
        </Route>
        <Route path="/signup">
         
          <Signup />
        </Route>
        <Route path="/payment">
        
          <Payment />
        </Route>

        <Route path="/lastMinDeals">
         
          <LastMinDeals />
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };

import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import ManageAccount from './ManageAccount';
import CustomerDashboard from './CustomerDashboard';
import ManageFoodtrucks from './OwnerDashboard';
import AddFoodTruck from './AddFoodTruck';
import App from "./App"


export default function RouterConfig() {

/*
Here we define the route path and its corresponding components
*/
   return (
       <BrowserRouter>
           <Switch>
               <Route exact path="/" component={App} />
               <Route path="/login" component={Login}/>
               <Route path="/register" component={Register}/>
               <Route path="/about" component={About}/>
               <Route path="/account" component={ManageAccount}/>
               <Route path="/dashboard/customer" component={CustomerDashboard}/>
               <Route path="/dashboard/owner" component={ManageFoodtrucks}/>
               <Route path="/addfoodtruck" component={AddFoodTruck}/>
           </Switch>
       </BrowserRouter>
   );
}

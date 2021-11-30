import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import ManageAccount from './ManageAccount';
import CustomerDashboard from './CustomerDashboard';
import OwnerDashboard from './OwnerDashboard';
import AddFoodTruck from './AddFoodTruck';
import ManageFoodTruck from './ManageFoodTruck';
import ViewCustomer from './ViewCustomer/ViewCustomer';
import ViewFoodTruck from './ViewFoodTruck';
import Profile from './Profile';
import App from "./App"
import ManageRoutes from './ManageRoutes';
import ReviewTruck from './ReviewTruck';
import SearchFoodTruck from './CustomerDashboard/SearchFoodTrucks';
import GuestDashboard from './GuestDashboard/GuestDashboard';


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
               <Route path="/profile" component={Profile}/>
               <Route path="/dashboard/customer" component={CustomerDashboard}/>
               <Route path="/dashboard/owner" component={OwnerDashboard}/>
               <Route path="/dashboard/guest" component={GuestDashboard}/>
               <Route path="/addfoodtruck" component={AddFoodTruck}/>
               <Route path="/managefoodtruck" component={ManageFoodTruck}/>
               <Route path="/viewcustomer" component={ViewCustomer}/>
               <Route path="/viewfoodtruck" component={ViewFoodTruck}/>
               <Route path="/manageroutes" component={ManageRoutes}/>
               <Route path="/reviewtruck" component={ReviewTruck}/>
               <Route path="/searchfoodtruck" component={SearchFoodTruck}/>
           </Switch>
       </BrowserRouter>
   );
}

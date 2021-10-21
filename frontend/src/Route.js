import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import App from "./App"
import TestApp from "./TestComponent"


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
               <Route path="/test" component={TestApp}/>
           </Switch>
       </BrowserRouter>
   );
}

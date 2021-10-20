import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouterConfig from "./Route";

/*
This function used to directly load App.js to the root element. Now it has been modified to use the router configuration defined above.
*/
ReactDOM.render(
 <div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
      <li><a href="/about">About</a></li>
    </ul>
    <RouterConfig/>
 </div>,
  
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

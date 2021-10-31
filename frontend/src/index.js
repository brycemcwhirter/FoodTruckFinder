import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from "./components/Route";
import 'bootstrap/dist/css/bootstrap.min.css';


/*
This function used to directly load App.js to the root element. Now it has been modified to use the router configuration defined above.
*/
ReactDOM.render(
 <div>
    <RouterConfig/>
 </div>,
  
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

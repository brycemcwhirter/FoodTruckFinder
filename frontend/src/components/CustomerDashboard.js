import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class CustomerDashboard extends Component {
    
   handleSubmit(event) {
        alert("Updated");

   }
   componentDidMount() {
   }
   render() {
       return (
            <div>
            <NavbarLoggedIn/>
            <header2>
            <div className="wrapper">
                <div className="left">
            <div id="sidebar" className="sidebar">
                <h2>Sidebar</h2><br></br>
                <h5>Recommended Food Trucks</h5>
                <ul class="list-group" style={{color: 'darkgreen'}}>
                    <li class="list-group-item"><a href="/account">Option 1</a></li>
                    <li class="list-group-item"><a href="/account">Option 2</a></li>
                    <li class="list-group-item"><a href="/account">Option 3</a></li>
                    <li class="list-group-item"><a href="/account">Option 4</a></li>
                    <li class="list-group-item"><a href="/account">Option 5</a></li>
                </ul>
            </div>
            </div>
            <div id="content" className="center">
            <h2>Customer Dashboard</h2>
            <header className="App-header">
            <div className="formBackground" style={{width: '75%'}}><br></br>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search Foodtrucks" aria-label="Search"/>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form><br></br>
            <div className="tablebg" style={{color: 'black'}}>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Address</th>
                <th scope="col">Hours</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Waco Chi</th>
                <td>Drinks</td>
                <td>123 18th Av</td>
                <td>11am - 9pm</td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                </tr>
            </tbody>
            </table></div>
            </div>
            </header>
            </div>
            </div>
            </header2>
           </div>
           );
   }
}
export default CustomerDashboard;
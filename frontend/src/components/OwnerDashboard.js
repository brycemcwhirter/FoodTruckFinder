import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class OwnerDashboard extends Component {
    
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <h2>Owner Dashboard</h2>
            <header className="App-header" style={{width: '60%'}}>
            <div className="formBackground"><br></br>
            <div style={{textAlign: "right"}}><small className="muted">Add a Food Truck? <a href="/addtruck">Click Here</a></small></div>
            <h4>Your Food Trucks</h4>
            <div className="tablebg" style={{color: 'black'}}>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Address</th>
                <th scope="col">Hours</th>
                <th scope="col">Rating</th>
                <th scope="col">Operating</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Waco Chi</th>
                <td>Drinks</td>
                <td>123 18th Av</td>
                <td>11am - 9pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                <td>Yes</td>
                <td><button class="btn btn-outline-primary btn-sm">Edit</button></td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
            </header>
            </header2>
           </div>
           );
   }
}
export default OwnerDashboard;
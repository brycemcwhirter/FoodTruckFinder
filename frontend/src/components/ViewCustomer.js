import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ViewCustomer extends Component {
    
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
            <h2>Customer Details</h2>
            <header className="App-header" style={{width: '60%'}}>
            <div className="formBackground"><br></br>
            <h5>Subscribed Food Trucks</h5>
            <h5>Food Truck Reviews</h5>
            </div>
            </header>
            </header2>
           </div>
           );
   }
}
export default ViewCustomer;
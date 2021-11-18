import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ViewFoodTruck extends Component {
    
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
            <div className="wrapper">
            <div id="sidebar" className="sidebar left">
                <br></br><h3>Food Truck Sidebar</h3><br></br>
                <h5>Basic Details</h5>
                <ul class="list-group" style={{color: 'black'}}>
                    <li class="list-group-item ">Name</li>
                    <li class="list-group-item">Type</li>
                    <li class="list-group-item">Operation Hours</li>
                    <li class="list-group-item">Price</li>
                </ul><br></br>
                <h5>Current Subscribers</h5>
            </div>
            <div id="content" className="center">
            <header className="App-header">
            <div className="formBackground" style={{width: '75%'}}><br></br>
            <h2 style={{textAlign: "center"}}>Food Truck Details</h2><br></br>
            <button class="btn btn-secondary btn-sm" style={{width: "15%"}}>Current Menu</button>
            <button class="btn btn-secondary btn-sm" style={{width: "15%"}}>Create a Review</button>
            
            <h5 style={{textAlign: "center"}}>Reviews</h5>
            </div>
            
            </header>
            </div>
            </div>
            </header2>
           </div>
           );
   }
}
export default ViewFoodTruck;
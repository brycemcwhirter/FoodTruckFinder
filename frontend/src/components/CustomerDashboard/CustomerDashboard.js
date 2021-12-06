import React, { Component } from 'react';
import '../../Dashboard.css';
import NavbarLoggedIn from '../NavBarLoggedIn';



/* import Dashboard Components*/
import Table from './CustomerTable'
import GoogleMapsTest from './GoogleMaps'



class CustomerDashboard extends Component {
    

   handleSubmit(event) {
        alert("Test");
   }

   
    componentDidMount() {
        localStorage.setItem("ValidSearch", 0);
    }
   

   render() {
       
       return (
           <div className="backgroundDashboard">
            <NavbarLoggedIn/>

            <div class="container-fluid">

            <div class="row justify-content-center header-for-dashboard">
                <h1>Dashboard</h1>
            </div>


            <div class="row justify-content-center table-map-style">

                <div class="col">
                    <Table/>
                </div>
                <div class="col-6">
                    <GoogleMapsTest/>
                </div>     
            </div>  

            <div>
                
            </div>
            

            </div>
            </div>
           );
   }
}


export default CustomerDashboard;


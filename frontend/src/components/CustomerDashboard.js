import React, { Component } from 'react';
import '../Dashboard.css';
import NavbarLoggedIn from './NavBarLoggedIn';



/* import Dashboard Components*/
import Table from './CustomerDashboard/CustomerTable'
import GoogleMaps from './CustomerDashboard/GoogleMaps'



class CustomerDashboard extends Component {
    

   handleSubmit(event) {
        alert("Test");
   }

   
    componentDidMount() {
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
                    <GoogleMaps/>
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


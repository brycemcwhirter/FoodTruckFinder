import React, { Component } from 'react';
import '../Dashboard.css';
import NavbarLoggedIn from './NavBarLoggedIn';


/* import Dashboard Components*/
import Sidebar from './DashboardComponents/Sidebar'
import SearchFoodTruck from './DashboardComponents/SearchFoodTrucks';
import Table from './DashboardComponents/Table'
import GoogleMaps from './DashboardComponents/GoogleMaps'

class CustomerDashboard extends Component {
    state = {
        currAccount: [],
        foodtrucks: []
    };    

   handleSubmit(event) {
        alert("Updated");
   }

   
   async componentDidMount() {
        /*const acctresponse = await fetch('currentaccount');          // get account info (i.e. food preference and budget)
        const acctbody = await acctresponse.json();
        const response = await fetch('recommendedTrucks', acctbody); // send account info to backend to get 5 recommended trucks
        const body = await response.json();
        this.setState({ foodtrucks: body, currAccount: acctbody});*/
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

            

            </div>
            </div>
           );
   }
}

export default CustomerDashboard;

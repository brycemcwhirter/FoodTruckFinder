import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';


/* import Dashboard Components*/
import Sidebar from './DashboardComponents/Sidebar'
import SearchFoodTruck from './DashboardComponents/SearchFoodTrucks';
import Table from './DashboardComponents/Table'
import GoogleMaps from './DashboardComponents/GoogleMaps'



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

            <div class="row">
                <div class="col-md-6 border"><Table/></div>
                <div class="col-md-6 border"><GoogleMaps/></div>
            </div>


            {/*
             <Table/>
            <GoogleMaps/>
            */}
           
                
           </div>
           );
   }
}

export default CustomerDashboard;

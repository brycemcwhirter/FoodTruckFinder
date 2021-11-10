import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';


/* import Dashboard Components*/
import Sidebar from './DashboardComponents/Sidebar'
import SearchFoodTruck from './DashboardComponents/SearchFoodTrucks';
import Table from './DashboardComponents/Table'
import GoogleMaps from './DashboardComponents/GoogleMaps'

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

                <div class="row">
                    <div class="col">
                        <Table/>
                    </div>
                    <div class="col">
                        <GoogleMaps/>
                    </div>
                </div>
                
            </header2>
           </div>
           );
   }
}

export default CustomerDashboard;

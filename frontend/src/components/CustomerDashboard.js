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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <div className="wrapper">
                    <Sidebar/>
                    <div id="content" className="center">
            <header className="App-header">
            <h2 style={{textAlign: "center"}}>Customer Dashboard</h2><br></br>

                <div className="formBackground" style={{width: '75%'}}><br></br>
                        <SearchFoodTruck/>
                        <Table/>
                </div>

                <GoogleMaps/>
                
            </header>
            </div>
            </div>
            </header2>
           </div>
           );
   }
}

export default CustomerDashboard;

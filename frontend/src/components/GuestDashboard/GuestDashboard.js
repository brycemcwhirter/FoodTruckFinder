import React, { Component } from 'react';
import '../../Dashboard.css';
import AppNavbar from '../Navbar';



/* import Dashboard Components*/
import GuestTable from './GuestTable';
import GoogleMapsGuest from './GuestMap'



class GuestDashboard extends Component {
    

   handleSubmit(event) {
        alert("Test");
   }

   
    componentDidMount() {
        localStorage.setItem("Role", "Guest");
    }
   

   render() {
       if (localStorage.getItem("UserID") != null){
            alert("You must be logged out to access this page");
            this.props.history.push("/dashboard/customer");
       }
       
       return (
           <div className="backgroundDashboard">
            <AppNavbar/>

            <div class="container-fluid">

            <div class="row justify-content-center header-for-dashboard">
                <h1>Guest Dashboard</h1>
            </div>


            <div class="row justify-content-center table-map-style">

                <div class="col">
                    <GuestTable/>
                </div>
                <div class="col-6">
                    <GoogleMapsGuest/>
                </div>     
            </div>  

            <div>
                
            </div>
            

            </div>
            </div>
           );
   }
}


export default GuestDashboard;


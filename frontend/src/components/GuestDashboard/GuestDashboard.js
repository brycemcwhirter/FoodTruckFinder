import React, { Component } from 'react';
import '../../Dashboard.css';
import AppNavbar from '../Navbar';



/* import Dashboard Components*/
import GuestTable from './GuestTable';
import GoogleMaps from '../CustomerDashboard/GoogleMaps'



class GuestDashboard extends Component {
    

   handleSubmit(event) {
        alert("Test");
   }

   
    componentDidMount() {
    }
   

   render() {
       
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


export default GuestDashboard;


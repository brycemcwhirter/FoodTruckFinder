import React, { Component } from 'react';
import '../../Dashboard.css';
import NavbarLoggedIn from '../NavBarLoggedIn';



/* import Dashboard Components*/
import Table from './CustomerTable'
import GoogleMapsTest from './GoogleMaps'

class CustomerDashboard extends Component {
<<<<<<< HEAD
=======
    state = {
        currAccount: [],
        foodtrucks: []
    };    
>>>>>>> 6504e45f8541440bc4e03def5af67e0e0c0de2c0


    handleSubmit(event) {
        alert("Test");
    }


<<<<<<< HEAD
=======
   

>>>>>>> 6504e45f8541440bc4e03def5af67e0e0c0de2c0
    componentDidMount() {
        localStorage.setItem("ValidSearch", 0);
    }


    render() {

        return (
            <div className="backgroundDashboard">
                <NavbarLoggedIn/>

                <div class="container-fluid">

<<<<<<< HEAD
                    <div class="row justify-content-center header-for-dashboard">
                        <h1>Dashboard</h1>
                    </div>

=======
            <div class="row justify-content-center table-map-style">
                <div class="col-6">
                    <Table/>
                </div>
                <div class="col-6">
                    <GoogleMapsTest/>
                </div>     
            </div>  
>>>>>>> 6504e45f8541440bc4e03def5af67e0e0c0de2c0

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
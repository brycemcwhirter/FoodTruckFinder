import React, { Component } from 'react';
import '../Dashboard.css';
import NavbarLoggedIn from './NavBarLoggedIn';
<<<<<<< HEAD



/* import Dashboard Components*/
import Table from './CustomerDashboard/CustomerTable'
import GoogleMaps from './CustomerDashboard/GoogleMaps'



class CustomerDashboard extends Component {
    
=======
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

/*
The form which was previously present in the App component has been moved to its own separate component.
*/
const mapStyles={
    width:'50%',
    height: '50%'
};
class CustomerDashboard extends Component {
    state = {
        stores: [{lat: 31.548, lng: -97.125},
            {latitude: 31.546, longitude: -97.120},
            {latitude: 31.551, longitude: -97.118}]
    }
>>>>>>> 3bdb781f4faa073494e441cd1eeaa41564e267f7

   handleSubmit(event) {
        alert("Updated");
   }
<<<<<<< HEAD

   
    componentDidMount() {
    }
   
=======
   displayMarkers = () => {
       return this.state.stores.map((store, index) => {
           return <Marker key={index} id={index} position={{
               lat: store.latitude,
               lng: store.longitude
           }}
                          onClick={() => console.log("You clicked me!")} />
       })
   }
>>>>>>> 3bdb781f4faa073494e441cd1eeaa41564e267f7

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
<<<<<<< HEAD
            

=======
                <div>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{lat: 31.548, lng: -97.125}}
                    >
                        {this.displayMarkers()}
                    </Map>
                </div>
            </header>
>>>>>>> 3bdb781f4faa073494e441cd1eeaa41564e267f7
            </div>
            </div>
           );
   }
}
<<<<<<< HEAD


export default CustomerDashboard;

=======
export default GoogleApiWrapper({
    apiKey:('API_KEY')
})(CustomerDashboard);
>>>>>>> 3bdb781f4faa073494e441cd1eeaa41564e267f7

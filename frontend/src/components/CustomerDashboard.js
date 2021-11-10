import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

/* import Dashboard Components*/
import Sidebar from './DashboardComponents/Sidebar'
import SearchFoodTruck from './DashboardComponents/SearchFoodTrucks';
import Table from './DashboardComponents/Table'

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

   handleSubmit(event) {
        alert("Updated");

   }
   componentDidMount() {
   }
   displayMarkers = () => {
       return this.state.stores.map((store, index) => {
           return <Marker key={index} id={index} position={{
               lat: store.latitude,
               lng: store.longitude
           }}
                          onClick={() => console.log("You clicked me!")} />
       })
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
                <div className="formBackground" style={{width: '75%'}}><br></br>
                    <h2 style={{textAlign: "center"}}>Customer Dashboard</h2><br></br>
                        <SearchFoodTruck/>
                <div className="tablebg" style={{color: 'black'}}>
                    <Table/>
                </div>
            </div>
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
            </div>
            </div>
            </header2>
           </div>
           );
   }
}
export default GoogleApiWrapper({
    apiKey:('AIzaSyD6WCgqYOmICfM4d29CP4_LN65Wk-Q-k-A')
})(CustomerDashboard);

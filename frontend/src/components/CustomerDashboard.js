import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

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
            <div id="sidebar" className="sidebar left">
                <br></br><h2>Sidebar</h2><br></br>
                <h5>Recommended Food Trucks</h5>
                <ul class="list-group" style={{color: 'darkgreen'}}>
                    <li class="list-group-item"><a href="/account">Option 1</a></li>
                    <li class="list-group-item"><a href="/account">Option 2</a></li>
                    <li class="list-group-item"><a href="/account">Option 3</a></li>
                    <li class="list-group-item"><a href="/account">Option 4</a></li>
                    <li class="list-group-item"><a href="/account">Option 5</a></li>
                </ul>
            </div>
            <div id="content" className="center">
            <header className="App-header">
            <div className="formBackground" style={{width: '75%'}}><br></br>
            <h2 style={{textAlign: "center"}}>Customer Dashboard</h2><br></br>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search Food Trucks" aria-label="Search"/>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form><br></br>
            <div className="tablebg" style={{color: 'black'}}>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Address</th>
                <th scope="col">Hours</th>
                <th scope="col">Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Waco Chi</th>
                <td>Drinks</td>
                <td>123 18th Av</td>
                <td>11am - 9pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
            </tbody>
            </table></div>
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

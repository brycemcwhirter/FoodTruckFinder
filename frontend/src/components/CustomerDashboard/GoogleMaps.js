import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker, InfoWindow} from "google-maps-react";
import Geocode from "react-geocode";

const mapStyles={
    width:'97%',
    height: '100%'
};

Geocode.setApiKey("AIzaSyA-gMFepF4IYvOdIzjP1SN0SvmQgLyJZUY");

class GoogleMapsTest extends Component{

    //Get the Addresses from the Database

    //for loop, return each address as a marker. 

    /*
    <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
    */


    state = {
        trucks: [],
        isLoading: true,
        truckLat: [],
        truckLng: [],
    }

    displayMarkers = () => {
        //alert(this.state.truckLat[0]);
        
        return this.state.trucks.map((truck, i) => {
            var index = i+1;
            //alert(this.state.truckLat[i]);
            alert(this.truckLat[i])
            return <Marker position={{
                lat: this.state.truckLat[i],
                lng: this.state.truckLat[i]
            }} label={index.toString()}/>
        })
        
    }

    async componentDidMount(){
        const response = await fetch('/recommendedtrucks/'+localStorage.getItem("UserID"));  // send account info to backend to get 5 recommended trucks
        const body = await response.json();
        
        this.setState({ trucks: body, isLoading: false});
    }
    
      

    render(){
        const {isLoading, trucks} = this.state;

        const markers = trucks.map((truck, i) => {
            Geocode.fromAddress(truck.address + " " + truck.city + " " + truck.state + " " + truck.zip).then(
                (response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                  this.state.truckLat.push(lat);
                  this.state.truckLng.push(lng);
                },
                (error) => {
                  console.error(error);
                }
              );
        })
        

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return(
            <div id = "id">
                <Map
                    google={this.props.google}
                    zoom={13}
                    style={mapStyles}
                    initialCenter={{lat: 31.5493, lng: -97.1467}}
                >
                    {markers}
                </Map>
            </div>
        )
        }
}

export default GoogleApiWrapper({
    apiKey:('AIzaSyD6WCgqYOmICfM4d29CP4_LN65Wk-Q-k-A')
}) (GoogleMapsTest)


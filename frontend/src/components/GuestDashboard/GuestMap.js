import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker, InfoWindow} from "google-maps-react";
import Geocode from "react-geocode";

const mapStyles={
    width:'97%',
    height: '100%'
};

Geocode.setApiKey("AIzaSyA-gMFepF4IYvOdIzjP1SN0SvmQgLyJZUY");

class GoogleMapsGuest extends Component{

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

    async componentDidMount(){
        this.setState({ isLoading: false});
    }

  

    render(){
        const {isLoading, trucks} = this.state;
        

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
                </Map>
            </div>
        )
        }
}

export default GoogleApiWrapper({
    apiKey:('AIzaSyD6WCgqYOmICfM4d29CP4_LN65Wk-Q-k-A')
}) (GoogleMapsGuest)


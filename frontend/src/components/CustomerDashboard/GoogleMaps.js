import React, { Component } from "react";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

const mapStyles={
    width:'97%',
    height: '100%'
};


class GoogleMaps extends Component{

    //Get the Addresses from the Database

    //for loop, return each address as a marker. 

    /*
    <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
    */
    

    state = {
        stores: [{lat: 31.548, lng: -97.125},
            {latitude: 31.546, longitude: -97.120},
            {latitude: 31.551, longitude: -97.118}]
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

    render(){
        return(
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
        )
    }
}

export default GoogleApiWrapper({
    //apiKey:('AIzaSyD6WCgqYOmICfM4d29CP4_LN65Wk-Q-k-A')
}) (GoogleMaps)


import React, { Component } from 'react';
import '../App.css'
import NavbarLoggedIn from './NavBarLoggedIn';
import FoodTruckFollowing from './FoodTruckFollowing';
import ProfileReviews from './ProfileReviews';

class Profile extends Component{

    state = {
        currAccount:[],
    }

    async componentDidMount(){
        const response = await fetch('accounts/'+localStorage.getItem("UserID"));
        const body = await response.json();
        this.setState({ currAccount : body});
    }

    render(){

        const {currAccount, reviews} = this.state;
        if (localStorage.getItem("UserID") == null){
            this.props.history.push("/");
            alert("You must be logged in to view this page");
        }

        return(
            <div className="backgroundDashboard">
            <NavbarLoggedIn/>

            <div class="container-fluid">

            <div class="row justify-content-center header-for-dashboard">
                <h1>Hi {currAccount.username}</h1>
            </div>

            <div style={{textAlign: "center"}}>
                <ProfileReviews/>
            </div><hr></hr>
            <div class="row justify-content-center table-map-style" >
                <FoodTruckFollowing/>
                
                
                
            </div>  

           
            

            </div>
            </div>
        
           );
        
    }
}

export default Profile;
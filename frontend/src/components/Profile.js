import React, { Component } from 'react';
import '../App.css'
import NavbarLoggedIn from './NavBarLoggedIn';
<<<<<<< HEAD

import Table from './CustomerDashboard/CustomerTable'
import FoodTruckFollowing from './FoodTruckFollowing';

=======
import FoodTruckFollowing from './FoodTruckFollowing';
import ProfileReviews from './ProfileReviews';
>>>>>>> 45f93a6b0f7ee20a3d593c9299b3956d64c14d0c

class Profile extends Component{

    state = {
        currAccount:[],
    }

    async componentDidMount(){
<<<<<<< HEAD
        const response = await fetch('/currentaccount');
=======
        const response = await fetch('accounts/'+localStorage.getItem("UserID"));
>>>>>>> 45f93a6b0f7ee20a3d593c9299b3956d64c14d0c
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

<<<<<<< HEAD

            <div class="row justify-content-center table-map-style">


                    <FoodTruckFollowing/>

                
            </div>
                   
=======
            <div style={{textAlign: "center"}}>
                <ProfileReviews/>
            </div><hr></hr>
            <div class="row justify-content-center table-map-style" >
                <FoodTruckFollowing/>
                
                
                
>>>>>>> 45f93a6b0f7ee20a3d593c9299b3956d64c14d0c
            </div>  

           
            

            </div>
        
           );
        
    }
}

export default Profile;
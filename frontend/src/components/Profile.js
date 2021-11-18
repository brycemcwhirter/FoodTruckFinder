import React, { Component } from 'react';
import '../App.css'
import NavbarLoggedIn from './NavBarLoggedIn';


class Profile extends Component{

    state = {
        currAccount:[]
    }

    async componentDidMount(){
        const response = await fetch('currentaccount');
        const body = await response.json();
        this.setState({ currAccount : body});
    }

    render(){

        const {currAccount} = this.state;


        return(
            <div className="backgroundDashboard">
            <NavbarLoggedIn/>

            <div class="container-fluid">

            <div class="row justify-content-center header-for-dashboard">
                <h1>Hi {currAccount.username}</h1>
            </div>


            <div class="row justify-content-center table-map-style">

                
            </div>  

            <div>
                
            </div>
            

            </div>
            </div>
           );
        
    }
}

export default Profile;
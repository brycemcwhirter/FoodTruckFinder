import React, { Component } from 'react';
import '../App.css'
import NavbarLoggedIn from './NavBarLoggedIn';


class Profile extends Component{

    state = {
        userName: "",
        currAccount:[]
    }

    async componentDidMount(){
        const acctresponse = await fetch('/currentaccount');          // get account info (i.e. food preference and budget)
        const acctbody = await acctresponse.json();
        this.setState({userName: acctbody.userName, currAccount:acctbody});
    }

    render(){

        const {userName, currAccount} = this.state;


        return(
            <div className="backgroundDashboard">
            <NavbarLoggedIn/>

            <div class="container-fluid">

            <div class="row justify-content-center header-for-dashboard">
                <h1>poop{userName}</h1>
            </div>


            <div class="row justify-content-center table-map-style">

                <div class="col">
                </div>
                <div class="col-6">
                    
                </div>     
            </div>  

            <div>
                
            </div>
            

            </div>
            </div>
           );
        
    }
}

export default Profile;
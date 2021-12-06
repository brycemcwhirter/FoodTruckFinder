import React, { Component } from 'react';
import '../../App.css'
import NavbarLoggedIn from '../NavBarLoggedIn';
import CustomerReviews from './CustomerReviews';
import CustomerSubscriptions from './CustomerSubscriptions';

class ViewCustomer extends Component{

    state = {
        account:[],
    }

    async componentDidMount(){
        const response = await fetch('accounts/'+localStorage.getItem("SearchUserID"));
        const body = await response.json();
        this.setState({ account : body});
    }

    

    render(){

        const {account} = this.state;

        if (localStorage.getItem("UserID") == null){
            alert("You must be logged in to view this page");
            this.props.history.push("/");
        } else if (localStorage.getItem("Role") == "CUSTOMER"){
            alert("You must be a food truck owner in order to view this page");
            this.props.history.push("/dashboard/customer");
        } else if (localStorage.getItem("ValidSearch") == "0"){
            this.props.history.push("/dashboard/owner");
        } 

        return(
            <div className="backgroundDashboard">
            <NavbarLoggedIn/>

            <div class="container-fluid">

            <div class="row justify-content-center header-for-dashboard">
                <h1>Profile Page for {account.username}</h1>
            </div>

            <div style={{textAlign: "center"}}>
                <CustomerReviews/>
            </div><hr></hr>
            <div class="row justify-content-center table-map-style" >
                <CustomerSubscriptions/>
  
            </div>

            </div>
            </div>
           );
        
    }
}

export default ViewCustomer;
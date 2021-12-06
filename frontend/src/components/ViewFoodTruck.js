import React, { Component } from 'react';
import '../ViewFoodTruck.css';
import NavbarLoggedIn from './NavBarLoggedIn';
import AppNavbar from './Navbar';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ViewFoodTruck extends Component {
    state = {
        isLoading: true,
        truck: [],
        reviews: [],
        routes: []
    };
    
   handleSubmit(event) {
        alert("Updated");

   }

   makeReview(){
       if (localStorage.getItem("Role") == "Guest"){
        alert("You must be logged in to review a food truck");
       } else {
        this.props.history.push("/reviewtruck");
       }
   }

   hasRoutes(){
        const { routes } = this.state;
        if (routes.length == 0){
            return <div>This food truck does not have any stops within their route currently</div>
        }
   }

   hasReviews(){
    const { reviews } = this.state;
    if (reviews.length == 0){
        return <div>This food truck does not have any reviews</div>
    }
}

   subscribe(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    
    fetch('subscribetotruck/'+localStorage.getItem("UserID")+"/"+localStorage.getItem("TruckID"), requestOptions);
    alert("You are now subscribed to the food truck!");
    window.location.reload();
   }

   unsubscribe(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    
    fetch('unsubscribetotruck/'+localStorage.getItem("UserID")+"/"+localStorage.getItem("TruckID"), requestOptions);
    alert("You are now unsubscribed to the food truck");
    window.location.reload();
   }

   deleteReview(id){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('removereview/'+id, requestOptions);
    fetch('updaterating/'+localStorage.getItem("TruckID"), requestOptions);
    window.location.reload();
    
   }


   async componentDidMount() {
        const response = await fetch('/foodtrucks/' + localStorage.getItem("TruckID"));
        const body = await response.json();
        const response2 = await fetch('/getreviewsbytruck/' + localStorage.getItem("TruckID"));
        const body2 = await response2.json();
        const response3 = await fetch('/gettruckroutes/' + localStorage.getItem("TruckID"));
        const body3 = await response3.json();
        this.setState({ isLoading: false, truck: body, reviews: body2, routes: body3});
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('updaterating/'+localStorage.getItem("TruckID"), requestOptions);
   }


   render() {
        const { isLoading, truck, reviews, routes } = this.state;

        if (localStorage.getItem("UserID") == null && localStorage.getItem("Action") != "viewTruck"){
            alert("You must be logged in to view this page");
            this.props.history.push("/");
        } 

        if (localStorage.getItem("ValidSearch") == "0"){
            this.props.history.push("/dashboard/customer");
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }
        var subButton = <button class="btn btn-secondary" onClick={() => this.subscribe()}>Subscribe to Food Truck</button>;
        for (let i = 0; i < truck.subscribers.length; i++){
            if (truck.subscribers[i].id == localStorage.getItem("UserID")){
                subButton = <button class="btn btn-secondary" onClick={() => this.unsubscribe()}>Unsubscribe from Food Truck</button>
            }
        }


        const routeList = routes.map((route, index) => {
            return <div>
            Stop {index+1}: {route.address}, {route.city}, {route.state}
          </div>
        });

        const reviewList = reviews.map(review => {
            if (review.account.id == localStorage.getItem("UserID")){
                var button = <button class="btn btn-danger btn-sm" onClick={() => this.deleteReview(review.id)} href="/viewfoodtruck">Delete</button>;
            } else {
                var button = "";
            }
            return <div class="card">
            <div class="card-body">
              <h5 class="card-title">{review.rating} Star(s) reviewed by {review.account.username} {button}</h5>
              <p class="card-text">{review.notes}</p>
            </div>
          </div>
        });

        if (localStorage.getItem("UserID") == null){
            var navBar = <AppNavbar/>
        } else {
            var navBar = <NavbarLoggedIn/>
        }
       
       return (
           <>
        {navBar}
        <div className="view-foodtruck-style">

            <div className="FoodTruck-info">
                <h1>{truck.name}</h1> <br></br>
                <h5>{truck.type} | {truck.priceRange} </h5>
                <h5>{truck.address}, {truck.city}, {truck.state}</h5>
            </div>


            <div className="view-foodtruck-buttons">
                <button class="btn btn-secondary">View Menu</button>
                <div class="divider"/>
                <button class="btn btn-secondary" onClick={() => this.makeReview()}>Review Food Truck</button>
                <div class="divider"/>
                {subButton}
            </div><br></br>
            <div>
                <h4>Routes:</h4>
                {this.hasRoutes()}
                <div style={{borderStyle: "solid"}, {backgroundColor: "white"}}>
                {routeList}
                </div>
            </div><br></br>
            <div>
                <h4>Reviews:</h4>
                {this.hasReviews()}
                <h6>Number of Reviews: {reviews.length}</h6>
                {reviewList}
            </div>
            
            
              
            </div>
            </>
        );
   }
}
export default ViewFoodTruck;
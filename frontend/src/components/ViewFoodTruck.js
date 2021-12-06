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
        const routeList = routes.map((route, index) => {
            return <div>
            Stop {index+1}: {route.address}, {route.city}, {route.state}
          </div>
        });
        if (routes.length == 0){
            return <h5 style={{color: "white", textAlign: "center"}}>This food truck does not have any stops within their route currently</h5>
        } else {
            return<div className="routeBackground">
                {routeList}
                </div>
        }
   }

   hasReviews(){
    const { reviews } = this.state;
    const reviewList = reviews.map(review => {
        if (review.account.id == localStorage.getItem("UserID")){
            var button = <button class="btn btn-danger btn-sm" onClick={() => this.deleteReview(review.id)} href="/viewfoodtruck">Delete</button>;
        } else {
            var button = "";
        }
        return <div class="col-6" className="reviewTable"><div class="card bg-light" style={{border: "ridge"}}>
            <div class="card-header">
            {review.rating} Star(s) reviewed by {review.account.username} <span style={{float: "right"}}>{button}</span>
            </div>
            <div class="card-body">
            <p class="card-text">{review.notes}</p>
            </div>
        </div>
      </div>
    });
    if (reviews.length == 0){
        return <h5 style={{color: "white", textAlign: "center"}}>This food truck does not have any reviews</h5>
    } else {
        return <div class="row" className="reviewBackground">
                {reviewList}
                </div>
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

   truckRating(truck){
    if (truck.rating >= 0){
        if (truck.rating == 1 || truck.rating == 0){
            return <div><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>
        } else if (truck.rating == 2){
            return <div><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>
        }else if (truck.rating == 3){
            return <div><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>
        }else if (truck.rating == 4){
            return <div><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span></div>
        }else if (truck.rating == 5){
            return <div><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></div>
        }
        
    } else {
        return <div>Not Yet Rated</div>
    }
};


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

        if (localStorage.getItem("UserID") == null){
            var navBar = <AppNavbar/>
        } else {
            var navBar = <NavbarLoggedIn/>
        }
       
       return (
           <>
        {navBar}
        <div className="view-foodtruck-style">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <div class="container"><br></br>
            <div className="FoodTruck-info">
                <h1>{truck.name}</h1><hr></hr>
                <h5>{truck.type} | {truck.priceRange} </h5>
                <h5> Overall Rating: {this.truckRating(truck)}</h5>
                <h5>{truck.address}, {truck.city}, {truck.state}</h5>
                <div>
                    <button class="btn btn-secondary">View Menu</button>
                    <div class="divider"/>
                    <button class="btn btn-secondary" onClick={() => this.makeReview()}>Review Food Truck</button>
                    <div class="divider"/>
                    {subButton}
                </div>
            </div>


            <br></br>
            <div class="row">
            <div class="col">
                <h4 style={{textAlign: "center", fontSize: "30px", color: "white"}}>Routes:</h4>
                {this.hasRoutes()}
                
            </div>
            </div><br></br>
            <div class="col">
            <div>
                <h4 style={{textAlign: "center", fontSize: "30px", color: "white"}}>Reviews:</h4>
                {this.hasReviews()}
            </div>
            </div>
              
            </div>
            </div>
            </>
        );
   }
}
export default ViewFoodTruck;
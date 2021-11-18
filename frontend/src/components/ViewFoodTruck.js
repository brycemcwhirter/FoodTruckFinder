import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
import GoogleMaps from './CustomerDashboard/GoogleMaps'
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ViewFoodTruck extends Component {
    state = {
        isLoading: true,
        truck: [],
        reviews: []
    };
    
   handleSubmit(event) {
        alert("Updated");

   }

   makeReview(){
        this.props.history.push("/reviewtruck");
   }

   subscribe(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    
    fetch('subscribetotruck/'+localStorage.getItem("UserID")+"/"+localStorage.getItem("TruckID"), requestOptions);
    alert("You are now subscribed to the food truck!");
   }

   async componentDidMount() {
        const response = await fetch('/foodtrucks/' + localStorage.getItem("TruckID"));
        const body = await response.json();
        const response2 = await fetch('/getreviewsbytruck/' + localStorage.getItem("TruckID"));
        const body2 = await response2.json();
        this.setState({ isLoading: false, truck: body, reviews: body2 });
   }
   render() {
        const { isLoading, truck, reviews } = this.state;

        if (localStorage.getItem("UserID") == null){
            alert("You must be logged in to view this page");
            this.props.history.push("/");
        } 

        if (localStorage.getItem("ValidSearch") == "0"){
            this.props.history.push("/dashboard/customer");
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const reviewList = reviews.map(review => {
            return <div class="card">
            <div class="card-body">
              <h5 class="card-title">{review.rating} Star(s) reviewed by {review.account.username}</h5>
              <p class="card-text">{review.notes}</p>
            </div>
          </div>
        });
       
       return (
        <div className="backgroundDashboard">
        <NavbarLoggedIn />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


            <div class="container-fluid">

            <div class="row justify-content-center header-for-dashboard">
                <h1>View Food Truck</h1>
            </div>
            <header className="App-header" style={{width: '60%'}}>
            <div className="formBackground"><br></br>
            <h5>Name: {truck.name}, Type: {truck.type}, Price: {truck.priceRange}, Location: {truck.address}, {truck.city}, {truck.state}</h5>

            <div>
                <button class="btn btn-secondary">View Menu</button>
                <div class="divider"/>
                <button class="btn btn-secondary" onClick={() => this.makeReview()}>Review Food Truck</button>
                <div class="divider"/>
                <button class="btn btn-secondary" onClick={() => this.subscribe()}>Subscribe to Food Truck</button>
            </div><br></br>
            <div>
                <h4>Reviews:</h4>
                <h6>Number of Reviews: {reviews.length}</h6>
                {reviewList}
            </div>
            
            </div>  
            </header> 
            
              
            </div>
        </div>
        );
   }
}
export default ViewFoodTruck;
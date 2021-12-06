import React, { Component } from 'react';



class ProfileReviews extends Component{

    state = {
        isLoading: true,
        reviews: []
    }

    async componentDidMount(){
        const response = await fetch('/getreviewsbyaccount/' + localStorage.getItem("UserID"));
        const body = await response.json();
        this.setState({ reviews : body, isLoading: false});
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
                You gave {review.foodtruck.name} {review.rating} Star(s) <span style={{float: "right"}}>{button}</span>
                </div>
                <div class="card-body">
                <p class="card-text">{review.notes}</p>
                </div>
            </div>
          </div>
        });
        if (reviews.length != 0){
            return <div class="row" className="reviewBackground">
                    {reviewList}
                    </div>
        }
    }

    render(){

        const {isLoading, reviews} = this.state;

        if(isLoading){
            return(
                <h1>loading....</h1>
            )
        }

        if (reviews.length == 0){
            return <div>
                
            <h2>You have not made any reviews yet</h2>

            <h3>Go to a food trucks details page to write a review</h3>

            </div>
        } 

        return(

            <div class="container">
                <div class="row">
                    {this.hasReviews()}
                            
                </div>
            </div>
        
        );
    }

}

export default ProfileReviews;
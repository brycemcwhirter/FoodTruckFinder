import React, { Component } from 'react';



class CustomerReviews extends Component{

    state = {
        isLoading: true,
        reviews: []
    }

    async componentDidMount(){
        const response = await fetch('/getreviewsbyaccount/' + localStorage.getItem("SearchUserID"));
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

    render(){

        const {isLoading, reviews} = this.state;


        const reviewList = reviews.map(review => {
            return <div class="col-6"><div class="card">
            <div class="card-body">
              <h5 class="card-title">{review.rating} Star(s) for {review.foodtruck.name} <button class="btn btn-danger btn-sm" onClick={() => this.deleteReview(review.id)} href="/viewfoodtruck">Delete</button></h5>
              <p class="card-text">{review.notes}</p>
            </div>
          </div></div>
        });

        if(isLoading){
            return(
                <h1>loading....</h1>
            )
        }


        if(reviews.length === 0){
            return(
                <div>
                
                <h2>You have not made any reviews yet</h2>

                <h3>Go to a food trucks details page to write a review</h3>

                </div>
                
            )
        }

        return(

            <div class="container">
                <div class="row">
                    {reviewList}
                            
                </div>
            </div>
        
        );
    }

}

export default CustomerReviews;
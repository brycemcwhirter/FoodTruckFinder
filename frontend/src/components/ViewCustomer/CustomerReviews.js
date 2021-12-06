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

       hasReviews(){
        const { reviews } = this.state;
        const reviewList = reviews.map(review => {
            return <div class="col-6" className="reviewTable"><div class="card bg-light" style={{border: "ridge"}}>
                <div class="card-header">
                {review.account.username} gave {review.foodtruck.name} {review.rating} Star(s)
                </div>
                <div class="card-body">
                <p class="card-text">{review.notes}</p>
                </div>
            </div>
          </div>
        });
        if (reviews.length != 0) {
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

        if(reviews.length === 0){
            return(
                <div>
                
                <h2>This account has not reviews any food trucks yet.</h2>

                </div>
                
            )
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

export default CustomerReviews;
import React, { Component } from 'react';
import avo from '../images/avo.png';
import '../App.css';
import Navbar from './Navbar';
import BackgroundNotLoggedIn from './BackgroundNotLoggedIn';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ReviewTruck extends Component {
    state = {
        isLoading: true,
        truck: []
    };


    async componentDidMount() {
        const response = await fetch('foodtrucks/'+localStorage.getItem("TruckID"));
        const body = await response.json();
        this.setState({ truck: body, isLoading: false });
    }


    

    handleSubmit = (event) => {
        var review = new Object();
        review.rating = document.getElementById("rating").value;
        review.notes = document.getElementById("notes").value;

        if (review.rating == "Select..."){
            alert("Please Select a Rating");
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(review)
            };
            
            fetch('addreview/'+localStorage.getItem("UserID")+"/"+localStorage.getItem("TruckID"), requestOptions);
            this.props.history.push("viewfoodtruck");
        }
    }

    cancel(){
        this.props.history.push("viewfoodtruck");
    }


    render() {
        const { truck, isLoading } = this.state;

        if (localStorage.getItem("UserID") == null){
            this.props.history.push("/");
            alert("You must be logged in to view this page");
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <BackgroundNotLoggedIn/>
                <NavbarLoggedIn />
                <header2>
                    <h2>Review Food Truck for {truck.name}</h2>
                    <header className="App-header" style={{ width: '50%' }}>
                        <div className="formBackground">
                            <form>
                                <br></br>
                                <div class="form-group col-md-6">
                                <label>Rating (Out of 5)</label>
                                <select class="form-control" id='rating'>
                                    <option hidden>Select...</option>
                                    <option>1 Star</option>
                                    <option>2 Stars</option>
                                    <option>3 Stars</option>
                                    <option>4 Stars</option>
                                    <option>5 Stars</option>
                                </select>
                                </div>
                                <label htmlFor="text-input">Brief Description of Experience: <br></br></label>
                                <textarea class="form-control" id="notes" rows="4" cols="50"/><br></br>

                                <button class="btn btn-secondary" type="submit" onClick={() => this.handleSubmit()}>Create Review</button>
                                <div class="divider"/>
                                <button class="btn btn-danger" type="submit" onClick={() => this.cancel()}>Cancel</button>
                            </form>
                        </div>
                    </header>
                </header2>
            </div>
        );
    }
}
export default ReviewTruck;
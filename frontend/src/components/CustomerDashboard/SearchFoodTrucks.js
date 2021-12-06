import React, { Component } from 'react';
import NavbarLoggedIn from '../NavBarLoggedIn';
import AppNavbar from '../Navbar';


class SearchFoodTruck extends Component{
    state = {
        isLoading: true,
        trucks: []
    }
    async search(){
        const {trucks} = this.state;

        var searchStr = document.getElementById("search").value;
        if (searchStr == ""){
            alert("Please type in a name in the search bar");
        } else {
            for (let i = 0; i < trucks.length; i++){
                alert(i);
            }
            alert("Done");
            /*if (truck == null){
                alert("Not Found");
            } else {
                alert("Found");
            } */         
        }

    }

    async componentDidMount(){
        var searchType = localStorage.getItem("SearchType");
        var searchStr = localStorage.getItem("SearchStr");
        if (searchType == "Name"){
            var response = await fetch('trucksbyname/'+searchStr);
        } else if (searchType == "Type"){
            var response = await fetch('trucksbytype/'+searchStr);
        } else if (searchType == "Time"){
            var response = await fetch('trucksbytime/'+searchStr);
        } else {
            var response = await fetch('trucksbycity/'+searchStr);
        }
        const body = await response.json();
        this.setState({ isLoading: false, trucks : body});
    }

    viewTruck(id){
        localStorage.setItem("ValidSearch", 1);
        localStorage.setItem("TruckID", id);
        localStorage.setItem("Action", "viewTruck");
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

    render(){
        const { isLoading, trucks } = this.state;

        if (localStorage.getItem("ValidSearch") == 0){
            this.props.history.push("/dashboard/customer");
        } else if (localStorage.getItem("UserID") == null && localStorage.getItem("ValidSearch") != 1){
            alert("You must search to view this page");
            this.props.history.push("/");
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const truckList = trucks.map(truck => {
            return <tr key={truck.id}>
              <td>{truck.name}</td>
              <td>{truck.type}</td>
              <td>{truck.priceRange}</td>
              <td>{truck.address},  {truck.city}, {truck.state}</td>
              <td>{truck.openTime} - {truck.closeTime}</td>
          <td>{this.truckRating(truck)}</td>
          <td>
                <a class="btn btn-outline-secondary btn-sm" onClick={() => this.viewTruck(truck.id)} href="/viewfoodtruck">View Page</a>
              </td>
            </tr>
        });

        if (localStorage.getItem("UserID") == null){
            var navBar = <AppNavbar/>
        } else {
            var navBar = <NavbarLoggedIn/>
        }

        if (trucks.length == 0){
            var results = "Sorry, there are no results for that search.  Please try searching for something else.";
        } else {
            var results = "";
        }
        

        return (
            <div className="backgroundDashboard">
                {navBar}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


                    <div class="container-fluid">
        
                    <div class="row justify-content-center header-for-dashboard">
                        <h1>Search Results for {localStorage.getItem("SearchStr")} by {localStorage.getItem("SearchType")} </h1>
                    </div>

                    <div>


                        <div class="row justify-content-end" style={{paddingRight: "80px"}}>
                        </div>   
                    </div>

                        <div class="row justify-content-center table-map-style">


                        <div style={{color: "white"}}>{results}</div>
                        <div className="tablebg table-wrapper-scroll-y my-custom-scrollbar" style={{ color: 'black' }}>

                        
                        <table class="table table-striped table-hover owner-table-style">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{width: "10%"}}>Name</th>
                                        <th scope="col" style={{width: "10%"}}>Type</th>
                                        <th scope="col" style={{width: "5%"}}>Price</th>
                                        <th scope="col" style={{width: "20%"}}>Address</th>
                                        <th scope="col" style={{width: "10%"}}>Hours</th>
                                        <th scope="col" style={{width: "10%"}}>Rating</th>
                                        <th scope="col" style={{width: "10%"}}>View</th>
                                    </tr>
                                </thead>
                                <tbody class="tableColors">
                                    {truckList}
                                </tbody>
                        </table>

                        </div>


                    </div>


                    </div>
            </div>
        );
    }
}

export default SearchFoodTruck;
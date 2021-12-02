import React, { Component } from 'react';
import '../../Dashboard.css';
import NavbarLoggedIn from '../NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class OwnerDashboard extends Component {
    state = {
        isLoading: true,
        loggedin: false,
        currAccount: [],
        trucks: [],
        accounts: [],
    };

    handleSubmit(event) {
        alert("Updated");
    }

    updateTruck(id){
        localStorage.setItem("TruckID", id);
        localStorage.setItem("Action", "manageTruck");
        this.props.history.push('/managefoodtruck');
    }

    async componentDidMount() {
        const response = await fetch('currentaccount');
        const body = await response.json();
        const response2 = await fetch('isloggedin');
        const body2 = await response2.json();
        const response3 = await fetch('/getownertrucks/' + localStorage.getItem("UserID"));
        const body3 = await response3.json();
        const response4 = await fetch('/accounts');
        const body4 = await response4.json();
       
        this.setState({ currAccount: body, isLoading: false, loggedin: body2, trucks: body3, accounts: body4});
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

    truckOperating(truck){
        if (truck.operational == 0){
            return <div>Not Currently Operating</div>
        } else {
            return <div>Operational</div>
        }
    };

    search = (event) => {
        const { accounts } = this.state;
        var searchStr = document.getElementById("search").value;
        if (searchStr == ""){
            localStorage.setItem("ValidSearch", 0);
            alert("Please type in a name in the search bar");
        } else {
            var found = 0;
            for (let i = 0; i < accounts.length; i++){
                if (accounts[i].username == searchStr){
                    localStorage.setItem("SearchUserID", accounts[i].id); 
                    localStorage.setItem("ValidSearch", 1);
                    found = 1;
                }
            } 
            if (found == 0){
                localStorage.setItem("ValidSearch", 0);
                alert("Username not found");
            }
                 
        }

    }


    render() {
        const { isLoading, trucks } = this.state;

        if (localStorage.getItem("UserID") == null){
            alert("You must be logged in to view this page");
            this.props.history.push("/");
        } else if (localStorage.getItem("Role") == "CUSTOMER"){
            alert("You must be a food truck owner in order to view this page");
            this.props.history.push("/dashboard/customer");
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
          <td>{this.truckOperating(truck)}</td>
          <td>
              <button class="btn btn-outline-secondary btn-sm" onClick={() => this.updateTruck(truck.id)}>Edit</button>
          </td>
            </tr>
        });
        

        return (
            <div className="backgroundDashboard">
                <NavbarLoggedIn />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


                    <div class="container-fluid">
        
                    <div class="row justify-content-center header-for-dashboard">
                        <h1>Owner Dashboard</h1>
                    </div>

                    <div>
                        <form class="form-inline my-2 my-lg-0 row justify-content-center">
                            <input class="form-control mr-sm-2" id="search" type="text" placeholder="Search for User" aria-label="Search" />
                            <div class="divider"/>
                            <a class="btn btn-secondary my-2 my-sm-0" type="submit" onClick={() => this.search()}  href="/viewcustomer">Search</a>
                        </form>
                        <div class="row justify-content-center header-for-dashboard">Your Food Trucks</div>

                        <div class="row justify-content-end" style={{paddingRight: "80px"}}>
                            <small className="muted">Add a Food Truck? <a href="/addfoodtruck">Click Here</a></small>
                        </div>   
                    </div>

                        <div class="row justify-content-center table-map-style">


                        <div className="tablebg table-wrapper-scroll-y my-custom-scrollbar" style={{ color: 'black' }}>

                        


                        <table class="table table-striped table-hover owner-table-style">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{width: "15%"}}>Name</th>
                                        <th scope="col" style={{width: "10%"}}>Type</th>
                                        <th scope="col" style={{width: "5%"}}>Price</th>
                                        <th scope="col" style={{width: "20%"}}>Address</th>
                                        <th scope="col" style={{width: "15%"}}>Hours</th>
                                        <th scope="col" style={{width: "15%"}}>Rating</th>
                                        <th scope="col" style={{width: "15%"}}>Operating</th>
                                        <th scope="col" style={{width: "8%"}}>Edit</th>
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
export default OwnerDashboard;
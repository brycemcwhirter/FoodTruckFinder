import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class OwnerDashboard extends Component {
    state = {
        isLoading: true,
        loggedin: false,
        currAccount: [],
        trucks: []
    };

    handleSubmit(event) {
        alert("Updated");
    }
    async componentDidMount() {
        const response = await fetch('currentaccount');
        const body = await response.json();
        const response2 = await fetch('isloggedin');
        const body2 = await response2.json();
        const response3 = await fetch('/getownertrucks/2');
        const body3 = await response3.json();
        this.setState({ currAccount: body, isLoading: false, loggedin: body2, trucks: body3});
    }

      truckRating(truck){
        if (truck.rating > 0){
            for (let i = 0; i < truck.rating; i++){
                return <span class="fa fa-star checked"></span>
            }
            for (let i = truck.rating; i < 5; i++){
                return <span class="fa fa-star"></span>
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

    render() {
        const { isLoading, trucks } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const truckList = trucks.map(truck => {
            return <tr key={truck.id}>
              <td>{truck.name}</td>
              <td>{truck.type}</td>
              <td>{truck.address}  {truck.city}, {truck.state}</td>
          <td>{this.truckRating(truck)}</td>
          <td>{this.truckOperating(truck)}</td>
          <td>
              <button class="btn btn-outline-success btn-sm" tag={Link} to={"/managefoodtruck/" + truck.id}>Edit</button>
          </td>
            </tr>
          });

        return (
            <div>
                <NavbarLoggedIn />
                <header2>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <h2>Owner Dashboard</h2>
                    <header className="App-header" style={{ width: '60%' }}>
                        <div className="formBackground"><br></br>
                        <div style={{ textAlign: "right" }}><small className="muted">Add a Food Truck? <a href="/addfoodtruck">Click Here</a></small></div>
                        <h4>Your Food Trucks</h4>
                        <div className="tablebg" style={{ color: 'black' }}>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Operating</th>
                                        <th scope="col">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {truckList}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </header>
                </header2>
            </div>
        );
    }
}
export default OwnerDashboard;
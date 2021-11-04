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
        const response3 = await fetch('/allfoodtrucks');
        const body3 = await response3.json();
        this.setState({ currAccount: body, isLoading: false, loggedin: body2, trucks: body3});
    }

    foodTruckTable(){
        const { trucks } = this.state;
        for (let i = 0; i < trucks.length; i++){
            return (<tr key={trucks[i].id}>
          <td>{trucks[i].name}</td>
          <td>{trucks[i].type}</td>
          <td>{trucks[i].address}</td>
          <td>Hours</td>
          <td>{trucks[i].rating}</td>
          <td>{trucks[i].operational}</td>
          <td>
              <Button size="sm" color="primary" tag={Link} to={"/groups/" + trucks[i].id}>Edit</Button>
          </td>
        </tr>)
        }
      }

    render() {
        const { isLoading, trucks } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const truckList = trucks.map(truck => {
            return <tr key={truck.id}>
              <td>{truck.name}</td>
              <td>{truck.address}</td>
              <td>{truck.type}</td>
          <td>{truck.address}</td>
          <td>{truck.rating}</td>
          <td>Hours</td>
          <td>{truck.operational}</td>
          <td>
              <Button size="sm" color="primary" tag={Link} to={"/groups/" + truck.id}>Edit</Button>
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
                                        <th scope="col">Hours</th>
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
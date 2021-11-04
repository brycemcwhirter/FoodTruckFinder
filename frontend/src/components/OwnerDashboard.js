import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class OwnerDashboard extends Component {
    state = {
        isLoading: true,
        loggedin: false,
        currAccount: []
    };

    handleSubmit(event) {
        alert("Updated");
    }
    async componentDidMount() {
        const response = await fetch('currentaccount');
        const body = await response.json();
        const response2 = await fetch('isloggedin');
        const body2 = await response2.json();
        this.setState({ currAccount: body, isLoading: false, loggedin: body2 });
    }
    render() {
        const { isLoading } = this.state;

        /*if (loggedin){
            this.props.history.push("/");
        }*/
        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
<<<<<<< HEAD
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
                                    <tr>
                                        <th scope="row">Waco Chi</th>
                                        <td>Drinks</td>
                                        <td>123 18th Av</td>
                                        <td>11am - 9pm</td>
                                        <td><span class="fa fa-star checked" />
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span></td>
                                        <td>Yes</td>
                                        <td><form action="/managefoodtruck">
                                            <input type="submit" value="Manage" />
                                        </form></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </header>
                </header2>
=======
            <NavbarLoggedIn/>
            <header2>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <h2>Owner Dashboard</h2>
            <header className="App-header" style={{width: '60%'}}>
            <div className="formBackground"><br></br>
            <div style={{textAlign: "right"}}><small className="muted">Add a Food Truck? <a href="/addfoodtruck">Click Here</a></small></div>
            <h4>Your Food Trucks</h4>
            <div className="tablebg" style={{color: 'black'}}>
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
                <tr>
                <th scope="row">Waco Chi</th>
                <td>Drinks</td>
                <td>123 18th Av</td>
                <td>11am - 9pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                <td>Yes</td>
                <td><button class="btn btn-outline-primary btn-sm">Edit</button></td>
                </tr>
            </tbody>
            </table>
            </div>
>>>>>>> 22c73d6a1877d9ac9a0face84b11909393b504b8
            </div>
        );
    }
}
export default OwnerDashboard;
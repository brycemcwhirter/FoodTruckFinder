import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class CustomerDashboard extends Component {
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
    const { isLoading} = this.state;
    
    /*if (loggedin){
        this.props.history.push("/");
    }*/
    if (isLoading){
        return <p>Loading...</p>;
    }
       return (
            <div>
            <NavbarLoggedIn/>
            <header2>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="wrapper">
            <div id="sidebar" className="sidebar left">
                <br></br><h2>Sidebar</h2><br></br>
                <h5>Recommended Food Trucks</h5>
                <ul class="list-group" style={{color: 'darkgreen'}}>
                    <li class="list-group-item"><a href="/account">Option 1</a></li>
                    <li class="list-group-item"><a href="/account">Option 2</a></li>
                    <li class="list-group-item"><a href="/account">Option 3</a></li>
                    <li class="list-group-item"><a href="/account">Option 4</a></li>
                    <li class="list-group-item"><a href="/account">Option 5</a></li>
                </ul>
            </div>
            <div id="content" className="center">
            <header className="App-header">
            <div className="formBackground" style={{width: '75%'}}><br></br>
            <h2 style={{textAlign: "center"}}>Customer Dashboard</h2><br></br>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search Food Trucks" aria-label="Search"/>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form><br></br>
            <div className="tablebg" style={{color: 'black'}}>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Address</th>
                <th scope="col">Hours</th>
                <th scope="col">Rating</th>
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
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
            </tbody>
            </table></div>
            </div>
            </header>
            </div>
            </div>
            </header2>
           </div>
           );
   }
}
export default CustomerDashboard;
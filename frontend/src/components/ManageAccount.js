import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ManageAccount extends Component {
    
   handleSubmit(event) {
        alert("Updated");

   }
   componentDidMount() {
   }
   render() {
       return (
            <div>
            <NavbarLoggedIn/>
            <header2>
            <h2>Manage Account</h2>
            <header className="App-header" style={{width: '50%'}}>
            <div className="formBackground"><br></br>
            <h5>Username: </h5>
            <h5>Email:</h5><br></br>
            <h6>Update Information</h6>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="text-input">Update Username: </label><br></br>
                <input class="form-control" id="username" placeholder="Username"/><br></br>
                <label htmlFor="text-input">Update Email: </label><br></br>
                <input class="form-control" id="email" placeholder="Email"/><br></br>

                <input class="btn btn-secondary" type="submit" value="Update"/>
            </form>
            </div>
            </header>
            </header2>
           </div>
           );
   }
}
export default ManageAccount;
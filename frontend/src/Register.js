import React, { Component } from 'react';
import avo from './avo.png';
import './App.css';
import Navbar from './Navbar';

/*
The form which was previously present in the App component has been moved to its own separate component.
*/
class Register extends Component {

    handleSubmit(event) {
       var username = document.getElementById("username").value;
       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;
       var confirm_password = document.getElementById("confirm-password").value;
       var length = 0, numUpper = 0, numNumeric = 0, numSpecial = 0;
       for (let i = 0; i < password.length; i++){
            length++;
            if (password[i] >= '0' && password[i] <= '9'){
                numNumeric++;
            } else if (password[i] >= 'A' && password[i] <= 'Z'){
                numUpper++;
            } else if (!(password[i].toUpperCase() !== password[i].toLowerCase())){
                numSpecial++;
            }
       }
       if (length >= 6 && numUpper > 0 && numNumeric > 0 && numSpecial > 0){
            alert("Password is valid");
       } else if (password !== confirm_password) {
           alert("Passwords do not match");
       } else {
           alert("Password does not meet the requirements");
       }
   }

   componentDidMount() {
   }
   render() {
       return (
            <div>
            <Navbar/>    
            <header2>
            <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
            <h2>Register for an Account</h2>
            <header className="App-header">
            <form onSubmit={this.handleSubmit} className="formBackground">
                <br></br>
                <label htmlFor="text-input">Enter Username <br></br></label>
                <input id="username" placeholder="Username"/>
                <br></br>
                <label htmlFor="text-input">Enter Email <br></br></label>
                <input id="email" placeholder="Email"/>
                <br></br>

                <label htmlFor="password-input">Enter Password <br></br></label>
                <input
                        type="password"
                        placeholder="Password"
                        id="password"
                />
                <small className="text-muted">Password must be at least 6 characters long and contain at least one uppercase, number, and special character</small>
                <br></br>
                <label htmlFor="password-input">Confirm Password <br></br></label>
                <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirm-password"/>
            
                <br/>
                <input type="submit" value="Register"/>
            </form>
            <div><small className="text-muted">Already have an account? <a href="/login">Login</a></small></div>
            </header>
            </header2>
           </div>
           );
   }
}
export default Register;
import React, { Component } from 'react';
import avo from './avo.png';
import './App.css';
import Navbar from './Navbar';

//Establishing Global Variables for HTTP request






/*
The form which was previously present in the App component has been moved to its own separate component.
*/
class Register extends Component {

    handleSubmit(event) {
        // establishing variables
       var username = document.getElementById("username").value;
       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;
       var confirm_password = document.getElementById("confirm-password").value;
       var accountType = document.getElementById("type").value;
       var length = 0, numUpper = 0, numNumeric = 0, numSpecial = 0;


        // Testing if Password is Numeric, has an upper case, and a special character
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


       //Test for passwords & successfull login 
       if (length >= 6 && numUpper > 0 && numNumeric > 0 && numSpecial > 0){
            alert('Login Successful!');
       } else if (password !== confirm_password) {
           alert("Passwords do not match");
       } else {
           alert("Password does not meet the requirements");
       }


       //Creating the post request to HTTP
       Request.postAccount(username, email, password, accountType);
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
                <label>Enter Username <br></br></label>
                <input class="form-control" id="username" placeholder="Username"/>
                <br></br>
                <label>Enter Email <br></br></label>
                <input class="form-control" id="email" placeholder="Email"/>
                <br></br>
                <label>Account Type</label>
                <select class="form-control" id='type'>
                    <option>Customer</option>
                    <option>Food Truck Owner</option>
                </select>
                <br></br>

                <label >Enter Password <br></br></label>
                <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        class="form-control"/>

                <small className="muted">Password must be at least 6 characters long and contain at least one uppercase, number, and special character</small>
                <br></br>
                <label>Confirm Password <br></br></label>
                <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirm-password"
                        class="form-control"/>
            
                <br/>
                <input class="btn btn-secondary" type="submit" value="Register"/>
            </form>
            <div><small className="muted">Already have an account? <a href="/login">Login</a></small></div>
            </header>
            </header2>
           </div>
           );
   }
}
export default Register;
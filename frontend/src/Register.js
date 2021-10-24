import React, { Component } from 'react';
import avo from './avo.png';
import './App.css';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/
var pass, em, username;
class Register extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    };

    handleUsername = event => {
        this.setState({ username: event.target.value });
        username = event.target.value;
    };

    handleEmail = event => {
        this.setState({ email: event.target.value });
        em = event.target.value;
    };

    handlePassword = event => {
        this.setState({ password: event.target.value });
        pass = event.target.value;
    };

   handleSubmit(event) {
       var length = 0, numUpper = 0, numNumeric = 0, numSpecial = 0;
       for (let i = 0; i < pass.length; i++){
            length++;
            if (pass[i] >= '0' && pass[i] <= '9'){
                numNumeric++;
            } else if (pass[i] >= 'A' && pass[i] <= 'Z'){
                numUpper++;
            } else if (!(pass[i].toUpperCase() != pass[i].toLowerCase())){
                numSpecial++;
            }
       }
       if (length >= 6 && numUpper > 0 && numNumeric > 0 && numSpecial > 0){
           alert("Password is valid");
       } else {
            alert("Password does not meet the requirements");
       }
   }

   componentDidMount() {
   }
   render() {
       return (
            <div>
            <header2>
            <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
            <h1>Register for an Account</h1>
            <header className="App-header">
            <form onSubmit={this.handleSubmit} className="formBackground">
                <br></br>
                <label htmlFor="text-input">Enter Username <br></br></label>
                <input onChange={this.handleUsername} placeholder="Username"/>
                <br></br>
                <label htmlFor="text-input">Enter Email <br></br></label>
                <input onChange={this.handleEmail} placeholder="Email"/>
                <br></br>

                <label htmlFor="password-input">Enter Password <br></br></label>
                <input
                        type="password"
                        placeholder="Password"
                        id="password-input"
                        onChange={this.handlePassword}
                />
                <small className="text-muted">Password must be at least 6 characters long and contain at least one uppercase, number, and special character</small>
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
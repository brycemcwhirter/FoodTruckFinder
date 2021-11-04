import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import avo from '../images/avo.png';
import '../App.css';
import Navbar from './Navbar';
import BackgroundNotLoggedIn from './BackgroundNotLoggedIn';

/*
The form which was previously present in the App component has been moved to its own separate component.
*/

var redirect = "false";
class Register extends Component {
    state = {
        isLoading: true,
        accounts: []
    };

    handleSubmit = (e) => {
        // establishing variables
        const { accounts } = this.state;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirm_password = document.getElementById("confirm-password").value;
        var accountType = document.getElementById("type").value;
        var length = 0, numUpper = 0, numNumeric = 0, numSpecial = 0;


        // Testing if Password is Numeric, has an upper case, and a special character
        for (let i = 0; i < password.length; i++) {
            length++;
            if (password[i] >= '0' && password[i] <= '9') {
                numNumeric++;
            } else if (password[i] >= 'A' && password[i] <= 'Z') {
                numUpper++;
            } else if (!(password[i].toUpperCase() !== password[i].toLowerCase())) {
                numSpecial++;
            }
        }


        //Test for passwords & successfull login 
        if (username === "" || email === "" || password === "" || confirm_password === "") {
            alert("You must fill in every field");
        } else if (length >= 6 && numUpper > 0 && numNumeric > 0 && numSpecial > 0) {
            //alert('Login Successful!');
            for (let i = 0; i < accounts.length; i++) {
                if (email == accounts[i].email) {
                    alert("Email is already used by another user");
                    return 1;
                }
                if (username == accounts[i].username) {
                    alert("Username is already used by another user");
                    return 1;
                }
            }
            var newUser = new Object();
            newUser.username = username;
            newUser.email = email;
            newUser.password = password;
            newUser.type = accountType;

            //Making JSON String
            var jsonString = JSON.stringify(newUser);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonString
            };
            fetch('accounts', requestOptions)
                .then(() => {

                })
            this.props.history.push("/login");

        } else if (password !== confirm_password) {
            alert("Passwords do not match");
        } else {
            alert("Password does not meet the requirements");
        }

    }

    async componentDidMount() {
        const response = await fetch('accounts');
        const body = await response.json();
        this.setState({ accounts: body, isLoading: false });
    }

    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <div>
                <BackgroundNotLoggedIn />
                <Navbar />
                <header2>
                    <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
                    <h2>Register for an Account</h2>
                    <header className="App-header" style={{ width: '50%' }}>
                        <div className="formBackground">
                            <form onSubmit={this.handleSubmit}>
                                <br></br>
                                <label>Enter Username <br></br></label>
                                <input class="form-control" id="username" placeholder="Username" />
                                <br></br>
                                <label>Enter Email <br></br></label>
                                <input class="form-control" id="email" placeholder="Email" />
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
                                    class="form-control" />

                                <small className="muted">Password must be at least 6 characters long and contain at least one uppercase, number, and special character</small>
                                <br></br>
                                <label>Confirm Password <br></br></label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    id="confirm-password"
                                    class="form-control" />

                                <br />
                                <input class="btn btn-secondary" type="submit" value="Register" />
                            </form>
                        </div>
                        <div><small className="muted">Already have an account? <a href="/login">Login</a></small></div>
                    </header>
                </header2>
            </div>
        );
    }
}
export default Register;
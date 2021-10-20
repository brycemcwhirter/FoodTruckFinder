import React, { Component } from 'react';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class Register extends Component {
    state = {
        email: "",
        password: ""
    };

    handleEmail = event => {
        this.setState({ email: event.target.value });
    };

    handlePassword = event => {
        this.setState({ password: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>Register Account</h1>
                <br></br>
                <label htmlFor="text-input">Enter Email <br></br></label>
                <input onChange={this.handleEmail}
                       placeholder="email"

                /><br></br><br></br>

                <label htmlFor="password-input">Password <br></br></label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password-input"
                    onChange={this.handlePassword}
                /><br></br>
                <label htmlFor="password-input">Confirm Password <br></br></label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password-input"
                    onChange={this.handlePassword}
                />
                <div><small className="text-muted">Don't have an account? <a href="/Register">Create Account</a></small></div>
            </div>

        );
    }
}
export default Register;

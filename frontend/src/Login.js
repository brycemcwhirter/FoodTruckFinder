import React, { Component } from 'react';
import avo from './avo.png';
import './App.css';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/
var pass;
var em;
class Login extends Component {
    state = {
        email: "",
        password: ""
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
        alert(em + "\n" + pass);
   }
   componentDidMount() {
   }
   render() {
       return (
            <div>
            <header2>
            <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
            <h1>Login Account</h1>
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <label htmlFor="text-input">Enter Email <br></br></label>
                <input onChange={this.handleEmail}
                       placeholder="email"

                /><br></br>

                <label htmlFor="password-input">Password <br></br></label>
                <input
                        type="password"
                        placeholder="Password"
                        id="password-input"
                        onChange={this.handlePassword}
                />
                <br/>
                <input type="submit" value="Submit" />
            </form>
            <div><small className="text-muted">Don't have an account? <a href="/Register">Create Account</a></small></div>
            </header2>
           </div>
           );
   }
}
export default Login;
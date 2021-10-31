import React, { Component } from 'react';
import avo from '../images/avo.png';
import '../App.css';
import Navbar from './Navbar';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class Login extends Component {
    
   handleSubmit(event) {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('accounts', requestOptions)
        .then(response=>(response.json()))
        .then(data=> data.response)
   }
   componentDidMount() {
   }
   render() {
       return (
            <div>
            <Navbar/>
            <header2>
            <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
            <h2>Login to Account</h2>
            <header className="App-header">
            <form onSubmit={this.handleSubmit} className="formBackground">
                <br></br>
                <label htmlFor="text-input">Enter Email <br></br></label>
                <input class="form-control" id="email" placeholder="Email"/><br></br>

                <label htmlFor="password-input">Enter Password <br></br></label>
                <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        class="form-control"/>
                <br/>
                <input class="btn btn-secondary" type="submit" value="Login"/>
            </form>
            <div><small className="muted">Don't have an account? <a href="/register">Create Account</a></small></div>
            </header>
            </header2>
           </div>
           );
   }
}
export default Login;
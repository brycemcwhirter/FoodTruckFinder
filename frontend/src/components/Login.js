import React, { Component } from 'react';
import avo from '../images/avo.png';
import '../App.css';
import Navbar from './Navbar';
import BackgroundNotLoggedIn from './BackgroundNotLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class Login extends Component {
    state = {
        isLoading: true,
        accounts: []
    };


    async componentDidMount() {
        const response = await fetch('accounts');
        const body = await response.json();
        this.setState({ accounts: body, isLoading: false });
    }


    

    handleSubmit = (event) => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const { accounts } = this.state;
        var found = false;


        
        for (let i = 0; i < accounts.length; i++) {
            if (email === accounts[i].email && password === accounts[i].password) {
                var jsonString = JSON.stringify(accounts[i]);
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: jsonString
                };
                localStorage.setItem("UserID", accounts[i].id);
                localStorage.setItem("Role", accounts[i].accountType);
                //fetch('setaccount', requestOptions)
                if (accounts[i].accountType === 'CUSTOMER') {
                    this.props.history.push("/dashboard/customer");
                } else {
                    this.props.history.push("/dashboard/owner");
                }
                found = true;
                break;
            }
        }
        
        if (!found) {
            alert("Not found");
            found = false;
        }

        

    }

    render() {
        const { isLoading } = this.state;

        if (localStorage.getItem("UserID") != null){
            alert("You cannot access this page while logged in");
            this.props.history.push('/dashboard/customer');
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <BackgroundNotLoggedIn/>
                <Navbar />
                <header2>
                    <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
                    <h2>Login to Account</h2>
                    <header className="App-header" style={{ width: '50%' }}>
                        <div className="formBackground">
                            <form onSubmit={this.handleSubmit}>
                                <br></br>
                                <label htmlFor="text-input">Enter Email <br></br></label>
                                <input class="form-control" id="email" placeholder="Email" /><br></br>

                                <label htmlFor="password-input">Enter Password <br></br></label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    class="form-control" />
                                <br />
                                <input class="btn btn-secondary" type="submit" value="Login" />
                            </form>
                        </div>
                        <div><small className="muted">Don't have an account? <a href="/register">Create Account</a></small></div>
                    </header>
                </header2>
            </div>
        );
    }
}
export default Login;
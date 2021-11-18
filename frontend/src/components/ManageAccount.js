import React, { Component } from 'react';
import '../Dashboard.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ManageAccount extends Component {
    state = {
        isLoading: true,
        currAccount: [],
        accounts: []
    };

    handleSubmit = (event) => {
        const { currAccount, accounts } = this.state;
        var newUser = new Object();
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var pricePref = document.getElementById("pricePref").value;
        var typePref = document.getElementById("typePref").value;
        var confirm_password = document.getElementById("confirm_password").value;
        let valid = true;
        if (confirm_password != currAccount.password) {
            alert("Password Authentication Failed");
            return 1;
        }

        for (let i = 0; i < accounts.length; i++) {
            if (email == accounts[i].email && email != currAccount.email) {
                alert("Email is already used by another user");
                valid = false;
            }
            if (username == accounts[i].username && username != currAccount.username) {
                alert("Username is already used by another user");
                valid = false;
            }
        }
        
        if (valid) {
            var newUser = new Object();
            newUser.username = username;
            newUser.email = email;
            newUser.typePref = typePref;
            newUser.pricePref = pricePref;
            //Making JSON String
            var jsonString = JSON.stringify(newUser);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonString
            };
            fetch('updateaccount/' + localStorage.getItem("UserID"), requestOptions)
        }
    }
    async componentDidMount() {
        //alert(localStorage.getItem("UserID"));
        const response = await fetch('accounts/' + localStorage.getItem("UserID"));
        const body = await response.json();
        const response2 = await fetch('accounts');
        const body2 = await response2.json();
        this.setState({ currAccount: body, isLoading: false, accounts: body2 });
    }

    render() {
        const { currAccount, isLoading } = this.state;

        if (localStorage.getItem("UserID") == null){
            this.props.history.push("/");
            alert("You must be logged in to view this page");
        }
        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <div>
                <NavbarLoggedIn />
                <header2>
                    <br></br>
                    <h2>Manage Account</h2>
                    <header className="App-header" style={{ width: '50%' }}>
                        <div className="formBackground"><br></br>
                            <h5>Username: {currAccount.username}</h5>
                            <h5>Email: {currAccount.email} </h5>
                            <h5>Food Type Preference: {currAccount.typePreference}</h5>
                            <h5>Price Preference: {currAccount.pricePreference} </h5><br></br>
                            <h5>Update Information</h5>
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="text-input">Update Username: </label><br></br>
                                <input class="form-control" id="username" placeholder={currAccount.username} /><br></br>
                                <label htmlFor="text-input">Update Email: </label><br></br>
                                <input class="form-control" id="email" placeholder={currAccount.email} /><br></br>
                                <select class="form-control form-select" id="typePref">
                                    <option value="None">Select...</option>
                                    <option>American</option>
                                    <option>Mexican</option>
                                    <option>Asian</option>
                                    <option>Seafood</option>
                                    <option>Indian</option>
                                    <option>German</option>
                                    <option>Drinks</option>
                                </select> <br></br>
                                
                                
                                <select class="form-control form-select" id="pricePref">
                                    <option value="None">Select...</option>
                                    <option>$</option>
                                    <option>$$</option>
                                    <option>$$$</option>
                                </select>
                                <br></br>
                                <label htmlFor="text-input">Confirm Password: </label><br></br>
                                <input type="password" class="form-control" id="confirm_password" /><br></br>

                                <input class="btn btn-secondary" type="submit" value="Update" />
                            </form>
                        </div>
                    </header>
                </header2>
            </div>
        );
    }
}
export default ManageAccount;
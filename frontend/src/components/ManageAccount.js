import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

var username, email;
class ManageAccount extends Component {
    state = {
        isLoading: true,
        currAccount: [],
        accounts: [],
        loggedin: false
      };

   handleSubmit = (event) => {
        const {currAccount, accounts} = this.state;
        var newUser = new Object();
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var confirm_password = document.getElementById("confirm_password").value;
        let valid = true;
        if (confirm_password != currAccount.password){
            alert("Password Authentication Failed");
            return 1;
        }

        for (let i = 0; i < accounts.length; i++){
            if (email == accounts[i].email && email != currAccount.email){
                alert("Email is already used by another user");
                valid = false;
            }
            if (username == accounts[i].username && username != currAccount.username){
                alert("Username is already used by another user");
                valid = false;
            }
        }
        if (valid){
            var newUser = new Object();
            newUser.username = username;
            newUser.email = email;
            //Making JSON String
            var jsonString = JSON.stringify(newUser);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonString
            };
            fetch('updateaccount', requestOptions)
        }
   }
   async componentDidMount() {
    const response = await fetch('currentaccount');
    const body = await response.json();
    const response2 = await fetch('accounts');
    const body2 = await response2.json();
    const response3 = await fetch('isloggedin');
    const body3 = await response3.json();
    this.setState({ currAccount: body, isLoading: false, accounts: body2, loggedin: body3});
   }

   render() {
        const {currAccount, isLoading} = this.state;
    
        /*if (loggedin){
            this.props.history.push("/");
        }*/
        if (isLoading){
            return <p>Loading...</p>;
        }
        return (
            <div>
            <NavbarLoggedIn/>
            <header2>
            <h2>Manage Account</h2>
            <header className="App-header" style={{width: '50%'}}>
            <div className="formBackground"><br></br>
            <h5>Username: { currAccount.username }</h5>
            <h5>Email: { currAccount.email } </h5><br></br>
            <h6>Update Information</h6>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="text-input">Update Username: </label><br></br>
                <input class="form-control" id="username" placeholder={ currAccount.username }/><br></br>
                <label htmlFor="text-input">Update Email: </label><br></br>
                <input class="form-control" id="email" placeholder={ currAccount.email }/><br></br>
                <label htmlFor="text-input">Confirm Password: </label><br></br>
                <input type="password" class="form-control" id="confirm_password"/><br></br>

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
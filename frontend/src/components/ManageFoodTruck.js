import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ManageFoodTruck extends Component {
    
   handleSubmit(event) {
        alert("Updated");

   }
   componentDidMount() {
   }
   render() {
       return (
            <div>
            <NavbarLoggedIn/>
            <header2>
            <h2>Manage Food Truck</h2>
            <header className="App-header" style={{width: '60%'}}>
            <div className="formBackground"><br></br>
            <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label>Food Truck Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name"/>
                </div>
                <div class="form-group col-md-6">
                <label>Type</label>
                <select class="form-control" id='type'>
                    <option>American</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Asian</option>
                    <option>Seafood</option>
                    <option>Indian</option>
                    <option>German</option>
                    <option>Drinks</option>
                </select>
                </div>
            </div>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label>City</label>
                <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="form-group col-md-4">
                <label>State</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div class="form-group col-md-2">
                <label>Zip</label>
                <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label>Upload Menu</label>
                    <input type="file" id="menu"/>
                </div>
                <div class="form-group col-md-6">
                    <label>Change Route</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>
            <button type="submit" class="btn btn-secondary">Create</button>
            <button type="button" class="btn btn-secondary" style={{float: "right"}}>Reset Information</button>
            </form>
            </div>
            </header>
            </header2>
           </div>
           );
   }
}
export default ManageFoodTruck;
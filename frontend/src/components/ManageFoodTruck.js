import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ManageFoodTruck extends Component {
    state = {
        truck: []
    };

    
   handleSubmit(event) {
        var updatedTruck = new Object();
        updatedTruck.name = document.getElementById("name").value;
        updatedTruck.type = document.getElementById("type").value;
        updatedTruck.address = document.getElementById("inputAddress").value;
        updatedTruck.city = document.getElementById("inputCity").value;
        updatedTruck.state = document.getElementById("inputState").value;
        updatedTruck.zipcode = document.getElementById("inputZip").value;
        updatedTruck.price = document.getElementById("inputPrice").value;

        var jsonString = JSON.stringify(updatedTruck);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonString
        };
        fetch('updatetruck/'+localStorage.getItem("TruckID"), requestOptions)
        localStorage.removeItem("TruckID");
        this.props.history.push("/dashboard/owner");
   }

   resetInfo(){
        const { truck } = this.state;
        document.getElementById("name").value = "";
        document.getElementById("type").value = "";
        document.getElementById("inputAddress").value = truck.address;
        document.getElementById("inputCity").value = "";
        document.getElementById("inputState").value = truck.state;
        document.getElementById("inputZip").value = "";
        document.getElementById("inputPrice").value = truck.priceRange;
   }

   async componentDidMount() {
        const response = await fetch('/foodtrucks/' + localStorage.getItem("TruckID"));
        const body = await response.json();
        this.setState({ truck: body});
   }

   render() {
        const { truck } = this.state;
       
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
                <input type="text" class="form-control" id="name" placeholder={truck.name}/>
                </div>
                <div class="form-group col-md-6">
                <label>Type</label>
                <select class="form-control" id='type' placeholder={truck.type}>
                    <option hidden>Select...</option>
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
                <input type="text" class="form-control" id="inputAddress" placeholder={truck.address}/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label>City</label>
                <input type="text" class="form-control" id="inputCity" placeholder={truck.city}/>
                </div>
                <div class="form-group col-md-4">
                <label>State</label>
                <select id="inputState" class="form-control" placeholder={truck.state}>
                    <option>TX</option>
                    <option>OK</option>
                    <option>CA</option>
                    <option>AR</option>
                    <option>LA</option>
                </select>
                </div>
                <div class="form-group col-md-2">
                <label>Zip</label>
                <input type="text" class="form-control" id="inputZip" placeholder={truck.zipcode}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label>Upload Menu</label>
                    <input type="file" id="menu"/>
                </div>
                <div class="form-group col-md-2">
                    <label>Change Price</label>
                    <select id="inputPrice" class="form-control" placeholder={truck.priceRange}>
                        <option hidden>Select...</option>
                        <option>$</option>
                        <option>$$</option>
                        <option>$$$</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label>Change Route</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>
            <button type="submit" class="btn btn-secondary" onClick={() => this.handleSubmit()}>Update</button>
            <button type="button" class="btn btn-secondary" style={{float: "right"}} onClick={() => this.resetInfo()}>Reset Information</button>
            </form>
            </div>
            </header>
            </header2>
           </div>
           );
   }
}
export default ManageFoodTruck;
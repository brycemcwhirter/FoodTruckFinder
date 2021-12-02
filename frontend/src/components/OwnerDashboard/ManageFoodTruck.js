import React, { Component } from 'react';
import '../../App.css';
import NavbarLoggedIn from '../NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ManageFoodTruck extends Component {
    state = {
        truck: [],
        routes: []
    };

    checkValidTime(timeStr){
        var validTime = true;
        const time = timeStr.split(":");
        if (time.length != 2){
            validTime = false;
        } else {
            const otherTime = time[1].split(" ");
            if (otherTime.length != 2){
                validTime = false;
            } else {
                if (!Number.isInteger(parseInt(time[0], 10)) || !Number.isInteger(parseInt(otherTime[0], 10))
                 || !(otherTime[1] == "AM" || otherTime[1] == "PM")){
                    validTime = false;
                }else{
                    var hr = parseInt(time[0], 10);
                    var min = parseInt(otherTime[0], 10);
                    if (hr > 12 || hr < 1 || min > 59 || min < 0){
                        validTime = false;
                    }
                }
            }
        }
        return validTime;
    }

    validOpenClose(open, close){
        var valid = true;
        var firstTime = open.split(":");
        var secondTime = close.split(":");
        var firstTime2 = firstTime[1].split(" ");
        var secondTime2 = secondTime[1].split(" ");
        if (firstTime2[1] == "PM" && secondTime2[1] == "AM"){
            valid = false;
        } else {
            if (firstTime2[1] == secondTime2[1]){
                var hr1 = parseInt(firstTime[0], 10);
                var hr2 = parseInt(secondTime[0], 10);
                var min1 = parseInt(firstTime2[0], 10);
                var min2 = parseInt(secondTime2[0], 10);
                if (firstTime2[1] == secondTime2[1] && hr1 == hr2 && min1 >= min2){
                    valid = false;
                } else if (firstTime2[1] == secondTime2[1] && hr1 > hr2 && hr1 != 12){
                    valid = false;
                }
            }
        }
        return valid;
    }

    
   async handleSubmit(event) {
        var updatedTruck = new Object();
        updatedTruck.name = document.getElementById("name").value;
        updatedTruck.type = document.getElementById("type").value;
        updatedTruck.address = document.getElementById("inputAddress").value;
        updatedTruck.city = document.getElementById("inputCity").value;
        updatedTruck.state = document.getElementById("inputState").value;
        updatedTruck.zipcode = document.getElementById("inputZip").value;
        updatedTruck.price = document.getElementById("inputPrice").value;
        updatedTruck.operational = document.getElementById("inputOperational").value;
        updatedTruck.openTime = document.getElementById("inputOpen").value;
        updatedTruck.closeTime = document.getElementById("inputClose").value;

        var validOpen = this.checkValidTime(updatedTruck.openTime);
        var validClose = this.checkValidTime(updatedTruck.closeTime);

        if (!validOpen){
            alert("The open time is not valid");
        } else if (!validClose){
            alert("The close time is not valid");
        }else {
            var openClose = this.validOpenClose(updatedTruck.openTime, updatedTruck.closeTime)
            if (!openClose){
                alert("Your chosen times are not valid.  Make sure that the open time is before the close time.");
            } else {
        
                var jsonString = JSON.stringify(updatedTruck);

                //alert(updatedTruck.latitude);
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: jsonString
                };
                fetch('updatetruck/'+localStorage.getItem("TruckID"), requestOptions)
                
                localStorage.removeItem("Action");
                localStorage.removeItem("TruckID");
                this.props.history.push("/dashboard/owner");
            
            }
        }
   }

   resetInfo(){
        const { truck } = this.state;
        document.getElementById("name").value = "";
        document.getElementById("type").value = "Select...";
        document.getElementById("inputAddress").value = truck.address;
        document.getElementById("inputCity").value = "";
        document.getElementById("inputState").value = truck.state;
        document.getElementById("inputZip").value = "";
        document.getElementById("inputPrice").value = "Select...";
        document.getElementById("inputOperational").value = "Select...";
   }

   deleteTruck(){
        alert("Deleting Truck");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('removefoodtruck/'+localStorage.getItem("TruckID"), requestOptions);
        localStorage.removeItem("TruckID");
        localStorage.removeItem("Action");
        this.props.history.push("/dashboard/owner");
   }

   manageRoutes(){
       this.props.history.push("/manageroutes");
   }

   async componentDidMount() {
        const response = await fetch('/foodtrucks/' + localStorage.getItem("TruckID"));
        const body = await response.json();
        const response2 = await fetch('/gettruckroutes/' + localStorage.getItem("TruckID"));
        const body2 = await response2.json();
        this.setState({ truck: body, routes: body2});
   }

   render() {
        const { truck, routes } = this.state;

        if (localStorage.getItem("UserID") == null){
            this.props.history.push("/");
            alert("You must be logged in to view this page");
        } else if (localStorage.getItem("Role") == "CUSTOMER"){
            alert("You must be a food truck owner in order to view this page");
            this.props.history.push("/dashboard/customer");
        } else if (localStorage.getItem("Action") != "manageTruck"){
            alert("You must go to this page through the owner dashboard");
            this.props.history.push("/dashboard/owner");
        }

        const routesList = routes.map(route => {
            return <div>
                <label>Route: </label>
                <label>Longitude: </label>
                <input type="text" class="form-control" placeholder={route.longitude}/>
                <label>Latitude: </label>
                <input type="text" class="form-control" placeholder={route.latitude}/>
            </div>
        });
       
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
                <div class="form-group col-md-2">
                    <label>Operational</label>
                    <select id="inputOperational" class="form-control">
                        <option hidden>Select...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label>Open Time</label>
                    <input id="inputOpen" type="text" class="form-control"/>   
                </div>
                <div class="form-group col-md-2">
                    <label>Close Time</label>
                    <input id="inputClose" type="text" class="form-control"/>    
                </div>
            </div><br></br>
            <button type="submit" class="btn btn-secondary" onClick={() => this.handleSubmit()}>Update</button>
            <div class="divider"/>
            <button type="button" class="btn btn-secondary" onClick={() => this.resetInfo()}>Reset Information</button>
            <div class="divider"/>
            <button type="button" class="btn btn-info" onClick={() => this.manageRoutes()}>Manage Routes</button>
            <button type="button" class="btn btn-danger" style={{float: "right"}} onClick={() => this.deleteTruck()}>Delete Truck</button>
            
            
            </form>
            </div>
            </header>
            </header2>
            
           </div>
           );
   }
}
export default ManageFoodTruck;
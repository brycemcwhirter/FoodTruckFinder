import React, { Component } from 'react';
import '../../App.css';
import NavbarLoggedIn from '../NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class AddFoodTruck extends Component {

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

    handleSubmit = (e) => {
        // establishing variables
        var name = document.getElementById("name").value;
        var type = document.getElementById("type").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var zipcode = document.getElementById("zip").value;
        var price = document.getElementById("price").value;

        var newTruck = new Object();
        newTruck.name = name;
        newTruck.type = type;
        newTruck.address = address;
        newTruck.city = city;
        newTruck.state = state;
        newTruck.zipcode = zipcode;
        newTruck.price = price;

        newTruck.openTime = document.getElementById("inputOpen").value;
        newTruck.closeTime = document.getElementById("inputClose").value;

        var validOpen = this.checkValidTime(newTruck.openTime);
        var validClose = this.checkValidTime(newTruck.closeTime);

        if (name == "" || type == "" || address == "" || city == "" || state == "Choose..." || zipcode == "" || price == "" 
            || newTruck.openTime == "" || newTruck.closeTime == ""){
            alert("You must fill out every field");
        } else if (!validOpen){
            alert("The open time is not valid");
        } else if (!validClose){
            alert("The close time is not valid");
        }else {
            var openClose = this.validOpenClose(newTruck.openTime, newTruck.closeTime)
            if (!openClose){
                alert("Your chosen times are not valid.  Make sure that the open time is before the close time.");
            } else {
                //Making JSON String
                var jsonString = JSON.stringify(newTruck);
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: jsonString
                };
                fetch('foodtrucks/'+localStorage.getItem("UserID"), requestOptions)
                    .then(() => {
                    })
                alert("Created FoodTruck: " + newTruck.name);
                this.props.history.push('/dashboard/owner');
            }
        }

   }

   cancel(){
       this.props.history.push('/dashboard/owner');
   }

   componentDidMount() {
   }

   render() {

        if (localStorage.getItem("UserID") == null){
            this.props.history.push("/");
            alert("You must be logged in to view this page");
        } else if (localStorage.getItem("Role") == "CUSTOMER"){
            alert("You must be a food truck owner in order to view this page");
            this.props.history.push("/dashboard/customer");
        }

       return (
            <div>
            <NavbarLoggedIn/>
            <header2>
            <h2>Add New Food Truck</h2>
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
                <input type="text" class="form-control" id="address" placeholder="1234 Main St"/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label>City</label>
                <input type="text" class="form-control" id="city"/>
                </div>
                <div class="form-group col-md-4">
                <label>State</label>
                <select id="state" class="form-control">
                    <option selected>Choose...</option>
                    <option>AL</option><option>AK</option><option>AZ</option><option>AR</option><option>CA</option>
                    <option>CO</option><option>CT</option><option>DE</option><option>FL</option><option>GA</option>
                    <option>HI</option><option>ID</option><option>IL</option><option>IN</option><option>IA</option>
                    <option>KS</option><option>KY</option><option>LA</option><option>ME</option><option>MD</option>
                    <option>MA</option><option>MI</option><option>MN</option><option>MS</option><option>MO</option>
                    <option>MT</option><option>NE</option><option>NV</option><option>NH</option><option>NJ</option>
                    <option>NM</option><option>NY</option><option>NC</option><option>ND</option><option>OH</option>
                    <option>OK</option><option>OR</option><option>PA</option><option>RI</option><option>SC</option>
                    <option>SD</option><option>TN</option><option>TX</option><option>UT</option><option>VT</option>
                    <option>VA</option><option>WA</option><option>WV</option><option>WI</option><option>WY</option>
                </select>
                </div>
                <div class="form-group col-md-2">
                <label>Zip</label>
                <input type="text" class="form-control" id="zip"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label>Price Type</label>
                    <select id="price" class="form-control">
                        <option>$</option>
                        <option>$$</option>
                        <option>$$$</option>
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
            </div><div style={{paddingLeft: "175px"}}>Enter time in format HH:MM XM</div>
            <button type="submit" class="btn btn-secondary" onClick={() => this.handleSubmit()}>Create</button>
            <div class="divider"/>
            <button type="submit" class="btn btn-danger" onClick={() => this.cancel()}>Cancel</button>
            </form>
            </div>
            </header>
            </header2>
           </div>
           );
   }
}
export default AddFoodTruck;
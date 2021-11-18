import React, { Component } from 'react';
import '../App.css';
import NavbarLoggedIn from './NavBarLoggedIn';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class ManageRoutes extends Component {
    state = {
        truck: [],
        routes: []
    };

    
   handleSubmit(event) {
    const requestOptions1 = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    
    fetch('removeroutes/'+localStorage.getItem("TruckID"), requestOptions1);

    for (let i = 0; i < 5; i++){
        var route = new Object();
        route.numInRoute = i+1;
        route.longitude = document.getElementById((i+1) +"Long").value;
        route.latitude = document.getElementById((i+1) +"Lat").value;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(route)
        };
        
        fetch('addroute/'+localStorage.getItem("TruckID"), requestOptions);
    }
    
    this.props.history.push("/managefoodtruck");
   }

   cancel(){
    this.props.history.push("/managefoodtruck");
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
        }

        const routesList = routes.map((route, index) => {
            document.getElementById((index+1)+"Long").value = route.longitude;
            document.getElementById((index+1)+"Lat").value = route.latitude;
        });
       
       return (
            <div>
            <NavbarLoggedIn/>
            <header2>
            <h2>Manage Food Truck Routes</h2>
            <header className="App-header" style={{width: '60%'}}>
            <div className="formBackground"><br></br>
            <h6>Currently has {routes.length} routes</h6><br></br>
            <form>
            <label>Stop 1: </label><div class="divider"/>
            <label>Longitude</label><div class="divider"/>
            <input type="text" class="" id="1Long"/><div class="divider"/>
            <label>Latitude</label><div class="divider"/>
            <input type="text" class="" id="1Lat"/><div class="divider"/><br></br>

            <label>Stop 2: </label><div class="divider"/>
            <label>Longitude</label><div class="divider"/>
            <input type="text" class="" id="2Long"/><div class="divider"/>
            <label>Latitude</label><div class="divider"/>
            <input type="text" class="" id="2Lat"/><div class="divider"/><br></br>

            <label>Stop 3: </label><div class="divider"/>
            <label>Longitude</label><div class="divider"/>
            <input type="text" class="" id="3Long"/><div class="divider"/>
            <label>Latitude</label><div class="divider"/>
            <input type="text" class="" id="3Lat"/><div class="divider"/><br></br>

            <label>Stop 4: </label><div class="divider"/>
            <label>Longitude</label><div class="divider"/>
            <input type="text" class="" id="4Long"/><div class="divider"/>
            <label>Latitude</label><div class="divider"/>
            <input type="text" class="" id="3Lat"/><div class="divider"/><br></br>

            <label>Stop 5: </label><div class="divider"/>
            <label>Longitude</label><div class="divider"/>
            <input type="text" class="" id="4Long"/><div class="divider"/>
            <label>Latitude</label><div class="divider"/>
            <input type="text" class="" id="3Lat"/><div class="divider"/><br></br>
            <button type="submit" class="btn btn-sm btn-success" onClick={() => this.handleSubmit()}>Submit</button>
            <div class="divider"/>
            <button type="submit" class="btn btn-sm btn-danger" onClick={() => this.cancel()}>Cancel</button>
            </form>
            <routesList/>
            <div id="newRoutes">

            </div>
            </div>
            </header>
            </header2>
            
           </div>
           );
   }
}
export default ManageRoutes;
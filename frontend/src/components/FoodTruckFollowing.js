import React, { Component } from 'react';



class FoodTruckFollowing extends Component{

    state = {
        isLoading: true,
        trucks: [],
    }

    async componentDidMount(){
<<<<<<< HEAD
        const response = await fetch('/subscribedtrucks/'+localStorage.getItem("UserID"));  // send account info to backend to get 5 recommended trucks
=======
        const response = await fetch('/getsubscriptions/'+localStorage.getItem("UserID"));  // send account info to backend to get 5 recommended trucks
>>>>>>> 45f93a6b0f7ee20a3d593c9299b3956d64c14d0c
        const body = await response.json();
        this.setState({ isLoading: false, trucks: body});
    }

    render(){

        const {isLoading, trucks} = this.state;


        const truckList = trucks.map(truck => {
            return (<tr key={truck.id}>
              <td>{truck.name}</td>
              <td>{truck.type}</td>
<<<<<<< HEAD
              <td>{truck.address}  {truck.city}, {truck.state}</td>
              <td>9 to 5 TEST</td>
              <td>BLAH BLAH</td>  
=======
              <td>{truck.priceRange}</td>
              <td>{truck.address},  {truck.city}, {truck.state}</td>
              <td>{this.truckRating(truck)}</td>
              <td>
                <a class="btn btn-outline-secondary btn-sm" onClick={() => this.viewTruck(truck.id)} href="/viewfoodtruck">View Page</a>
              </td>
          
>>>>>>> 45f93a6b0f7ee20a3d593c9299b3956d64c14d0c
            </tr>
            )
        });



        if(isLoading){
            return(
                <h1>loading....</h1>
            )
        }


        if(truckList.length === 0){
            return(
                <div>
                
                <h2>You're not following any food trucks yet</h2>

                <h3>Click on Dashboard to go follow some trucks</h3>

                </div>
                
            )
        }

        return(

        <div>

        <div className="tablebg table-wrapper-scroll-y my-custom-scrollbar" style={{ color: 'black' }}>
        <table class="table table-striped table-hover owner-table-style">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Address</th>
                <th scope="col">Hours</th>
                <th scope="col">Rating</th>
                </tr>
            </thead>
            <tbody className="tableColors">
                

                {truckList}
                
                

            </tbody>
        </table>
        </div>
    </div>
        );
    }

}

export default FoodTruckFollowing;
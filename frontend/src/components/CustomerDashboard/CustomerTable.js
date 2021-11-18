import React, { Component } from 'react';
import '../../App.css';
import CustomerDashboard from '../CustomerDashboard';
import SearchFoodTruck from './SearchFoodTrucks';


class Table extends Component{

    state = {
        isLoading: true,
        trucks: [],
    }



    async componentDidMount(){
        const response = await fetch('/recommendedtrucks/'+localStorage.getItem("UserID"));  // send account info to backend to get 5 recommended trucks
        const body = await response.json();
        this.setState({ isLoading: false, trucks: body});
    }

    viewTruck(id){
        localStorage.setItem("TruckID", id);
        localStorage.setItem("Action", "viewTruck");
    }

    truckRating(truck){
        if (truck.rating > 0){
            for (let i = 0; i < truck.rating; i++){
                return <span class="fa fa-star checked"></span>
            }
            for (let i = truck.rating; i < 5; i++){
                return <span class="fa fa-star"></span>
            }
        } else {
            return <div>Not Yet Rated</div>
        }
    };


    render(){
        const {isLoading, trucks} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const truckList = trucks.map(truck => {
            return (<tr key={truck.id}>
              <td>{truck.name}</td>
              <td>{truck.type}</td>
              <td>{truck.priceRange}</td>
              <td>{truck.address},  {truck.city}, {truck.state}</td>
              <td>{this.truckRating(truck)}</td>
              <td>
                <button class="btn btn-outline-secondary btn-sm" onClick={() => this.viewTruck(truck.id)}>View Page</button>
              </td>
          
            </tr>
            )
        });


        return(
        
        <div>
        <SearchFoodTruck/>


        <div className="tablebg table-wrapper-scroll-y my-custom-scrollbar" style={{color: 'black'}}>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Price</th>
                <th scope="col">Address</th>
                <th scope="col">Rating</th>
                <th scope="col">View</th>
                </tr>
            </thead>
            <tbody className="tableColors">
                

                {truckList}
                
                

            </tbody>
        </table>
    </div>
    </div>
)
    }
}

export default Table;
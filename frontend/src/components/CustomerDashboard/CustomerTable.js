import React, { Component } from 'react';
import SearchFoodTruck from './SearchFoodTrucks';

import GoogleMaps from './GoogleMaps'

class Table extends Component{

    state = {
        isLoading: true,
        trucks: [],
        currAccount: [],
        id: -1
    }



    async componentDidMount(){
        const acctresponse = await fetch('/currentaccount');          // get account info (i.e. food preference and budget)
        const acctbody = await acctresponse.json();

        const uid = acctbody.id;
        const jsonBody = JSON.stringify(uid);

        /*const requestOptions = {
            method: 'GET',
            headers: { 'Content-type': 'application/json' },
            body: jsonBody
        };*/
        const response = await fetch('/recommendedTrucks');  // send account info to backend to get 5 recommended trucks
        const body = await response.json();
        this.setState({ isLoading: false, trucks: body, currAccount: acctbody, id: uid});
    }


    render(){

        const {isLoading, trucks, id} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const truckList = trucks.map(truck => {
            return (<tr key={truck.id}>
              <td>{truck.name}</td>
              <td>{truck.type}</td>
              <td>{truck.address}  {truck.city}, {truck.state}</td>
              <td>9 to 5 TEST</td>
              <td>BLAH BLAH</td>
          
          
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
    
    
)
    }
}

export default Table;
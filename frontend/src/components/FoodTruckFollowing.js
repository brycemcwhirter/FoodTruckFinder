import React, { Component } from 'react';



class FoodTruckFollowing extends Component{

    state = {
        isLoading: true,
        trucks: [],
        currAccount: []
    }

    async componentDidMount(){
        const acctresponse = await fetch('/currentaccount');
        const acctbody = await acctresponse.json();

        const id = acctbody.id;


        const response = await fetch('/subscribedTrucks/'+id)
        const body = await response.json();
        this.setState({ isLoading: false, trucks: body, currAccount: acctbody});
    }

    render(){

        const {isLoading, trucks} = this.state;


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
import React, { Component } from 'react';



class CustomerSubscriptions extends Component{

    state = {
        isLoading: true,
        trucks: [],
    }

    async componentDidMount(){
        const response = await fetch('/getsubscriptions/'+localStorage.getItem("SearchUserID"));  // send account info to backend to get 5 recommended trucks
        const body = await response.json();
        this.setState({ isLoading: false, trucks: body});
    }

    render(){

        const {isLoading, trucks} = this.state;


        const truckList = trucks.map(truck => {
            return (<tr key={truck.id}>
              <td>{truck.name}</td>
              <td>{truck.type}</td>
              <td>{truck.priceRange}</td>
              <td>{truck.address},  {truck.city}, {truck.state}</td>
              <td>{this.truckRating(truck)}</td>
          
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
                
                <h2>This account has not subscribed to any food truck yet.</h2>

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

export default CustomerSubscriptions;
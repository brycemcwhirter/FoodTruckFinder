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

        const body = await response.json();
        this.setState({ isLoading: false, trucks: body, currAccount: acctbody});
    }

    render(){
        return(
            <h1>Hey</h1>
        );
    }

}

export default FoodTruckFollowing;
import React, { Component } from 'react';


class SearchFoodTruck extends Component{
    state = {
        trucks: []
    }
    async search(){
        const {trucks} = this.state;

        var searchStr = document.getElementById("search").value;
        if (searchStr == ""){
            alert("Please type in a name in the search bar");
        } else {
            for (let i = 0; i < trucks.length; i++){
                alert(i);
            }
            alert("Done");
            /*if (truck == null){
                alert("Not Found");
            } else {
                alert("Found");
            } */         
        }

    }

    async componentDidMount(){
        const response = await fetch('accounts');
        const body = await response.json();
        this.setState({ trucks : body});
    }

    render(){
        return(
            <><form class="form-inline my-2 my-lg-0">
                <input class="form-control-lg mr-sm-2" id="search" type="text" placeholder="Search Food Trucks" aria-label="Search" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit" onClick={() => this.search()}>Search</button>
            </form><br></br></>
        )
    }
}

export default SearchFoodTruck;
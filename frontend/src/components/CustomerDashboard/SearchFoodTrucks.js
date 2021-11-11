import React, { Component } from 'react';


class SearchFoodTruck extends Component{

    render(){
        return(
            <><form class="form-inline my-2 my-lg-0">
                <input class="form-control-lg mr-sm-2" type="search" placeholder="Search Food Trucks" aria-label="Search" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form><br></br></>
        )
    }
}

export default SearchFoodTruck;
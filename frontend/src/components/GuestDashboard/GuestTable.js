import React, { Component } from 'react';
import '../../App.css';

class GuestTable extends Component{

    state = {
        isLoading: true,
        trucks: [],
    }



    async componentDidMount(){
        const response = await fetch('/allfoodtrucks/');  // send account info to backend to get 5 recommended trucks
        const body = await response.json();
        this.setState({ isLoading: false, trucks: body});
    }

    viewTruck(id){
        localStorage.setItem("ValidSearch", 1);
        localStorage.setItem("TruckID", id);
        localStorage.setItem("Action", "viewTruck");
    }

    search = (event) => {
        var searchType = document.getElementById("searchType").value;

        var searchStr = document.getElementById("search").value;
        if (searchStr == ""){
            localStorage.setItem("ValidSearch", 0);
            alert("Please type in a name in the search bar");
        } else {
            localStorage.setItem("ValidSearch", 1); 
            localStorage.setItem("SearchType", searchType);
            localStorage.setItem("SearchStr", searchStr);      
        }

    }

    truckRating(truck){
        if (truck.rating >= 0){
            if (truck.rating == 1 || truck.rating == 0){
                return <div><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>
            } else if (truck.rating == 2){
                return <div><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>
            }else if (truck.rating == 3){
                return <div><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div>
            }else if (truck.rating == 4){
                return <div><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span></div>
            }else if (truck.rating == 5){
                return <div><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></div>
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
                <a class="btn btn-outline-secondary btn-sm" onClick={() => this.viewTruck(truck.id)} href="/viewfoodtruck">View Page</a>
              </td>
          
            </tr>
            )
        });


        return(
        
        <div>
        <><form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" id="search" type="text" placeholder="Search Food Trucks" aria-label="Search" />
                <select class="form-control" id="searchType">
                    <option>Name</option>
                    <option>Type</option>
                    <option>City</option>
                </select>
                <div class="divider"/>
                <a class="btn btn-secondary my-2 my-sm-0" type="submit" onClick={() => this.search()}  href="/searchfoodtruck">Search</a>
            </form><br></br></>


        <div className="tablebg table-wrapper-scroll-y my-custom-scrollbar" style={{color: 'black'}}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

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

export default GuestTable;
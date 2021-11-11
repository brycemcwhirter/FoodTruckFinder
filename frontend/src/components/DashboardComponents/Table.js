import React, { Component } from 'react';
import CustomerDashboard from '../CustomerDashboard';
import SearchFoodTruck from './SearchFoodTrucks';
// import {array} from '../CustomerDashboard';

class Table extends Component{
    render(){
        return(
        
        <div>
        <SearchFoodTruck/>


        <div className="tablebg table-wrapper-scroll-y my-custom-scrollbar" style={{color: 'black'}}>

        


        <table class="table table-striped table-hover tableColors">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Address</th>
                <th scope="col">Hours</th>
                <th scope="col">Rating</th>
                </tr>
            </thead>
            
            {/*
                <tr>
                <th scope="row">{array[i].name}</th>
                <td>{array[i].type}</td>
                <td>{array[i].address}</td>
                <td>{array[i].rating}</td>
                {/*<td>{foodtruck[i].hours}</td>    // how is this data claimed?
                </tr>
                */
            }

            < tbody className="tableColors" >
                <tr>
                <th scope="row">Waco Chi</th>
                <td>Drinks</td>
                <td>123 18th Av</td>
                <td>11am - 9pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
                <tr>
                <th scope="row">Pop's Lemonade</th>
                <td>Drinks</td>
                <td>456 Speight Ave</td>
                <td>10am - 8:30pm</td>
                <td><span class="fa fa-star checked"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
)
    }
}

export default Table;
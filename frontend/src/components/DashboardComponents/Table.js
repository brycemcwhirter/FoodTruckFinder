import React, { Component } from 'react';

class Table extends Component{
    render(){
        return(
        <div className="tablebg" style={{color: 'black'}}>

        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Address</th>
            <th scope="col">Hours</th>
            <th scope="col">Rating</th>
            </tr>
        </thead>
        <tbody>
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
        </tbody>
</table>
</div>
)
    }
}

export default Table;
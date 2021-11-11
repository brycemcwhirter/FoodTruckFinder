import React, { Component } from 'react';

class Sidebar extends Component {

    render(){
        return(
            <div id="sidebar" className="sidebar left">
            <br></br><h5>Recommended Trucks</h5><br></br>
                    <ul class="list-group" style={{color: 'darkgreen'}}>
                        <li class="list-group-item"><a href="/account">Option 1</a></li>
                        <li class="list-group-item"><a href="/account">Option 2</a></li>
                        <li class="list-group-item"><a href="/account">Option 3</a></li>
                        <li class="list-group-item"><a href="/account">Option 4</a></li>
                        <li class="list-group-item"><a href="/account">Option 5</a></li>
                    </ul>
        </div>
        )
    }

}

export default Sidebar;
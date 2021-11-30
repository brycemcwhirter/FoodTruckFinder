import React, { Component } from 'react';
import Navbar from './Navbar';
import avo from '../images/avo.png';
import '../App.css';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <header2>
                <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
                <header className="App-header">
                <h2>About Page</h2>
                <div className="formBackground">
                <p>Made by<br></br>Bryce McWhirter, Sheldon Smith, Malik Mohamedali, and Tom Pechulis</p>
                </div>
                </header>
                </header2>
            </div>

        );
    }

}
export default About;
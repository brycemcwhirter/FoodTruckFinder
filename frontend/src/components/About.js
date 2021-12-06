import React, { Component } from 'react';
import Navbar from './Navbar';
import avo from '../images/avo.png';
import '../App.css';

class About extends Component {
    render() {
        if (localStorage.getItem("UserID") != null){
            alert("You cannot access this page while logged in");
            this.props.history.push('/dashboard/customer');
        }
        return (
            <div>
                <Navbar/>
                <header2>
                <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
                <header className="App-header" style={{ width: '50%' }}>
                <h2 style={{textAlign: "center"}}>About Page</h2>
                <div className="formBackground">
                <p>This application was created by Bryce McWhirter (Team Lead), Sheldon Smith (Requirements Engineer), 
                    Malik Mohamedali (Design Engineer), and Tom Pechulis (Quality Assurance Engineer).
                    This application was made for the course CSI 3372 in Fall 2021 at Baylor University.
                </p>
                </div>
                </header>
                </header2>
            </div>

        );
    }

}
export default About;
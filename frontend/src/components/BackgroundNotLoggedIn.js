import React, { Component } from 'react';
import UIBackground from "../videos/UIBackground.mp4"

import '../App.css';

class BackgroundNotLoggedIn extends Component{

    render(){
        return(
            <div>
                <video
           autoPlay
           loop
           muted
           style={{
             position: "absolute", 
             width: "100%",
             left: "50%", 
             top: "50%", 
             height: "100%",
             objectFit: "cover", 
             transform: "translate(-50%, -50%)",
             zIndex: "-1",
             background: "#6fa00f",
             opacity: ".5"
           }}>
             <source src = {UIBackground} type="video/mp4"/>
             </video>
            </div>
        )
    }

}

export default BackgroundNotLoggedIn
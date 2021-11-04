import React, { Component } from 'react';
import avo from '../images/avo.png';
import '../App.css';
import Navbar from './Navbar';
import BackgroundNotLoggedIn from './BackgroundNotLoggedIn';

class App extends Component {
  
/*
Now the App Component just acts as an entry point for other components/pages
*/
   render() {
       return (
         <div>
           <BackgroundNotLoggedIn/>
           <Navbar/>
           <div className="overlay">
            <h1>R</h1>  
            <img src={avo} className="App-logo" alt="avo" width="50" height="47.5" />
            <h1>lling Guacamole</h1>
            <div className="color-overlay"></div>
           </div>
         </div>
      );
   }
}
export default App;
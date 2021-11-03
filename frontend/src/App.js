import React, { Component } from 'react';
import avo from './avo.png';
import './App.css';
import Navbar from './Navbar';
class App extends Component {

  constructor(){
    super();

    this.state = {
      loggedInStatus: "FALSE", 
      user: {}
    }
  }
  

   render() {
       return (
         <div>
           <Navbar/>
           <header2>
           <h2>Rolling Guacamole - Home Page</h2>  
           <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
           <header className="App-header">
             <h4 className="center">Welcome to the Food Truck Application</h4>
           </header>
           </header2>
         </div>
      );
   }
}
export default App;
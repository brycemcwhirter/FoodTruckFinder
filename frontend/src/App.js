import React, { Component } from 'react';
import './App.css';
class App extends Component {
  
/*
Now the App Component just acts as an entry point for other components/pages
*/
   render() {
       return (
         <div>
           <header className="App-header">
           <h2>Rolling Guacamole - Home Page</h2>
           <div>
             <nav>
               <a href = "\test">Test Component</a>
               <br/>
               <a href = "\login">Login</a>
             </nav>
           </div>
           </header>
         </div>
           );
   }
}
export default App;
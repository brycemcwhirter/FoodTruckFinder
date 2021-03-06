import React, { Component } from 'react';
import avo from '../images/avo.png';
import Navbar from './Navbar';
import BackgroundNotLoggedIn from './BackgroundNotLoggedIn';

class App extends Component {
  
   state = {
      isLoading: true
  }



  async componentDidMount(){
      localStorage.clear();
      this.setState({ isLoading: false});
  }
   render() {
      const {isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

      if (localStorage.getItem("UserID") != null){
         alert("You cannot access this page while logged in");
         this.props.history.push('/dashboard/customer');
     }
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
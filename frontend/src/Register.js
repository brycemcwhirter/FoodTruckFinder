import React, { Component } from 'react';
import avo from './avo.png';
import './App.css';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class Register extends Component {
   constructor(props) {
       super(props);
       this.state = {name: '', number: '', professor: '', mode: '', semester: ["Fall", "Spring", "Summer"], message: '', level: ''};
       this.handleInputChange = this.handleInputChange.bind(this);
       this.handleChangeStatus = this.handleChangeStatus.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChangeStatus(event) {
       this.setState({level: event.target.value});
   }
   handleInputChange(event) {
       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       const name = target.name;
       this.setState({
           [name]: value
       });
   }
   handleSubmit(event) {

     alert("Login Attempted")
   }
   componentDidMount() {
   }
   render() {
       return (
            <div>
            <header2>
            <img src={avo} className="App-logo" alt="avo" width="200" height="190" />
            <h1>Register Page</h1>

            <label>Email:</label>
            <input name = "email" className="form-control" type="text"/><br></br>
            <label>Password:</label>
            <input name = "email" className="form-control" type="password"/>
            <hr></hr>
            <input name = "login" type="submit"></input>
                
            <div><small class="text-muted">Already have an account? <a href="/login">Login</a></small></div>
            </header2>
           </div>
           );
   }
}
export default Register;
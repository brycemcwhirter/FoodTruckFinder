import React, { Component } from 'react';
/*
The form which was previously present in the App component has been moved to its own separate component.
*/

class Login extends Component {
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
            <h1>Login Page</h1>

            <label>Email:</label>
            <input name = "email" className="form-control" type="text"/><br></br>
            <label>Password:</label>
            <input name = "email" className="form-control" type="password"/>
            <hr></hr>
            <input name = "login" type="submit"></input>
                
            <div><small class="text-muted">Don't have an account? <a href="/register">Create One</a></small></div>
           </div>
           );
   }
}
export default Login;

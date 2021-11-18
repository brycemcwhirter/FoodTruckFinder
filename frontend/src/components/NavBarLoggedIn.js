import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class NavbarLoggedIn extends Component {

  logout() {
    localStorage.clear();
    alert("Logging Out");
  }

   ownerDashboard(){
      return <NavItem>
        <NavLink tag={Link} to='/dashboard/owner'>Owner Dashboard</NavLink>
      </NavItem>
   }

  render() {
    if (localStorage.getItem("UserID") == null){
        this.props.history.push("/");
        alert("You must be logged in to view this page");
    }

    if (localStorage.getItem("Role") == "FOODTRUCKOWNER"){
      var button = this.ownerDashboard();
    } else {
      var button = ""
    }
    return (
      <Navbar color="dark" dark expand="md" className="navbar">
      <NavbarBrand tag={Link} to="/dashboard/customer">Home</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to='/dashboard/customer'>Customer Dashboard</NavLink>
        </NavItem>
        {button}
        <NavItem>
          <NavLink tag={Link} to='/account'>Account</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={this.logout} tag={Link} to='/'>Logout</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
           tag={Link} to='/profile'>Profile</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    )
  }
}
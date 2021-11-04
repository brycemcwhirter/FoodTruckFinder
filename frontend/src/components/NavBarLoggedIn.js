import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class NavbarLoggedIn extends Component {

  logout() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('/logout', requestOptions);
    alert("Logging Out");
  }

  render() {
    return (<div><Navbar color="dark" dark expand="md" className="navbar">
      <NavbarBrand tag={Link} to="/dashboard/customer">Home</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to='/dashboard/customer'>Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to='/account'>Account</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
<<<<<<< HEAD
            onClick={this.logout} tag={Link} to='/'>Logout</NavLink>
=======
            tag={Link} to='/'>Logout</NavLink>
>>>>>>> 22c73d6a1877d9ac9a0face84b11909393b504b8
        </NavItem>
      </Nav>
    </Navbar>
    </div>)
  }
}
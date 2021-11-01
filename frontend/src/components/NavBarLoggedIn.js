import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class NavbarLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
            tag={Link} to='/logout'>Logout</NavLink>
        </NavItem>
      </Nav>
  </Navbar>
  </div>)
  }
}
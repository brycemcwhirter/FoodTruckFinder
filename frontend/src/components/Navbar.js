import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AppNavbar extends Component {
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
    return (
    <div>
      <Navbar dark expand="md" className="navbar">
    <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to='/dashboard/guest'>Guest Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to='/login'>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={Link} to='/register'>Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={Link} to='/about'>About</NavLink>
        </NavItem>
      </Nav>
  </Navbar>
  </div>)
  }
}
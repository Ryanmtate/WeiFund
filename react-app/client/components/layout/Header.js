import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class HeaderComponent extends Component {

  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">WeiFund</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight={true}>
          <NavItem eventKey={1} href="#">Discover</NavItem>
          <NavItem eventKey={2} href="#">Start</NavItem>
          <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Mission</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Contact</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state : state
  }
}

const Header = connect(mapStateToProps)(HeaderComponent);

export default Header;

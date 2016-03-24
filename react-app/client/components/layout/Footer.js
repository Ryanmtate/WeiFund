import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Label } from 'react-bootstrap';
import * as Actions from '../../lib/actions/index';

class FooterComponent extends Component {

  componentDidMount(){
    let { Providers, dispatch } = this.props;
    let { ethereumProviderConnected, ipfsProviderConnected, ethereumProviderPending, ipfsProviderPending } = Providers;

    if(ethereumProviderPending) {
      dispatch(Actions.Providers.Ethereum(ethereumProviderConnected))
    }

    if(ipfsProviderPending) {
      dispatch(Actions.Providers.IPFS(ipfsProviderConnected))
    }

  }

  ethereumSettingsView = () => {
    let { dispatch } = this.props;
    dispatch(Actions.Views.Settings('ethereum-settings'));
  }

  ipfsSettingsView = () => {
    let { dispatch } = this.props;
    dispatch(Actions.Views.Settings('ipfs-settings'));
  }

  render(){
    let { ethereumProviderConnected, ipfsProviderConnected } = this.props.Providers;

    return (
      <Navbar fixedBottom>
        <Nav pullRight={false}>
          <NavItem eventKey={1}  ><small>Copyright © WeiFund 2016. All Rights Reserved</small></NavItem>
          <NavItem eventKey={2}  href="#">Disclaimer</NavItem>
          <NavItem eventKey={3}  href="#">Terms of Use</NavItem>
          <NavDropdown eventKey={3}  title="About" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} >Mission</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2} >Contact</MenuItem>
            <MenuItem eventKey={3.3} >Twitter</MenuItem>
            <MenuItem eventKey={3.4} >LinkedIn</MenuItem>
            <MenuItem eventKey={3.5} >GitHub</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight={true}>
          <NavDropdown title="Providers" id="basic-nav-dropdown">

            <MenuItem eventKey={4} onClick={this.ethereumSettingsView} >
              <p>{ ethereumProviderConnected == undefined ?
                <Label bsStyle="warning">Connecting...</Label> :
                <Label bsStyle="success">Connected</Label>} Ethereum
              </p>
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={5} onClick={this.ipfsSettingsView} >
              <p > { ipfsProviderConnected == undefined ?
                <Label bsStyle="warning"> Connecting...</Label> :
                <Label bsStyle="success"> Connected</Label> } IPFS
              </p>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Providers : state.Providers
  }
}

const Footer = connect(mapStateToProps)(FooterComponent);

export default Footer;

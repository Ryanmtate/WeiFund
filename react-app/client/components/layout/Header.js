import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import * as Actions from '../../lib/actions/index';

class HeaderComponent extends Component {

  startCampaign = () => {
    let { dispatch, Campaign } = this.props;

    let step = Campaign.currentStep;
    let view = Campaign.campaignProcess.steps[step].stepId;
    dispatch(Actions.Views.Body(view));
  }

  discoverCampaigns = () => {
    let { dispatch } = this.props;
    dispatch(Actions.Views.Body('discover'));
  }


  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            WeiFund <a href="#"><FaArrowCircleOUp /> </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight={true}>
          <NavItem eventKey={1} onClick={this.discoverCampaigns}>Discover</NavItem>
          <NavItem eventKey={2} onClick={this.startCampaign}>Start</NavItem>
        </Nav>
      </Navbar>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Views : state.Views,
    Campaign : state.Campaign
  }
}

const Header = connect(mapStateToProps)(HeaderComponent);

export default Header;

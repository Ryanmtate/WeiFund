import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import CampaignProcess from './CampaignProcess';
import { Grid, Row, Col, Image, Panel, PageHeader } from 'react-bootstrap';


class CampaignStepOneComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch, Views } = this.props;

    console.log(Views);

  }

  render(){
    return (
      <Grid>
        <Row><Panel><CampaignProcess /></Panel></Row>
        <Row><PageHeader>Example page header <small>Subtext for header</small></PageHeader></Row>
      </Grid>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Views : state.Views,
    Campaign : state.Campaign
  }
}

const CampaignStepOne = connect(mapStateToProps)(CampaignStepOneComponent);

export default CampaignStepOne;

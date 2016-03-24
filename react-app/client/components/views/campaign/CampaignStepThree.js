import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import CampaignProcess from './CampaignProcess';
import { Grid, Row, Col, Input, Panel, PageHeader, Button, ButtonToolbar } from 'react-bootstrap';


class CampaignStepThreeComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch, Views, Campaign } = this.props;
  }

  nextStep = () => {
    let { dispatch, Campaign } = this.props;

    // do some validation checks on inputs...
    if(true){
      let step = Campaign.currentStep + 1;
      let view = Campaign.campaignProcess.steps[step].stepId;

      dispatch(Actions.Views.Body(view));
      dispatch(Actions.Campaign.currentStep(step));
    }
  }

  lastStep = () => {
    let { dispatch, Campaign } = this.props;

    if(Campaign.currentStep != 0){
      let step = Campaign.currentStep - 1;
      let view = Campaign.campaignProcess.steps[step].stepId;

      dispatch(Actions.Views.Body(view));
      dispatch(Actions.Campaign.currentStep(step));
    }
  }

  render(){
    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} >
            <Panel><CampaignProcess /></Panel>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6} >
            <Panel>
              <p>CampaignStepThree</p>

            </Panel>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} >
            <Panel>
              <ButtonToolbar>
                <Button bsStyle={"default"} onClick={this.lastStep}>Go Back</Button>
                <Button bsStyle={"primary"} onClick={this.nextStep}>Continue</Button>
               </ButtonToolbar>
            </Panel>
          </Col>
        </Row>
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

const CampaignStepThree = connect(mapStateToProps)(CampaignStepThreeComponent);

export default CampaignStepThree;

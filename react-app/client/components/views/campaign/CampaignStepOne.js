import React, { Component } from 'react'
import { connect } from 'react-redux';
import moment from 'moment';
import * as Actions from '../../../lib/actions/index';
import CampaignProcess from './CampaignProcess';
import { Grid, Row, Col, Input, Panel, PageHeader, Button, ButtonToolbar, Form } from 'react-bootstrap';


class CampaignStepOneComponent extends Component {
  constructor(props) {
    super(props);

    let { newCampaign } = this.props.Campaign;

    this.state = {
      name : newCampaign.name,
      expiry : {
        unix : newCampaign.expiry.unix,
        local : newCampaign.expiry.local
      },
      fundingGoal : newCampaign.fundingGoal,
      contributionEndpoint : {
        active : newCampaign.contributionEndpoint.active,
        address : newCampaign.contributionEndpoint.address
      }
    }
  }

  componentDidMount() {
    let { dispatch, Views, Campaign } = this.props;
  }

  updateCampaign = () =>{
    let d = this.refs.campaignExpiry.getValue();
    let unix;

    if(d != ""){
        unix = (Date.parse(d) / 1000) ;
    }

    this.setState({
      name : this.refs.campaignName.getValue(),
      expiry : {
        unix : unix,
        local : d
      },
      fundingGoal : this.refs.campaignFundingGoal.getValue(),
      beneficiary : this.refs.campaignBeneficiary.getValue(),
      contributionEndpoint : {
        active : this.refs.contributionEndpoint.getValue()
      }
    })
  }

  nextStep = () => {
    let { dispatch, Campaign } = this.props;

    // do some validation checks on inputs...

    console.log(this.state);

    if(true){
      let step = Campaign.currentStep + 1;
      let view = Campaign.campaignProcess.steps[step].stepId;

      dispatch(Actions.Views.Body(view));
      dispatch(Actions.Campaign.currentStep(step));
    }
  }


  render(){
    let { name, expiry, beneficiary, fundingGoal, contributionEndpoint } = this.state;

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
              <Input
                type="text"
                value={name}
                placeholder={""}
                label={
                  <div>
                  <h4>Campaign Name</h4>
                  </div>}
                help={"Please enter the desired name of your campaign."}
                bsStyle={null}
                hasFeedback
                ref="campaignName"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

                <Input
                  type="text"
                  value={beneficiary}
                  placeholder={""}
                  label={
                    <div>
                    <h4>Campaign Beneficiary</h4>
                    </div>}
                  help={`Please enter the Ethereum address of the campaign beneficiary.
                    e.g. 0x6b1c6b73bfbcc6262653118a96d413b2cd449c68`}
                  bsStyle={null}
                  hasFeedback
                  ref="campaignBeneficiary"
                  groupClassName="group-class"
                  labelClassName="label-class"
                  onChange={this.updateCampaign} />

            </Panel>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} >
            <Panel>
            <Input
              type="date"
              value={expiry.local}
              placeholder={""}
              label={
                <div>
                <h4>Campaign Expiration Date</h4>
                </div>}
              help={null}
              bsStyle={null}
              hasFeedback
              ref="campaignExpiry"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.updateCampaign} />

              <Input
                type="number"
                value={fundingGoal}
                placeholder={""}
                label={
                  <div>
                  <h4>Campaign Funding Goal</h4>
                  </div>}
                help={null}
                bsStyle={null}
                hasFeedback
                ref="campaignFundingGoal"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />
            </Panel>
            <Panel>
              <Input
                type="checkbox"
                value={contributionEndpoint.active}
                placeholder={""}
                label={"Campaign Contribution Endpoint"}
                help={`This will deploy a custom contribution endpoint address for your campaign.
                  This means your campaign will have it's own Ethereum address that people can contribute to.
                  Example: 0x133a270bbc009611e35f0bb6ab13f95b8199c3dd`}
                bsStyle={null}
                hasFeedback
                ref="contributionEndpoint"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} >
          <ButtonToolbar >
            <Button style={{float: 'right'}} bsStyle={"primary"} onClick={this.nextStep}>Continue</Button>
           </ButtonToolbar>
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

const CampaignStepOne = connect(mapStateToProps)(CampaignStepOneComponent);

export default CampaignStepOne;

import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import CampaignProcess from './CampaignProcess';
import { Grid, Row, Col, Input, Panel, PageHeader, Button, ButtonToolbar } from 'react-bootstrap';


class CampaignStepThreeComponent extends Component {
  constructor(props) {
    super(props);
    let { newCampaign } = this.props.Campaign
    this.state = {
      ...newCampaign
    }
  }

  componentDidMount() {
    let { dispatch, Views, Campaign, State } = this.props;
    dispatch(Actions.LocalStore.Save(State));
  }

  updateCampaign = () => {
    this.setState({
      createStandardToken : this.refs.createStandardToken.refs.input.checked,
      createTokenController : this.refs.createTokenController.refs.input.checked,
      autoDispersal : this.refs.autoDispersal.refs.input.checked,
      initialTokenAmount : this.refs.initialTokenAmount.getValue(),
      initialTokenPrice : this.refs.initialTokenPrice.getValue()
    });
  }

  nextStep = () => {
    let { dispatch, Campaign } = this.props;

    // do some validation checks on inputs...
    if(true){
      let step = Campaign.currentStep + 1;
      let view = Campaign.campaignProcess.steps[step].stepId;

      dispatch(Actions.Views.Body(view));
      dispatch(Actions.Campaign.currentStep(step));
      dispatch(Actions.Campaign.updateCampaignProcess(this.state));
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
    let { createStandardToken, createTokenController, autoDispersal, initialTokenAmount, initialTokenPrice } = this.state;

    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} >
            <Panel><CampaignProcess /></Panel>
          </Col>
        </Row>
        <Row>
          <Col lg={7} md={7} sm={7} xs={7} >
            <Panel>
              <h4>Standard Token</h4>
              <Input
                checked={true}
                disabled
                type="checkbox"
                value={createStandardToken}
                placeholder={""}
                label={"Create Standard Token"}
                help={<p>This will create a custom <a href="https://www.ethereum.org/token" target="_blank" >
                  Ethereum standard token contract</a> for your token crowdsale.</p>}
                bsStyle={null}
                hasFeedback
                ref="createStandardToken"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

            </Panel>

            <Panel>
              <Input
                type="number"
                value={initialTokenAmount}
                placeholder={12000}
                label={
                  <div>
                  <h4>Initial Token Amount</h4>
                  </div>}
                help={<p>e.g. 12000 | The initial amount of tokens issued to the controller.
                  If the campaign fails, all tokens will be available
                  to you the project owner.</p>}
                bsStyle={null}
                hasFeedback
                ref="initialTokenAmount"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

              <Input
                type="number"
                value={initialTokenPrice}
                placeholder={2}
                label={
                  <div>
                  <h4>Initial Token Price</h4>
                  </div>}
                help={<p>How much each of your tokens cost in <a href="https://www.ethereum.org/ether" target="_blank"> ether</a>.
                  This value will be used to disperse tokens to contributors.</p>}
                bsStyle={null}
                hasFeedback
                ref="initialTokenPrice"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />
            </Panel>
          </Col>
          <Col lg={5} md={5} sm={5} xs={5} >
            <Panel>
              <h4>Token Controller</h4>
              <Input
                checked={true}
                disabled
                type="checkbox"
                value={createTokenController}
                placeholder={""}
                label={"Create Token Controller"}
                help={`This will create a custom WeiFund standard token dispersal
                  controller that disperses tokens to your campaigns contributors.`}
                bsStyle={null}
                hasFeedback
                ref="createTokenController"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />
            </Panel>
            <Panel>
              <h4>Auto Dispersal</h4>
              <Input
                disabled
                type="checkbox"
                value={autoDispersal}
                placeholder={""}
                label={"Auto Dispersal"}
                help={<p>The default token controller allows tokens to be dispersed either
                  directly after contributions are made (“auto-dispersal”) or
                  after the campaign has succeeded by way of a token claim (“claim dispersal”).
                  Projects will have to decide what option is best for their campaign.
                  Projects may be more inclined to use claim dispersal because
                  tokens of value (or potential value) will not be dispersed to contributors
                  until the campaign has succeeded. Moreover, If the campaign fails,
                  the campaign owner can simply reclaim the tokens held by the controller.
                  Because of this, WeiFund by default does not recommend auto-dispersal of tokens by default.</p>}
                bsStyle={null}
                hasFeedback
                ref="autoDispersal"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />
            </Panel>
          </Col>

        </Row>
        <Row style={{marginBottom: '100px'}}>
          <Col lg={12} md={12} sm={12} xs={12} >
          <ButtonToolbar >
            <Button style={{float: 'right'}} bsStyle={"primary"} onClick={this.nextStep}>Continue</Button>
            <Button style={{float: 'right'}} bsStyle={"default"} onClick={this.lastStep}>Go Back</Button>
           </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    State : state,
    Views : state.Views,
    Campaign : state.Campaign
  }
}

const CampaignStepThree = connect(mapStateToProps)(CampaignStepThreeComponent);

export default CampaignStepThree;

import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import CampaignProcess from './CampaignProcess';
import { Grid, Row, Col, Input, Alert, Panel, Button, ButtonToolbar, ListGroup, ListGroupItem } from 'react-bootstrap';


class CampaignStepFourComponent extends Component {
  constructor(props) {
    super(props);
    let { newCampaign } = this.props.Campaign;
    this.state = {
      ...newCampaign,
      dismissed : false
    };
  }

  ccomponentDidMount() {
    let { dispatch, Views, Campaign, State } = this.props;

    dispatch(Actions.LocalStore.Save(State));
  }

  handleAlertDismiss = () => {
    this.setState({dismissed : true});
  }

  selectAccount = () => {
    let { dispatch } = this.props;
    let account = this.refs.selectedAccount.getValue();
    dispatch(Actions.Account.selectAccount(account));
  }

  nextStep = () => {
    let { dispatch, Campaign } = this.props;

    // do some validation checks on inputs...
    if(true){
      let step = Campaign.currentStep + 1;
      let view = Campaign.campaignProcess.steps[step].stepId;

      dispatch(Actions.Views.Body(view));
      dispatch(Actions.Campaign.currentStep(step));
      dispatch(Actions.Contract.Contracts());
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
    let { Campaign, Account, Contract } = this.props;
    let { details, contracts } = Contract.WeiFundContracts;

    console.log(details);
    console.log(contracts)

    var TransactionOrders = Object.keys(details).map((contract, index) => {
      console.log(details[contract]);
      return (
        <ListGroup key={index}>
          <ListGroupItem>
            <h5>{contract}</h5>
            <p>Estimated Gas Cost in Wei: {details[contract].gasEstimates.creation[1]}</p>
          </ListGroupItem>
        </ListGroup>
      );
    });

    if(Account.accounts){
      var accounts = Account.accounts.map((account, index) => {
        let a = `${account.address} | ${account.balance} Ether`;
        return (<option key={account.address} value={account.address}>{a}</option>);
      });
    }


    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} >
            <Panel><CampaignProcess /></Panel>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} >
            { this.state.dismissed ? null : <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
              <h4>Checkout</h4>
              <p>Here you can review the transaction orders that will be made
                in order to setup your campaign on WeiFund.</p>
              </Alert>
            }
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={4} xs={4} >
            <Panel>
              <h4>Transaction Orders</h4>
              {TransactionOrders}
            </Panel>
          </Col>
          <Col lg={8} md={8} sm={8} xs={8} >
            <Panel>
              <h4>Select Checkout Account </h4>
              { Account.accounts ?
                <Input type="select" label="Accounts" ref="selectedAccount" onChange={this.selectAccount}>
                  { accounts }
                </Input> : null
              }
            </Panel>
          </Col>
        </Row>
        <Row style={{marginBottom: '100px'}}>
          <Col lg={12} md={12} sm={12} xs={12} >
          <ButtonToolbar >
            <Button style={{float: 'right'}} bsStyle={"success"} onClick={this.nextStep}>Checkout</Button>
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
    Account : state.Account,
    Views : state.Views,
    Campaign : state.Campaign,
    Contract : state.Contract
  }
}

const CampaignStepFour = connect(mapStateToProps)(CampaignStepFourComponent);

export default CampaignStepFour;

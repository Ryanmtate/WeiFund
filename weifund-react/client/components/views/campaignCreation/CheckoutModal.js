import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import {Header, Footer, Setup} from '../../index';
import { Modal, Alert, Button, ButtonToolbar, Input } from 'react-bootstrap';
import { web3 } from '../../../lib/actions/Providers';

class CheckoutModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout : true
    }
  }

  componentDidMount() {
    let { dispatch } = this.props;

  }

  checkout = () => {
    let { dispatch, Campaign, Account } = this.props;
    let { newCampaign } = Campaign;
    let { selectedAccount } = Account;
    let cost = web3.fromWei(this.state.transactionTotal, 'ether');

    if(Number(selectedAccount.balance) < cost){
      alert(`
        Insufficient funds to Execute Order!

        Please add ${cost} ether to your account, ${selectedAccount.address}, before continuing.`);
    } else {
      if(confirm(`
        You are about to create your campaign. The estimated gas costs in wei is: ${this.state.transactionTotal}.

        Please ensure your ethereum account, ${selectedAccount.address}, has succifient funds and is unlocked.`)){
            dispatch(Actions.Campaign.newCampaign(newCampaign, selectedAccount));
      } else {
          alert(`Campaign creation was cancelled.`);
      };
    }
  }

  close = () => {
    let { dispatch } = this.props;
    this.setState({checkout : false});
  }

  render(){
    let { Campaign, Account } = this.props;
    let { newCampaign } = Campaign

    return (
      <Modal show={this.state.checkout} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Creating WeiFund Campaign for {newCampaign.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Ready to Launch!</h1>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button onClick={this.checkout}>Checkout</Button>
              <Button onClick={this.close}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Account : state.Account,
    Views : state.Views,
    Campaign : state.Campaign,
    Contract : state.Contract
  }
}

const CheckoutModal = connect(mapStateToProps)(CheckoutModalComponent);

export default CheckoutModal;

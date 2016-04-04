import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import {Header, Footer, Setup} from '../../index';
import { Modal, Alert, Button, ButtonToolbar, Input } from 'react-bootstrap';

class EthereumSettingsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setCustomProvider : false,
      ethereumProvider : undefined,
      installMetaMask : false
    }
  }

  componentDidMount() {
    let { dispatch, Providers, Views } = this.props;

  }

  customProvider = () => {
    this.setState({setCustomProvider : true});
  }

  updateEthProvider = () => {
    this.setState({ethereumProvider: this.refs.ethereumProvider.getValue()});
  }

  validateEthProvider(ethereumProvider){
    let len = String('http://localhost:8545').length; // 21
    let len2 = String('http://104.236.65.136:8545').length // 26

    if(ethereumProvider == undefined){
      return 'warning';
    } else if(String(ethereumProvider).length == len || String(ethereumProvider).length - 1 == len ||
      String(ethereumProvider).length == len2 || String(ethereumProvider).length - 1 == len2){
      return 'success'
    } else {
      return 'warning';
    };
  }

  setupEthereumProvider = () => {
    let { dispatch } = this.props;

    if(this.state.installMetaMask){
      window.location.reload();
    }

    this.setState({setCustomProvider : false});
    dispatch(Actions.Providers.Ethereum(this.state.ethereumProvider));
  }

  installMetaMask = () => {
    this.setState({installMetaMask : true});
  }

  close = () => {
    let { dispatch } = this.props;

    dispatch(Actions.Views.Settings(undefined));
  }

  render(){
    let { Providers, Views } = this.props;
    let { ethereumProviderError, ethereumProviderConnected } = Providers;
    let { settingsView } = Views;

    return (
      <Modal show={settingsView != 'ethereum-settings' && ethereumProviderError == undefined ? false : true} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Ethereum Provider Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              ethereumProviderError ?
              <div>
                { !this.state.setCustomProvider ?
                  <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                    <h4>Error Connecting to Ethereum Host</h4>
                    <p>Please select your Ethereum RPC provider host.</p>
                    <br/>
                    <p>
                        { !this.state.installMetaMask ?
                        <ButtonToolbar>
                          <Button onClick={this.customProvider}>Enter Custom Ethereum RPC Provider</Button>
                          <Button style={{marginTop : '10px'}} onClick={this.installMetaMask} bsStyle="primary" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">Install <strong>MetaMask</strong> Ethereum Provider Chrome Plugin</Button>
                        </ButtonToolbar>
                        :
                        <ButtonToolbar>
                          <Button bsStyle="success" onClick={this.setupEthereumProvider}>Test MetaMask Provider</Button>
                        </ButtonToolbar>
                        }
                    </p>
                  </Alert> :
                  <Input
                    type="text"
                    value={this.state.ethereumProvider}
                    placeholder={""}
                    label={
                      <div>
                      <h3>Ethereum RPC Provider</h3>
                      <p>Please set your Ethereum RPC provider URL below.
                      The provider enables WeiFund to interact with your Ethereum node.
                      If you do not have a node to run as a provider,
                      run one by following these instructions:
                      <a href="https://ethereum.gitbooks.io/frontier-guide/content/getting_a_client.html"
                      target="_blank"> Ethereum Frontier Guide</a></p></div>}
                    help={`Example: http://localhost:8545`}
                    bsStyle={this.validateEthProvider(this.state.ethereumProvider)}
                    hasFeedback
                    ref="ethereumProvider"
                    groupClassName="group-class"
                    labelClassName="label-class"
                    onChange={this.updateEthProvider} />
                }
              </div>

               :
              <p>Connected to { ethereumProviderConnected }</p>
            }
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              { this.validateEthProvider(this.state.ethereumProvider) == 'success' && this.state.setCustomProvider ?
                <Button bsStyle="default" onClick={this.setupEthereumProvider}>Setup</Button> : null
              }

              { !ethereumProviderError ?
                <Button onClick={this.close}>Close</Button> : null
              }

            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Providers : state.Providers,
    Views : state.Views
  }
}

const EthereumSettings = connect(mapStateToProps)(EthereumSettingsComponent);

export default EthereumSettings;

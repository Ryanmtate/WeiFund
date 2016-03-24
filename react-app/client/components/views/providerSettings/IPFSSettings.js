import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import {Header, Footer, Setup} from '../../index';
import { Modal, Input, ButtonToolbar, Button, Alert } from 'react-bootstrap';

class IPFSSettingsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setCustomProvider : false,
      ipfsProvider : undefined
    }
  }

  componentDidMount() {
    let { dispatch, Providers, Views } = this.props;
  }

  customProvider = () => {
    this.setState({setCustomProvider : true});
  }

  // Setting Ethereum Provider Manually
  updateIPFSProvider = () => {
    this.setState({ipfsProvider: this.refs.ipfsProvider.getValue()});
  }

  validateIPFSProvider(ipfs){
    let len = String('localhost:5001').length; // 14
    let len2 = String('104.131.53.68:5001').length // 18

    if(ipfs == undefined){
      return 'warning';
    } else if(String(ipfs).length == len || String(ipfs).length - 1 == len ||
      String(ipfs).length == len2 || String(ipfs).length - 1 == len2){
      return 'success'
    } else {
      return 'warning';
    };
  }

  setupIPFSProvider = () => {
    let { dispatch } = this.props;

    this.setState({setCustomProvider : false});
    dispatch(Actions.Providers.IPFS(this.state.ipfsProvider));
  }


  close = () => {
    let { dispatch } = this.props;
    dispatch(Actions.Views.Settings(undefined));
  }

  render(){
    let { Providers, Views } = this.props;
    let { ipfsProviderError, ipfsProviderConnected } = Providers;
    let { settingsView } = Views;

    return (
      <Modal show={settingsView != 'ipfs-settings' && ipfsProviderError == undefined ? false : true} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>IPFS Provider Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            ipfsProviderError ?
            <div>
              { !this.state.setCustomProvider ?
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
                  <h4>Error Connecting to IPFS Host</h4>
                  <p>Please select your IPFS RPC provider host.</p>
                  <br/>
                  <p>
                    <ButtonToolbar>
                      <Button onClick={this.customProvider}>Enter Custom IPFS RPC Provider</Button>
                    </ButtonToolbar>
                  </p>
                </Alert> :
                <Input
                  type="text"
                  value={this.state.ipfsProvider}
                  placeholder={""}
                  label={
                    <div>
                    <h3>IPFS Provider</h3>
                    <p>Please set your Inter Planatary File System (IPFS) provider URL below.
                    The provider enables WeiFund to interact with your IPFS backend,
                    for things like file and data storage. If you do not have an IPFS node as a provider,
                    run one by following these instructions:
                    <a href="https://ipfs.io/docs/install/"
                    target="_blank"> IPFS Installation Guide</a></p></div>}
                  help={`Example: localhost:5001`}
                  bsStyle={this.validateIPFSProvider(this.state.ipfsProvider)}
                  hasFeedback
                  ref="ipfsProvider"
                  groupClassName="group-class"
                  labelClassName="label-class"
                  onChange={this.updateIPFSProvider} />
              }
            </div>

             :
            <p>Connected to { ipfsProviderConnected }</p>
          }
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            { this.validateIPFSProvider(this.state.ipfsProvider) == 'success' && this.state.setCustomProvider ?
              <Button bsStyle="default" onClick={this.setupIPFSProvider}>Setup</Button> : null
            }

            { !ipfsProviderError ?
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

const IPFSSettings = connect(mapStateToProps)(IPFSSettingsComponent);

export default IPFSSettings;

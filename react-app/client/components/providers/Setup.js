import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Input, ButtonToolbar, Button, Grid, Row, Col, Image } from 'react-bootstrap';
import * as Actions from '../../lib/actions/index';

class SetupComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      ethProvider : undefined,
      ipfsProvider : undefined
    }
  }


  componentDidMount(){
    let { Providers, dispatch } = this.props;
    let { ethereumProvider, ipfsProvider, pending } = Providers;

    if(pending){
      dispatch(Actions.Providers.Ethereum(ethereumProvider))
      dispatch(Actions.Providers.IPFS(ipfsProvider))
    }
  }

  // Setting Ethereum Provider Manually
  updateEthProvider = () => {
    this.setState({ethProvider: this.refs.ethProvider.getValue()});
  }

  validateEthProvider(ethereumProvider){
    let len = String('http://localhost:8545').length; // 21
    let len2 = String('http://104.236.65.136:8545').length // 26

    if(ethereumProvider == undefined){
      return 'warning';
    } else if(ethereumProvider == 'metamask' || ethereumProvider == 'http://localhost:8545'){
      return 'success';
    } else if(String(ethereumProvider).length == len || String(ethereumProvider).length - 1 == len ||
      String(ethereumProvider).length == len2 || String(ethereumProvider).length - 1 == len2){
      return 'success'
    } else {
      return 'warning';
    };
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
    } else if(ipfs == 'metamask' || ipfs == 'http://localhost:8545'){
      return 'success';
    } else if(String(ipfs).length == len || String(ipfs).length - 1 == len ||
      String(ipfs).length == len2 || String(ipfs).length - 1 == len2){
      return 'success'
    } else {
      return 'warning';
    };
  }

  // Setup Providers with manual settings

  setupProviders = () => {
    let { ethProvider, ipfsProvider } = this.state;
    let { dispatch } = this.props;

    console.log(ethProvider);
    console.log(ipfsProvider);

    dispatch(Actions.Providers.Ethereum(ethProvider))
    dispatch(Actions.Providers.IPFS(ipfsProvider))
  }

  setupSuccess = () => {
    let { dispatch } = this.props;
    dispatch(Actions.Providers.Setup());
  }

  editProviders = () => {
    let { dispatch } = this.props;
    dispatch(Actions.Providers.Ethereum(false))
    dispatch(Actions.Providers.IPFS(false))
  }

  render(){
    let { Providers } = this.props;
    let { ethereumProvider, ipfsProvider, pending, error } = Providers;

    return (
      <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>Setup Providers</Modal.Title>
          { error != undefined ? <h6>Please setup your Ethereum and IPFS backend
          here before you begin using this application.
          </h6> : <h6>Current Provider Configuration</h6> }
        </Modal.Header>
        <Modal.Body>
        {pending ?
          <div>
            { error == undefined ?
              <Grid>
                <Row>
                  <Col>
                    <h3>Ethereum Provider</h3>
                    <h6>{ethereumProvider}</h6>
                    { ethereumProvider == 'MetaMask' ?
                      <Image src="https://avatars3.githubusercontent.com/u/11744586?v=3&s=200" rounded/>:
                      <Image src="http://www.bitcoinalliance.in/wp-content/uploads/2014/12/hlSEqZ1M.png" width="25%"  rounded/>
                    }
                  </Col>
                  <Col>
                    <h3>IPFS Provider</h3>
                    <h6>{ipfsProvider}</h6>
                    <Image src="https://ipfs.io/styles/img/ipfs-logo-white.png"  width="50%"  rounded/>
                  </Col>
                  <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.setupSuccess}>Continue</Button>
                    <Button bsStyle="default" onClick={this.editProviders}>Edit Providers</Button>
                  </ButtonToolbar>
                </Row>
              </Grid> :
              <div>
              <Input
                type="text"
                value={this.state.ethProvider}
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
                help={`Example: http://localhost:8545 | For MetaMask support, type "metamask".`}
                bsStyle={this.validateEthProvider(this.state.ethProvider)}
                hasFeedback
                ref="ethProvider"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateEthProvider} />

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
                  <br/>
                  <Button bsStyle="primary" onClick={this.setupProviders}>Setup Providers</Button>
                  </div>
            }
          </div> :
          <div>
            <p>All Set</p>
          </div>
        }


        </Modal.Body>
      </Modal>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Network : state.Network,
    Providers : state.Providers
  }
}

const Setup = connect(mapStateToProps)(SetupComponent);

export default Setup;

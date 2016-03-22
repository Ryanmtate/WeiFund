import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Input } from 'react-bootstrap';
import * as Actions from '../lib/actions/index';

class SetupComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      ethProvider : this.props.Providers.ethereumProvider,
      ipfsProvider : this.props.Providers.ipfsProvider
    }
  }


  componentDidMount(){
    let { Providers, dispatch } = this.props;
    let { ethereumProvider, ipfsProvider, pending } = Providers;

    { pending ? dispatch(Actions.Providers(ethereumProvider, ipfsProvider)) : null }

  }

  // Setting Ethereum Provider Manually
  updateEthProvider = () => {
    this.setState({ethProvider: this.refs.ethProvider.getValue()});
  }

  validateEthProvider(ethereumProvider){
    switch(ethereumProvider){
      case 'metamask':
        return 'success';
        break;
      case 'http://localhost:8545':
        return 'success';
      default:
        return 'warning';
    }
  }

  // Setting Ethereum Provider Manually
  updateIPFSProvider = () => {
    this.setState({ipfsProvider: this.refs.ipfsProvider.getValue()});
  }

  validateIPFSProvider(ipfs){
    switch(ipfs){
      case 'localhost:5001':
        return 'success';
      default:
        return 'warning';
    }
  }

  render(){
    let { Providers } = this.props;
    let { ethereumProvider, ipfsProvider, pending } = Providers;

    console.log(Providers);

    return (
      <Modal show={true}>
        <Modal.Header closeButton>
          { pending ? <div>
            <Modal.Title>Fetching Providers</Modal.Title>
            <h6>Establishing Ethereum and IPFS providers.</h6>
          </div> :
          <div>
            <Modal.Title>Setup Providers</Modal.Title>
            <h6>Please setup your Ethereum and IPFS backend
            here before you begin using this application.
            </h6>
          </div>
        }


        </Modal.Header>
        <Modal.Body>
        {pending ? <p>Fetching Providers... one moment.</p> :
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

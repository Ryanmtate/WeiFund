import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../lib/actions/index';
import {Header, Footer, Setup} from './index';

class WeiFundAppComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    // dispatch(Actions.NETWORK());
  }

  render(){
    // let { Network, Providers } = this.props;
    // console.log(this.props);
    // console.log(Providers);

    return (
      <div>
        <Header />
        { true ?
          <Setup/>
           :
          <div>This is Where Our Body Goes</div>
        }


        <Footer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Network : state.Network,
    Providers : state.Providers
  }
}

const WeiFundApp = connect(mapStateToProps)(WeiFundAppComponent);

export default WeiFundApp;

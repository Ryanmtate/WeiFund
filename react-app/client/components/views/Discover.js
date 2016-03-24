import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../lib/actions/index';
// import {} from './index';

class DiscoverComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch, Views } = this.props;

    console.log(Views);

  }

  render(){
    return (
      <div>
        <p>Discover</p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Views : state.Views
  }
}

const Discover = connect(mapStateToProps)(DiscoverComponent);

export default Discover;

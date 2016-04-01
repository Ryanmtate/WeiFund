import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../lib/actions/index';
import { Discover, CampaignCreation } from '../index';

class BodyComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch, Views } = this.props;

  }

  render(){
    switch(this.props.Views.bodyView){
      case 'campaign-step-1':
        return <CampaignCreation.StepOne />
      case 'campaign-step-2':
        return <CampaignCreation.StepTwo />
      case 'campaign-step-3':
        return <CampaignCreation.StepThree />
      case 'campaign-step-4':
        return <CampaignCreation.StepFour />
      case 'campaign-step-5':
        return <CampaignCreation.StepFive />
      case 'discover':
        return <Discover />
    }
  }
}


const mapStateToProps = (state) => {
  return {
    Views : state.Views

  }
}

const Body = connect(mapStateToProps)(BodyComponent);

export default Body;

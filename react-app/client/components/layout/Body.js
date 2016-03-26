import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../lib/actions/index';
import { Discover, Campaign } from '../index';

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
        return <Campaign.CampaignStepOne />
      case 'campaign-step-2':
        return <Campaign.CampaignStepTwo />
      case 'campaign-step-3':
        return <Campaign.CampaignStepThree />
      case 'campaign-step-4':
        return <Campaign.CampaignStepFour />
      case 'campaign-step-5':
        return <Campaign.CampaignStepFive />
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

import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css!';
import 'rc-steps/assets/iconfont.css!';

class CampaignProcessComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch, Views } = this.props;

    console.log(Views);

  }

  render(){
    let { Views, Campaign } = this.props;
    let { steps } = Campaign.campaignProcess;

    let S = steps.map((s, i) => {
      return (
        <Steps.Step key={i} status={s.status} title={s.title} description={null}></Steps.Step>
      );
    });

    return (
      <Steps current={Campaign.currentStep}>{S}</Steps>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    Views : state.Views,
    Campaign : state.Campaign
  }
}

const CampaignProcess = connect(mapStateToProps)(CampaignProcessComponent);

export default CampaignProcess;

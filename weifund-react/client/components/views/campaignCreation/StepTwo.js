import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Actions from '../../../lib/actions/index';
import CampaignProcess from './CampaignProcess';
import { Grid, Row, Col, Input, Panel, Button, ButtonToolbar} from 'react-bootstrap';

class CampaignStepTwoComponent extends Component {
  constructor(props) {
    super(props);
    let { newCampaign } = this.props.Campaign;
    this.state = {
      ...newCampaign
    };
  }

  componentDidMount() {
    let { dispatch, Views, Campaign, State } = this.props;
    dispatch(Actions.LocalStore.Save(State));
  }

  updateCampaign = () => {

    this.setState({
      operatorPersona : this.refs.operatorPersona.getValue(),
      websiteUrl : this.refs.websiteUrl.getValue(),
      bannerImage : this.refs.bannerImage.getValue(),
      profileImage : this.refs.profileImage.getValue(),
      videoUrl : this.refs.videoUrl.getValue(),
      description : this.refs.description.getValue(),
      projectDetails : this.refs.projectDetails.getValue(),
      categories : this.refs.selectedCategories.getValue()
    });
  }

  nextStep = () => {
    let { dispatch, Campaign } = this.props;

    // do some validation checks on inputs...
    if(true){
      let step = Campaign.currentStep + 1;
      let view = Campaign.campaignProcess.steps[step].stepId;

      dispatch(Actions.Views.Body(view));
      dispatch(Actions.Campaign.currentStep(step));
      dispatch(Actions.Campaign.updateCampaignProcess(this.state));
    }
  }

  lastStep = () => {
    let { dispatch, Campaign } = this.props;

    if(Campaign.currentStep != 0){
      let step = Campaign.currentStep - 1;
      let view = Campaign.campaignProcess.steps[step].stepId;

      dispatch(Actions.Views.Body(view));
      dispatch(Actions.Campaign.currentStep(step));
    }
  }

  render(){
    console.log(this.state);

    let { State, Providers, Campaign } = this.props;
    let { operatorPersona, websiteUrl, bannerImage, profileImage, videoUrl, description, projectDetails} = this.state;

    var categories = Campaign.categories.map((category, i) => {
      return (<option key={i} value={category}>{category}</option>);
    })

    return (
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} >
            <Panel><CampaignProcess /></Panel>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6} >
            <Panel>
              <Input
                type="text"
                value={operatorPersona}
                placeholder={""}
                label={
                  <div>
                  <h4>Operator Persona</h4>
                  </div>}
                help={`e.g. Jane Smith; Group XYZ  | This is your campaign operator identity,
                  we recommend having a persona so that contributors can see who you are.
                  This persona can be for either a person or organization.`}
                bsStyle={null}
                hasFeedback
                ref="operatorPersona"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

              <Input
                type="text"
                value={websiteUrl}
                placeholder={""}
                label={
                  <div>
                  <h4>Project Website</h4>
                  </div>}
                help={"e.g. http://mysite.com"}
                bsStyle={null}
                hasFeedback
                ref="websiteUrl"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

            </Panel>
            <Panel>

              <Input
                type="text"
                value={bannerImage}
                placeholder={""}
                label={
                  <div>
                  <h4>Banner Image</h4>
                  </div>}
                help={`e.g. http://mysite.com/banner.jpg | Must be 4:3 jpg, jpeg
                or png greater than 1024px by 768px.`}
                bsStyle={null}
                hasFeedback
                ref="bannerImage"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

              <Input
                type="text"
                value={profileImage}
                placeholder={""}
                label={
                  <div>
                  <h4>Profile Image</h4>
                  </div>}
                help={"e.g. http://mysite.com/profile.jpg"}
                bsStyle={null}
                hasFeedback
                ref="profileImage"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

              <Input
                type="text"
                value={videoUrl}
                placeholder={""}
                label={
                  <div>
                  <h4>Campaign Video</h4>
                  </div>}
                help={`e.g. https://youtu.be/miaxf6BI6Wc | Video must be YouTube or Vimeo URLs.
                  Image must be 16:9 and at least 1024px by 768px.`}
                bsStyle={null}
                hasFeedback
                ref="videoUrl"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

            </Panel>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} >
            <Panel>
              <h4>Select Category</h4>
              <Input type="select" ref="selectedCategories" onChange={this.updateCampaign} multiple>
                { categories }
              </Input>
              <small>Hold shift to select multiple categories</small>
            </Panel>
            <Panel>
              <Input
                style={{height:'100px'}}
                type="textarea"
                value={description}
                placeholder={""}
                label={
                  <div>
                  <h4>Campaign Description</h4>
                  </div>}
                help={"A short description of your campaign and its goals."}
                bsStyle={null}
                hasFeedback
                ref="description"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />

            </Panel>
            <Panel>
              <Input
                style={{height:'350px'}}
                type="textarea"
                value={projectDetails}
                placeholder={""}
                label={
                  <div>
                  <h4>Project Details</h4>
                  </div>}
                help={`A detailed account of your project, its goals and what you
                  are trying to achieve by starting this campaign.`}
                bsStyle={null}
                hasFeedback
                ref="projectDetails"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.updateCampaign} />
            </Panel>
          </Col>
        </Row>
        <Row style={{marginBottom: '100px'}}>
          <Col lg={12} md={12} sm={12} xs={12} >
            <ButtonToolbar >
              <Button style={{float: 'right'}} bsStyle={"primary"} onClick={this.nextStep}>Continue</Button>
              <Button style={{float: 'right'}} bsStyle={"default"} onClick={this.lastStep}>Go Back</Button>
             </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    State : state,
    LocalStore : state.LocalStore,
    Views : state.Views,
    Campaign : state.Campaign,
    Providers : state.Providers
  }
}

const CampaignStepTwo = connect(mapStateToProps)(CampaignStepTwoComponent);

export default CampaignStepTwo;

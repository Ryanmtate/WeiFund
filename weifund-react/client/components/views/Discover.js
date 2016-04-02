import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel, Well, ButtonToolbar, Button, Carousel, Jumbotron } from 'react-bootstrap';
import * as Actions from '../../lib/actions/index';
// import {} from './index';

class DiscoverComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Featured Campaigns will come from Contracts
      FeaturedCampaigns : [{
        name : "Featured Campaign",
        description : "Campaign Description",
        currentFunding : 0,
        targetFunding : 100
      },{
        name : "Featured Campaign",
        description : "Campaign Description",
        currentFunding : 0,
        targetFunding : 100
      },{
        name : "Featured Campaign",
        description : "Campaign Description",
        currentFunding : 0,
        targetFunding : 100
      },{
        name : "Featured Campaign",
        description : "Campaign Description",
        currentFunding : 0,
        targetFunding : 100
      }]
    }
  }

  componentDidMount() {
    let { dispatch, Views } = this.props;

  }

  render(){


    let FeaturedCampaigns = this.state.FeaturedCampaigns.map((c, i) => {
      return (
        <Carousel.Item key={i}>
          <Jumbotron style={{height:"500px", marginRight:"120px", marginLeft:"120px"}}><h1>{c.name}</h1></Jumbotron>
          <Carousel.Caption>
            <h3>{c.description}</h3>
            <p>Current Funding: {c.currentFunding}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    })

    return (
      <div style={{
          marginTop : "-20px",
          height: "800px",
          backgroundPosition : "center",
          backgroundImage:"url('../../client/assets/banner-bg.jpg')"
        }}>
        <Grid>
          <br/>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <br/>
              <Carousel>
                { FeaturedCampaigns }
              </Carousel>
              <br/>
              <div >
                <Button bsStyle={"primary"} bsSize={"large"} block>Discover More</Button>
              </div>
            </Col>
          </Row>
        </Grid>
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

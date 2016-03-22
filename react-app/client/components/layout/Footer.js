import React, { Component } from 'react'
import { connect } from 'react-redux';

class FooterComponent extends Component {

  render(){
    return (
      <div>
        <p>Footer!</p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state : state
  }
}

const Footer = connect(mapStateToProps)(FooterComponent);

export default Footer;

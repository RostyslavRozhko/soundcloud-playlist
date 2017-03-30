import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../index.css';

class PasswordForm extends Component {
  render(){
    return(
      <div>
          <img src={this.props.image} alt=""></img>
          <span className="playlistName">{this.props.title}</span>
          <a href={this.props.link}>
            <input type="button" value="Open on Soundcloud" className="bigSoundcloudBtn" />
          </a>
      </div>
    )
  }
}

export default connect()(PasswordForm)

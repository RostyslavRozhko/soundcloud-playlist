import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../index.css';

class PlaylistInfo extends Component {
  render(){
    return(
      <div className="playlistInfo">
          <img src={this.props.image} alt=""></img>
          <span className="playlistName">{this.props.title}</span>
          <a href={this.props.link}>
            <input type="button" value="Open on Soundcloud" className="bigSoundcloudBtn" />
          </a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { image, title, link } = state.playlist
  return {
    image,
    title,
    link
  }
}

export default connect(mapStateToProps)(PlaylistInfo)

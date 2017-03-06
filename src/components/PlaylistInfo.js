import React, { Component } from 'react';

import '../index.css';

export default class PlaylistInfo extends Component {
  render(){
    return(
      <div className="playlistInfo">
          <img src="/images/albumCover.png" alt=""></img>
          <span className="playlistName">Tove Styrke station</span>
          <input type="button" value="Open on Soundcloud" className="bigSoundcloudBtn" />
      </div>
    )
  }
}

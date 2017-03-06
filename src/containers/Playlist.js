import React, { Component } from 'react';

import PlaylistItem from "./PlaylistItem";
import '../index.css';

export default class Playlist extends Component{
  render(){
    return(
      <div className="playlistSection">
          <div className="playlistNameSection">
              <span className="playlistName">Tove Styrke station</span>
          </div>
          <div className="playlist">
              <PlaylistItem />
          </div>
      </div>
    )
  }
}

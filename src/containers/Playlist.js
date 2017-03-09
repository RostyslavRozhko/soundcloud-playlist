import React, { Component } from 'react';
import { connect } from 'react-redux'

import PlaylistItem from "./PlaylistItem";
import '../index.css';

class Playlist extends Component{
  render(){
    if(this.props.tracks){
      var items = []
      this.props.tracks.forEach((song, index) => {
        items.push(<PlaylistItem key={index} song={song} index={index}/>)
      })
    }

    return(
      <div className="playlistSection">
          <div className="playlistNameSection">
              <span className="playlistName">{this.props.playlistTitle}</span>
          </div>
          <div className="playlist">
            {items}
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const tracks = state.playlist.tracks
  return {
    playlistTitle: state.playlist.title,
    tracks
  }
}

export default connect(mapStateToProps)(Playlist)

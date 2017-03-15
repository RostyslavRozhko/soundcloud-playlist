import React, { Component } from 'react';
import { connect } from 'react-redux'

import PlaylistItem from "./PlaylistItem";
import '../index.css';

class Playlist extends Component{
  render(){
    if(this.props.tracks){
      var items = []
      this.props.tracks.forEach((song, index) => {
        let is = false
        if(index === this.props.currentSongPosition){
          is = true
        }
        items.push(<PlaylistItem key={index} song={song} index={index} isCurrent={is}/>)
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
  let tracks = state.playlist.tracks
  let playlistTitle = state.playlist.title
  let currentSongPosition = state.playlist.currentSongPosition
  return {
    playlistTitle,
    tracks,
    currentSongPosition
  }
}

export default connect(mapStateToProps)(Playlist)

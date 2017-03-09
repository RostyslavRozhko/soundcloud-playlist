import React, { Component  } from 'react'
import { connect } from 'react-redux'

import '../index.css';

class PlaylistItem extends Component {
  render(){
    const song = this.props.song
    const duration = () => {
      return ((song.duration/1000/60) << 0) + ":" + (((song.duration/1000) % 60) << 0)
    }

    let image = null
    if (this.props.tracks[this.props.index].isCurrent)
      image = <img src={song.artwork_url} alt="" class="currentSong"></img>
    else
      image = <img src={song.artwork_url} alt=""></img>

    return (
      <div className="item">
          <div className="btn reorderBtn"></div>
          { image }
          <span className="songNameText">{song.title}</span>
          <span className="authorNameText">– {song.user.username}</span>
          <span className="authorNameText"> · {duration()}</span>
          <div className="btn moreBtn"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let tracks = state.playlist.tracks
  return {
    tracks
  }
}

export default connect(mapStateToProps)(PlaylistItem)

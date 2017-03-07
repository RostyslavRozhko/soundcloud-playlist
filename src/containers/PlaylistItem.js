import React, { Component  } from 'react'
import '../index.css';

class PlaylistItem extends Component {
  render(){
    const song = this.props.song
    const duration = () => {
      return ((song.duration/1000/60) << 0) + ":" + (((song.duration/1000) % 60) << 0)
    }
    return (
      <div className="item">
          <div className="btn reorderBtn"></div>
          <img src={song.artwork_url} alt=""></img>
          <span className="songNameText">{song.title}</span>
          <span className="authorNameText">– {song.user.username}</span>
          <span className="authorNameText"> · {duration()}</span>
          <div className="btn moreBtn"></div>
      </div>
    )
  }
}

export default PlaylistItem;

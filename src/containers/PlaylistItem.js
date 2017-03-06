import React, { Component  } from 'react'
import '../index.css';

class PlaylistItem extends Component {
  render(){
    return (
      <div className="item">
          <div className="btn reorderBtn"></div>
          <img src="/images/albumCover2.png" alt=""></img>
          <span className="songNameText">Samurai Boy</span>
          <span className="authorNameText">– Tove Styrke</span>
          <span className="authorNameText"> · 3:12</span>
          <div className="btn moreBtn"></div>
      </div>
    )
  }
}

export default PlaylistItem;

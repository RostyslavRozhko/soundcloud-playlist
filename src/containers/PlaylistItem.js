import React, { Component  } from 'react'
import { connect } from 'react-redux'

import { startPlayingAction } from '../actions'

import '../index.css';

class PlaylistItem extends Component {
  constructor(props){
    super(props)
    this.playSong = this.playSong.bind(this)
  }

  playSong(index, id){
    this.props.dispatch(startPlayingAction(index, id))
  }


  render(){
    const song = this.props.song
    const duration = () => {
      return ((song.duration/1000/60) << 0) + ":" + (((song.duration/1000) % 60) << 0)
    }

    let image = null
    if (this.props.isCurrent)
      image = <img src="" alt="" className="currentSong"></img>
    else
      image = <img src={song.artwork_url} alt=""></img>

    return (
      <div className="item" /*onClick={() => this.playSong(this.props.index, song.id)}*/>
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
  return {
  }
}

export default connect(mapStateToProps)(PlaylistItem)

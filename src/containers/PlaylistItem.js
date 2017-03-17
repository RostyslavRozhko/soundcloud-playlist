import React, { Component  } from 'react'
import { connect } from 'react-redux'

import { startPlayingAction } from '../actions'

import {DropdownItemMenu} from './DropdownItemMenu'
import '../index.css';

class PlaylistItem extends Component {
  constructor(props){
    super(props)
    this.playSong = this.playSong.bind(this)
  }

  playSong(index, id){
    if(!this.props.isCurrent)
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
      <div className="item" >
          <div className="btn reorderBtn"></div>
          <div onClick={() => this.playSong(this.props.index, song.id)} className="clickable">
              { image }
              <span className="songNameText noselect">{song.title}</span>
              <span className="authorNameText noselect">– {song.user.username}</span>
              <span className="authorNameText noselect"> · {duration()}</span>
          </div>
          <DropdownItemMenu />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(PlaylistItem)

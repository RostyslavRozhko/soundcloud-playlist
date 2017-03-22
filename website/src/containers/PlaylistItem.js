import React, { Component  } from 'react'
import { connect } from 'react-redux'

import { startPlayingAction } from '../actions'

import {DropdownItemMenu} from './DropdownItemMenu'
import '../index.css';

class PlaylistItem extends Component {
  playSong = (index, id) => {
    if(!this.props.isCurrent)
    this.props.dispatch(startPlayingAction(index, id))
  }

  createDropdownItems = (song, index) => {
    return {
      author:{
        name: "Go to artist",
        link: song.user.permalink_url
      },
      album: {
        name: "Go to album",
        link: song.permalink_url
      },
      delete: {
        name: "Remove from queue",
        index: index,
      }
    }
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
          <DropdownItemMenu items={this.createDropdownItems(song, this.props.index)}/>
      </div>
    )
  }
}

export default connect()(PlaylistItem)

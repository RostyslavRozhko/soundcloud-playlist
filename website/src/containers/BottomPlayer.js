import React, { Component } from 'react';
import { connect } from 'react-redux'

import { pausePlaying, playPlaying, startPlayingAction, getSongIdByIndex } from "../actions/playlist"
import { PAUSE, PLAY, NEXT, PREV } from "../constants"
import '../index.css';

class BottomPlayer extends Component {
  handleClick = (btn) => {
    switch(btn){
      case PLAY:
        this.props.dispatch(playPlaying())
        break
      case PAUSE:
        this.props.dispatch(pausePlaying())
        break
      case PREV:
        if(this.props.currentSongPosition === 0){
          break
        }
        let prevIndex = this.props.currentSongPosition - 1
        let prevId = this.props.dispatch(getSongIdByIndex(prevIndex))
        this.props.dispatch(startPlayingAction(prevIndex, prevId))
        break
      case NEXT:
        let nextIndex = this.props.currentSongPosition + 1
        let nextId = this.props.dispatch(getSongIdByIndex(nextIndex))
        this.props.dispatch(startPlayingAction(nextIndex, nextId))
        break
      default:
        return
    }
  }

  render(){
    let PlayPauseBtn = null
    if (this.props.isPlaying){
      PlayPauseBtn = <div className="bigBtns pauseBtn" onClick={() => this.handleClick(PAUSE)}></div>
    }
    else {
      PlayPauseBtn = <div className="bigBtns playBtn" onClick={() => this.handleClick(PLAY)}></div>
    }

    if(this.props.currentSong){
      var image = this.props.currentSong.artwork_url
      var title = this.props.currentSong.title
      var name = this.props.currentSong.user.username
    }

    return(
      <div className="bottomPlayer">
          <img src={image} alt=""></img>
          <span className="songNameText">{title}</span>
          <span className="authorNameText">– {name}</span>
          <div className="controlBtns">
              <div className="smallBtns volumeBtn"></div>
              <div className="bigBtns prevBtn" onClick={() => this.handleClick(PREV)}></div>
              { PlayPauseBtn }
              <div className="bigBtns nextBtn" onClick={() => this.handleClick(NEXT)}></div>
              <div className="smallBtns shuffleBtn"></div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.playlist.isPlaying,
    currentSong: state.playlist.currentSong,
    currentSongPosition: state.playlist.currentSongPosition
  }
}

export default connect(mapStateToProps)(BottomPlayer)

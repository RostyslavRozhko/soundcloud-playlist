import React, { Component } from 'react';
import { connect } from 'react-redux'

import { pausePlaying, playPlaying, startPlayingAction, getSongIdByIndex } from "../actions"
import { PAUSE, PLAY, NEXT, PREV } from "../constants"
import '../index.css';

class BottomPlayer extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(btn) {
    switch(btn){
      case PLAY:
        this.props.dispatch(playPlaying())
        break
      case PAUSE:
        this.props.dispatch(pausePlaying())
        break
      case NEXT:
        var index = this.props.currentSongPosition + 1
        var id = this.props.dispatch(getSongIdByIndex(index))
        this.props.dispatch(startPlayingAction(index, id))
        break
      case PREV:
        var index = this.props.currentSongPosition - 1
        var id = this.props.dispatch(getSongIdByIndex(index))
        this.props.dispatch(startPlayingAction(index, id))
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
  let isPlaying = state.playlist.isPlaying
  let currentSong = state.playlist.currentSong
  let currentSongPosition = state.playlist.currentSongPosition
  return {
    isPlaying,
    currentSong,
    currentSongPosition
  }
}

export default connect(mapStateToProps)(BottomPlayer)

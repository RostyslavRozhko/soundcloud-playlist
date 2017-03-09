import React, { Component } from 'react';
import { connect } from 'react-redux'

import { pausePlaying, playPlaying } from "../actions"
import { PAUSE, PLAY } from "../constants"
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

    return(
      <div className="bottomPlayer">
          <img src="/images/albumCover2.png" alt=""></img>
          <span className="songNameText">Borderline</span>
          <span className="authorNameText">– Tove Styrke</span>
          <div className="controlBtns">
              <div className="smallBtns volumeBtn"></div>
              <div className="bigBtns prevBtn"></div>
              { PlayPauseBtn }
              <div className="bigBtns nextBtn" onClick={this.handleClick}></div>
              <div className="smallBtns shuffleBtn"></div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let isPlaying = state.playlist.isPlaying
  return {
    isPlaying
  }
}

export default connect(mapStateToProps)(BottomPlayer)

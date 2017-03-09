import React, { Component } from 'react';
import { connect } from 'react-redux'

import { playSong } from "../actions"

import '../index.css';

class BottomPlayer extends Component {
  handleClick() {
    console.log("click")
  }

  render(){
    return(
      <div className="bottomPlayer">
          <img src="/images/albumCover2.png" alt=""></img>
          <span className="songNameText">Borderline</span>
          <span className="authorNameText">– Tove Styrke</span>
          <div className="controlBtns">
              <div className="smallBtns volumeBtn"></div>
              <div className="bigBtns prevBtn"></div>
              <div className="bigBtns playBtn"></div>
              <div className="bigBtns nextBtn" onClick={this.handleClick}></div>
              <div className="smallBtns shuffleBtn"></div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(BottomPlayer)

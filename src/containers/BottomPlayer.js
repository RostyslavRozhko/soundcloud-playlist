import React, { Component } from 'react';

import '../index.css';

export default class BottomPlayer extends Component {
  handleClick() {

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
              <div className="bigBtns playBtn" onClick={this.handleClick}></div>
              <div className="bigBtns nextBtn"></div>
              <div className="smallBtns shuffleBtn"></div>
          </div>
      </div>
    )
  }
}

import React, { Component } from 'react';

import PlaylistItem from "./PlaylistItem";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="application" id="application">
        <div className="appContainer">
            <div className="playlistInfo">
                <img src="images/albumCover.png" alt=""></img>
                <span className="playlistName">Tove Styrke station</span>
                <input type="button" value="Open on Soundcloud" className="bigSoundcloudBtn" />
            </div>
            <div className="playlistSection">
                <div className="playlistNameSection">
                    <span className="playlistName">Tove Styrke station</span>
                </div>
                <div className="playlist">
                    <PlaylistItem />
                </div>
            </div>
        </div>
        <div className="bottomPlayer">
            <img src="images/albumCover2.png" alt=""></img>
            <span className="songNameText">Borderline</span>
            <span className="authorNameText">– Tove Styrke</span>
            <div className="controlBtns">
                <div className="smallBtns volumeBtn"></div>
                <div className="bigBtns prevBtn"></div>
                <div className="bigBtns playBtn"></div>
                <div className="bigBtns nextBtn"></div>
                <div className="smallBtns shuffleBtn"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

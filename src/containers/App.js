import React, { Component } from 'react';

import PlaylistInfo from "../components/PlaylistInfo";
import BottomPlayer from "./BottomPlayer";
import Playlist from "./Playlist";
import '../index.css';

class App extends Component {
  componentDidMount = () => {
    window.location.hash = "application"
  }
  render() {
    return (
      <div className="application" id="application">
          <div className="appContainer">
              <PlaylistInfo />
              <Playlist />
        </div>
        <BottomPlayer />
      </div>
    );
  }
}

export default App;

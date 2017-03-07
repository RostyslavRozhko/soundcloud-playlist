import React, { Component } from 'react'
import { connect } from 'react-redux'

import PlaylistInfo from "../components/PlaylistInfo"
import BottomPlayer from "./BottomPlayer"
import Playlist from "./Playlist"
import '../index.css'

import { fetchPlaylist } from "../actions"

class App extends Component {
  componentWillMount = () => {
    this.props.dispatch(fetchPlaylist())
  }

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

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App)

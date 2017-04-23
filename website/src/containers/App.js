import React, { Component } from 'react'
import { connect } from 'react-redux'

import PlaylistInfo from '../components/PlaylistInfo'
import BottomPlayer from './BottomPlayer'
import Playlist from './Playlist'
import { USER } from '../constants'
import '../index.css'

import Popup from 'react-popup'

import { fetchPlaylist, setType } from '../actions/playlist'
import { fetchPlaylistFromMongo } from '../actions/database'

class App extends Component {
  componentWillMount = () => {
    if(this.props.saved){
      this.props.dispatch(fetchPlaylistFromMongo(this.props.id, this.props.type))
    } else {
      this.props.dispatch(fetchPlaylist(this.props.route, USER))
    }
  }

  componentDidMount = () => {
    // window.location.hash = 'application'
  }
  render() {
    return (
      <div className='application' id='application'>
          <Popup
            className='mm-popup'
            btnClass='mm-popup__btn'
            closeBtn={true}
            closeHtml={null}
            defaultOk='Ok'
            defaultCancel='Cancel'
            wildClasses={false}
          />
          <div className='appContainer'>
              <PlaylistInfo />
              <Playlist />
        </div>
        <BottomPlayer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const route = state.routing.locationBeforeTransitions.pathname;
  return {
    route: route
  }
}

export default connect(mapStateToProps)(App)

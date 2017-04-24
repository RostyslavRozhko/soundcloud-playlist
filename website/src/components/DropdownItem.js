import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTrack, startPlayingAction, getSongIdByIndex } from '../actions/playlist'

import '../index.css';

class DropdownItem extends Component {
  handleClick = (index) => {
    this.props.dispatch(deleteTrack(index))

    if(index === this.props.currentIndex){
      let id = this.props.dispatch(getSongIdByIndex(index))
      this.props.dispatch(startPlayingAction(index, id))
    }
  }

  render(){
    let rend = null
    if(this.props.isAction){
      rend = <li className="dropdownItem"><a onClick={() => this.handleClick(this.props.index)}>{this.props.name}</a></li>
    } else {
      rend = <li className="dropdownItem"><a href={this.props.url} target="_blank">{this.props.name}</a></li>
    }

    return(
      rend
    )
  }
}

function mapStateToProps(state){
  return {
    currentIndex: state.playlist.currentSongPosition
  }
}

export default connect(mapStateToProps)(DropdownItem)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { moveTracks } from '../actions'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'

import PlaylistItem from "./PlaylistItem";
import '../index.css';

const SortableItem = SortableElement(({value, songPosition, isCurrent}) => (
  <PlaylistItem song={value} index={songPosition} isCurrent={isCurrent}/>
))

const SortableList = SortableContainer(({tracksItems, currentSongPosition}) => {
  return (
    <div className="playlist">
      {tracksItems.map((value, index) => {
        let is = false
        if(index === currentSongPosition){
          is = true
        }
        return <SortableItem key={index} value={value} index={index} songPosition={index} isCurrent={is}/>
      }
    )}
    </div>
  );
});

class Playlist extends Component{

  onSortEnd = ({oldIndex, newIndex}) => {
    let copy = this.props.tracks
    var newCurrentIndex
    var currentIndex = this.props.currentSongPosition

    if(currentIndex === oldIndex){
      newCurrentIndex = newIndex
    } else if((oldIndex > currentIndex && newIndex > currentIndex) || (oldIndex < currentIndex && newIndex < currentIndex)){
      newCurrentIndex = currentIndex
    } else if(currentIndex > oldIndex && currentIndex <= newIndex){
      newCurrentIndex = currentIndex - 1
    } else if(currentIndex > oldIndex && currentIndex <= newIndex){
      newCurrentIndex = currentIndex - 1
    } else if(currentIndex >= newIndex && currentIndex < oldIndex){
      newCurrentIndex = currentIndex + 1
    }

    copy = arrayMove(copy, oldIndex, newIndex)
    this.props.dispatch(moveTracks(copy, newCurrentIndex))
  }

  render(){
    if(this.props.tracks){
      var playlist = <SortableList
        tracksItems={this.props.tracks}
        currentSongPosition={this.props.currentSongPosition}
        onSortEnd={this.onSortEnd}
        lockAxis="y"
        lockToContainerEdges={true}
        distance={1}
      />
    }

    return(
      <div className="playlistSection">
          <div className="playlistNameSection">
              <span className="playlistName">{this.props.playlistTitle}</span>
          </div>
          {playlist}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playlistTitle: state.playlist.title,
    tracks: state.playlist.tracks,
    currentSongPosition: state.playlist.currentSongPosition
  }
}

export default connect(mapStateToProps)(Playlist)

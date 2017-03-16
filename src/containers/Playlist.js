import React, { Component } from 'react'
import { connect } from 'react-redux'

import { moveTracks } from '../actions'

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'

import PlaylistItem from "./PlaylistItem";
import '../index.css';

const SortableItem = SortableElement(({value, index, isCurrent}) => (
  <PlaylistItem song={value} index={index} isCurrent={isCurrent}/>
))

const SortableList = SortableContainer(({items, currentSongPosition}) => {
  return (
    <div className="playlist">
      {items.map((value, index) => {
        let is = false
        if(index == currentSongPosition){
          is = true
        }
        return <SortableItem key={index} value={value} index={index} isCurrent={is}/>
      }
    )}
    </div>
  );
});

class Playlist extends Component{
  showPlaylist = () => {
    if(this.props.tracks){
      return <SortableList items={this.props.tracks} onSortEnd={this.onSortEnd} currentSongPosition={this.props.currentSongPosition}/>
    }
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    let copy = this.props.tracks
    copy = arrayMove(copy, oldIndex, newIndex)
    this.props.dispatch(moveTracks(copy, newIndex))
  };

  render(){
    return(
      <div className="playlistSection">
          <div className="playlistNameSection">
              <span className="playlistName">{this.props.playlistTitle}</span>
          </div>
          {this.showPlaylist()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  let tracks = state.playlist.tracks
  let playlistTitle = state.playlist.title
  let currentSongPosition = state.playlist.currentSongPosition
  return {
    playlistTitle,
    tracks,
    currentSongPosition
  }
}

export default connect(mapStateToProps)(Playlist)

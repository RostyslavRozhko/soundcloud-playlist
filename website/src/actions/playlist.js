import SC from 'soundcloud'
import { CLIENT_ID } from "../constants"

import { SET_TYPE } from '../constants'
import { SET_PLAYLIST, MOVE_ITEMS, DELETE } from "../constants"
import { START_PLAYING, PAUSE, PLAY, STOP } from "../constants"

export const setPlaylist = data => ({
  type: SET_PLAYLIST,
  data
})

export const startPlaying = (id, player) => ({
  type: START_PLAYING,
  id,
  player
})

export const pausePlaying = () => ({
  type: PAUSE
})

export const playPlaying = () => ({
  type: PLAY
})

const stopPlaying = () => ({
  type: STOP
})

const moveItems = (tracks, newIndex) => ({
  type: MOVE_ITEMS,
  tracks: tracks,
  index: newIndex
})

export const deleteTrack = (index) => ({
  type: DELETE,
  index: index
})

export function moveTracks(tracks, newIndex){
  return (dispatch) => {
    dispatch(moveItems(tracks, newIndex))
  }
}

SC.initialize({
  client_id: CLIENT_ID
})

const normalize = (data, type) => {
  let obj = {
    type: type,
    id: data.id,
    title: data.title,
    link: data.permalink_url,
    image: data.artwork_url ? data.artwork_url.replace('-large', '-t300x300') : data.tracks[0].artwork_url.replace('-large', '-t300x300'),
    tracks: data.tracks,
  }
  return obj
}

export function fetchPlaylist(route, type){
  return (dispatch, state) => {
    SC.get(`playlists${route}`)
      .then(info =>{
        dispatch(setPlaylist(normalize(info, type)))
        dispatch(startPlayingAction(0, info.tracks[0].id))
      })
      .catch(err => { throw err })
  }
}

export function startPlayingAction(index, id) {
  return (dispatch) => {
    SC.stream(`/tracks/${id}`)
      .then(player => {
        player.options.protocols = [ "http" ]
        player.play()
        player.on("finish", () => {
          let nextIndex = index + 1
          dispatch(startPlayingAction(nextIndex,
            dispatch(getSongIdByIndex(nextIndex))))
        })
        dispatch(stopPlaying())
        dispatch(startPlaying(index, player))
      })
      .catch(err => { throw err })
  }
}

export function getSongIdByIndex(index){
  return (dispatch, getState) => {
    return getState().playlist.tracks[index].id
  }
}

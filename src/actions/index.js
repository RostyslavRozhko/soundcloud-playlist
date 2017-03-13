import SC from 'soundcloud'
import { CLIENT_ID } from "../constants"

import { SET_PLAYLIST } from "../constants"
import { START_PLAYING, PAUSE, PLAY } from "../constants"

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

SC.initialize({
  client_id: CLIENT_ID
})

const normalize = data => {
  let obj = {
    id: data.id,
    title: data.title,
    link: data.permalink_url,
    image: data.artwork_url ? data.artwork_url.replace('-large', '-t300x300') : data.tracks[0].artwork_url.replace('-large', '-t300x300'),
    tracks: data.tracks,
    isPlaying: false,
    currentSong: 0
  }
  return obj
}

export function fetchPlaylist(route){
  return (dispatch, state) => {
    SC.get(`playlists${route}`)
      .then(info =>{
        dispatch(setPlaylist(normalize(info)))
        startPlayingAction(0, dispatch, info.tracks[0].id)
      })
      .catch(err => { throw err })
  }
}

export function startPlayingAction(index, dispatch, id) {
  SC.stream(`/tracks/${id}`)
    .then(player => {
      player.options.protocols = [ "http" ]
      player.play()
      dispatch(startPlaying(index, player))
    })
    .catch(err => { throw err })
}

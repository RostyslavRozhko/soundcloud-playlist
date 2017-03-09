import SC from 'soundcloud'

import { SET_PLAYLIST } from "../constants"
import { START_PLAYING } from "../constants"

export const setPlaylist = data => ({
  type: SET_PLAYLIST,
  data
})

export const startPlaying = id => ({
  type: START_PLAYING,
  id
})

const CLIENT_ID = 'f4323c6f7c0cd73d2d786a2b1cdae80c';

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
        console.log(info.tracks[0]);
        dispatch(setPlaylist(normalize(info)))
        startPlayingAction(0, dispatch, info.tracks[0].id)
      })
      .catch(err => { throw err })
  }
}

export function startPlayingAction(index, dispatch, id) {
  console.log(id);
  SC.stream(`/tracks/${id}`)
    .then(player => {
      player.play()
      dispatch(startPlaying(index))
    })
    .catch(err => { throw err })
}

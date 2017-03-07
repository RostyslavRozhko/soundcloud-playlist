import SC from 'soundcloud'

// import {PAUSE, PLAY, NEXT, PREV, SET_PLAYLIST} from '../constants';

import { SET_PLAYLIST } from "../constants"

export const setPlaylist = data => ({
  type: SET_PLAYLIST,
  data
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
    image: data.tracks[0].artwork_url,
    tracks: data.tracks
  }
  return obj
}

export function fetchPlaylist(){
  return (dispatch) => {
    SC.get(`playlists/176082928`)
      .then(info =>{
        dispatch(setPlaylist(normalize(info)))
      })
      .catch(err => { throw err })
  }
}

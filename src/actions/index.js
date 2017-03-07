import SC from 'soundcloud'

import {PAUSE, PLAY, NEXT, PREV} from '../constants';

import PATH from "../constants"

export const pause = () => ({
  type: PAUSE
})

const CLIENT_ID = 'f4323c6f7c0cd73d2d786a2b1cdae80c';

SC.initialize({
  client_id: CLIENT_ID
})

export function fetchPlaylist(){
  // return (dispatch) => {
    SC.get(`playlists/176082928`)
      .then(info =>{
        console.log(info)
      })
      .catch(err => { throw err })
  // }

}

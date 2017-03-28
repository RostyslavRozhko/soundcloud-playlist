import sha1 from 'sha1'
import { setPlaylist, startPlayingAction } from './playlist'
import { WEBSITE_URI } from "../constants"


export function savePlaylist(state, password, masterPassword){
  let id = state.id + (Math.floor(Math.random() * 10000)).toString()
  let hashedPassword = sha1(password)
  let hashedmasterPassword = sha1(masterPassword)

  let stateToSave = {
    id: id,
    title: state.title,
    link: state.link,
    image: state.image,
    tracks: state.tracks
  }

  fetch(`${WEBSITE_URI}/playlist/${id}`,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({state: stateToSave, password: hashedPassword, master_password: hashedmasterPassword})
  })
    .then(res => (res.json()))
    .then(res => {
      if(!res.error){
        window.location.href = `/s/${res.id}`
        return true
      } else {
        return false
      }
    })
    .catch(err => console.log(err))
}

export function updatePlaylist(id, tracks){
  console.log(tracks);

  fetch(`${WEBSITE_URI}/playlist/update/${id}`,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({tracks: tracks})
  })
    .then(res => (res.json()))
    .then(res => {
      if(!res.error){
        return true
      } else {
        return false
      }
    })
    .catch(err => console.log(err))
}

export function checkPassword(id, password) {
  let hashedPassword = sha1(password)
  return fetch(`${WEBSITE_URI}/password${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({password: hashedPassword})
  })
  .then(response => response.json())
}

export function fetchPlaylistFromMongo(id, type){
  return (dispatch, state) => {
    fetch(`${WEBSITE_URI}/playlist${id}`)
      .then(response => {
        return response.json()})
      .then(response => {
        let obj = {
          ...response.data,
          type: type
        }
        dispatch(setPlaylist(obj))
        dispatch(startPlayingAction(0, response.data.tracks[0].id))
      })
      .catch(err => { throw err })
  }
}

import sha1 from 'sha1'
import { WEBSITE_URI } from "../constants"


export function savePlaylist(state, password, masterPassword){
  let id = state.id + (Math.floor(Math.random() * 10000)).toString()
  let hashedPassword = sha1(password)
  let hashedmasterPassword = sha1(masterPassword)

  fetch(`${WEBSITE_URI}/playlist/${id}`,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: {state: state, password: hashedPassword, master_password: hashedmasterPassword}
  })
    .then(res => (res.json()))
    .then(res => {
      if(!res.error){
        alert("success")
        return true
      } else {
        return false
      }
    })
    .catch(err => console.log(err))
}

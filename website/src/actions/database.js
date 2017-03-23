import { sha1 } from 'sha1'
import WEBSITE_URI from '../cosntants'


export function savePlaylist(state, password, masterPassword){
  let id = state.id + (Math.random() * 1000)
  let hashedPassword = sha1(password)
  let hashedmasterPassword = sha1(masterPassword)

  fetch(`${WEBSITE_URI}/playlist/${id}`,
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({state: state, password: hashedPassword, master_password: hashedmasterPassword})
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

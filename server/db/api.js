var Playlist = require('./PlaylistModel')
var mongoose = require('./db')

exports.savePlaylist = (obj) => {
  let newPlaylist = new Playlist({
    playlistId: obj.id,
    state: obj.state,
    password: obj.password,
    masterPassword: obj.masterPassword
  })

  newPlaylist.save()
    .then(doc => doc)
    .catch(err => { throw err })

}

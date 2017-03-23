var express = require('express')
var router = express.Router()

// Mongoose
var Playlist = require('../db/PlaylistModel')
var mongoose = require('../db/db')

router.post('/playlist/:id', (req, res) => {
  let id = req.params.id
  let data = req.body
  let newPlaylist = new Playlist({
    _id: mongoose.Types.ObjectId(),
    playlistId: id,
    state: data.state,
    password: data.password,
    masterPassword: data.master_password
  })

  newPlaylist.save()
    .then(doc => {
      res.send({error: null, id: doc.playlistId})
    })
    .catch(err => {
      res.send({error: err})
    })

})

router.get('/playlist/:id', (req, res) => {
  let id = req.params.id

  let promise = Playlist.findOne({playlistId: id}).exec()

  promise
    .then(data => {
      res.send({error: null, data: data})
    })
    .catch(err => {
      res.send({error: err})
    })
})

router.get('/password/:id', (req, res) => {
  let id = req.params.id;
  console.log(id)

  let query = Playlist.findOne({playlistId: id})
    .select({"id": 1, "playlistId": 1, "password": 1, "masterPassword": 1})

  let promise = query.exec()

  promise
    .then(data => {
      res.send({error: null, data: data})
    })
    .catch(err => {
      res.send({error: err})
    })

})

module.exports = router;

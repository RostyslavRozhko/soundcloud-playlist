var express = require('express')
let router = express.Router()
let sendMail = require('../sendMail')

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

  console.log(data.email);
  if(data.email){
    sendMail.newMail(data.email, {
      // Add data to email
    })
  }

  newPlaylist.save()
    .then(doc => {
      res.send({error: null, id: doc.playlistId})
    })
    .catch(err => {
      res.send({error: err})
    })

})

router.post('/playlist/update/:id', (req, res) => {
  let id = req.params.id
  let data = req.body

  Playlist.findOneAndUpdate(
    {'playlistId': id},
    { $set: {
            'state.tracks': data.tracks
        }},
    {safe: true, upsert: true, new : true},

    function(err, model) {
            if(err){
                res.send({error: null, id: doc.playlistId})
            } else {
                res.send({error: err})
            }
        }
  )
})

router.get('/playlist/:id', (req, res) => {
  let id = req.params.id

  let promise = Playlist.findOne({playlistId: id}).exec()

  promise
    .then(data => {
      res.send({error: null, data: data.state})
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

router.post('/password/:id', (req, res) => {
  let id = req.params.id
  let inputData = req.body

  let query = Playlist.findOne({playlistId: id})
    .select({"id": 1, "playlistId": 1, "password": 1, "masterPassword": 1})

  let promise = query.exec()

  promise
    .then(data => {
      if(data.masterPassword == inputData.password){
        res.send({error: null, data: {masterPassword: true}})
      } else if(data.password == inputData.password) {
        res.send({error: null, data: {password: true}})
      } else {
        res.send({error: null, data: null})
      }

    })
    .catch(err => {
      res.send({error: err})
    })
})

module.exports = router;

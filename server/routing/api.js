var express = require('express');
var router = express.Router();
var api = require('../db/api')

router.get('/*', function(req, res, next){
  res.send('api')
})

router.post('/saveplaylist', (req, res) => {
  let data = req.body;

  api.savePlaylist(obj)

  res.redirect(`/s/${obj.playlistId}`)
})

module.exports = router;

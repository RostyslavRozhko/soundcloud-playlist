var db = require('./db');

var playlistSchema = new db.Schema({
    _id: db.Schema.Types.ObjectId,
    playlistId: db.Schema.Types.String,
    state: db.Schema.Types.Mixed,
    password: db.Schema.Types.String,
    masterPassword: db.Schema.Types.String
  }
)

module.exports = db.model('Playlist', playlistSchema);

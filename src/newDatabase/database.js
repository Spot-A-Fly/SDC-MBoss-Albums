const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/spoticlone', { useNewUrlParser: true, useUnifiedTopology: true });

const dbNew = mongoose.connection;

dbNew.on('error', () => console.error('Error loading Albums database'));
dbNew.once('open', () => console.log('Albums database connected'));

const albumSchema = new mongoose.Schema({
  bandName: String,
  bandId: Number,
  albumName: String,
  genre: String,
  albumCover: String,
  albumType: String,
});

const Album = mongoose.model('Album', albumSchema);

module.exports = { dbNew };
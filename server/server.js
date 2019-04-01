const express = require('express');
const { DatabaseQueryHandler } = require('./database/index.js');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));
const PORT = 3242;

/* ROUTES:
/data/artist
/data/songsbyartist
/data/albumsbyartist
/data/albumswithartist
/data/epswithartist
/data/compilationswithartist
*/
// albumtypes: Compilation, EP Album Includes
// app.get('/data/artist', (req, res) => {}); //all info
// app.get('/data/songsbyartist', (req, res) => {}); //dont do
app.get('/data/albumsbyartist/:artistId', (req, res) => {
  // route to db and get album array by an artist id albums with Album tag

  DatabaseQueryHandler.getArtistAlbums(req.params.artistId, (err, data) => {
    if (err) {
      res.end(404);
    } else {
      console.log('writing data albumsbyartist: ');
      res.json(data);
    }
  });
}); // all albums
app.get('/data/albumswithartist/:artistId', (req, res) => {
  // route to db and get album array with 'Includes' by an artist id return empty array if nothing
  console.log(typeof req.params.artistId);

  DatabaseQueryHandler.getArtistAlbums(
    req.params.artistId,
    (err, data) => {
      if (err) {
        res.end();
      } else {
        res.json(data);
      }
    },
    'Includes',
  );
}); // Includes tag
app.get('/data/epswithartist/:artistId', (req, res) => {
  // route to db and get album array with 'EP' by an artist id
  DatabaseQueryHandler.getArtistAlbums(
    req.params.artistId,
    (err, data) => {
      if (err) {
        res.end();
      } else {
        res.json(data);
      }
    },
    'EP',
  );
}); // EP tag
app.get('/data/compilationswithartist/:artistId', (req, res) => {
  // route to db and get album array with 'Compilation' by an artist id
  DatabaseQueryHandler.getArtistAlbums(
    req.params.artistId,
    (err, data) => {
      if (err) {
        res.end();
      } else {
        res.json(data);
      }
    },
    'Compilation',
  );
}); // compilation tag

app.listen(PORT, (err) => {
  if (err) {
    console.error('failed to open server');
  } else {
    console.log(`Listening on ${PORT}`);
  }
});

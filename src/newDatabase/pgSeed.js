/* eslint-disable no-console */
const path = require('path');
const db = require('./pgDatabase.js');

const createAlbumsTable = () => {
  const sqlString = `CREATE TABLE albums (
    id serial PRIMARY KEY,
    bandName VARCHAR (200),
    bandId INTEGER,
    albumName VARCHAR (200),
    genre VARCHAR (200),
    albumCover VARCHAR (200),
    albumType VARCHAR (200)
    )`;

  return db.query('DROP TABLE IF EXISTS albums')
    .then(() => db.query(sqlString));
};

const seedDB = () => {
  const CSVpath = path.resolve(__dirname, './albums.csv');
  const sqlString = `COPY albums(bandName,bandId,albumName,genre,albumCover,albumType) FROM '${CSVpath}' DELIMITER ',' CSV HEADER`;
  return db.query(sqlString);
};

const indexArtistId = () => {
  const sqlString = 'CREATE INDEX bandId_index ON albums(bandId)';

  return db.query(sqlString);
};

createAlbumsTable()
  .then(() => console.log('Table created'))
  .then(seedDB)
  .then(() => console.log('Records imported'))
  .then(indexArtistId)
  .catch(console.log);
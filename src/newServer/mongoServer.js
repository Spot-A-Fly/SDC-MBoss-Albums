const express = require('express');
const morgan = require('morgan');
const db = require('../newDatabasde/mongoDatabase.js');

const app = express();

const PORT = process.env.PORT || 3242;

app.listen(PORT, (err) => {
  if (err) {
    console.log('Server connection error', err);
  } else {
    console.log('Connected. Server running on port:', PORT);
  }
});
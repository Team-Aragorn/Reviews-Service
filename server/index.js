const express = require('express');
const db = require('./db/index.js');

const app = express();
const PORT = 3121;

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}!`);
});

app.use(express.static('public'));

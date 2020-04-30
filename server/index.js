const express = require('express');
const db = require('./db/index.js');

const app = express();
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}!`);
});

app.get('/games/:gameId', (req, res) => {
  db.Review.find({ gameId: req.params.gameId }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.use(express.static('public'));

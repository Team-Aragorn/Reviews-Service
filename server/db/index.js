const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection to database successful!');
  const reviewSchema = new mongoose.Schema({
    gameId: Number,
    date: {type: Date, default: Date.now},
    overall: Number,
    title: String,
    review: String,
    recommend: Boolean,
    nickname: String,
    location: String,
    email: String,
    buyForSelf: Boolean,
    ageBracket: Number,
    gender: Number,
    graphics: Number,
    gameplay: Number,
    appeal: Number,
    ownershipBracket: Number,
    purchaseOnline: Boolean,
    readReviews: Boolean,
    recommendBGS: Number,
    meta: {
      helpful: Number,
      unhelpful: Number
    }
  });

  const Review = mongoose.model('Review', reviewSchema);

  // const reviewOne = new Review({
  //   gameId: 1,
  //   overall: 4,
  //   title: 'The Greatest Game',
  //   review: 'This game is the greatest!',
  //   recommend: true,
  //   nickname: 'Reviewer Two',
  //   location: 'Citytown, USA',
  //   email: 'name@domain.com',
  //   buyForSelf: true,
  //   ageBracket: 2,
  //   gender: 2,
  //   graphics: 4,
  //   gameplay: 5,
  //   appeal: 3,
  //   ownershipBracket: 2,
  //   purchaseOnline: true,
  //   readReviews: false,
  //   recommendBGS: 1,
  //   meta: {
  //     helpful: 25,
  //     unhelpful: 11
  //   }
  // });

  // reviewOne.save((err, results) => {
  //   if (err) {
  //     console.log(err)
  //     return;
  //   }

  //   console.log(results);
  // });
});

module.exports.db = db;

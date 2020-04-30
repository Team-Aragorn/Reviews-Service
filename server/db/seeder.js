const faker = require('faker');

function seed(Schema, num) {
  for (let i = 1; i <= num; i += 1) {
    const numOfReviews = Math.ceil(Math.random() * 20);

    for (let j = 0; j < numOfReviews; j += 1) {
      const review = new Schema({
        gameId: i,
        overall: Math.ceil(Math.random() * 5),
        title: faker.fake('{{company.catchPhraseAdjective}} {{commerce.productAdjective}} {{company.bsNoun}}'),
        review: faker.lorem.paragraph(),
        recommend: faker.random.boolean(),
        nickname: faker.internet.userName(),
        location: faker.fake('{{address.city}}, {{address.state}}'),
        email: faker.internet.email(),
        buyForSelf: faker.random.boolean(),
        ageBracket: Math.ceil(Math.random() * 8),
        gender: Math.ceil(Math.random() * 4),
        graphics: Math.ceil(Math.random() * 5),
        gameplay: Math.ceil(Math.random() * 5),
        appeal: Math.ceil(Math.random() * 5),
        ownershipBracket: Math.ceil(Math.random() * 5),
        purchaseOnline: faker.random.boolean(),
        readReviews: faker.random.boolean(),
        recommendBGS: Math.ceil(Math.random() * 10),
        meta: {
          helpful: Math.floor(Math.random() * 101),
          unhelpful: Math.floor(Math.random() * 101),
        },
      });

      review.save((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
}

module.exports.seed = seed;

import React from 'react';
import styled from 'styled-components';

import ReviewList from './components/ReviewList';
import ReviewSummary from './components/ReviewSummary';

const SectionHeading = styled.h1`
  font-size: 34px;
  font-weight: 400;
  line-height: 35px;
  text-transform: uppercase;
`;

const Container = styled.div`
  max-width: 1280px;
  font-family: sans-serif;
  margin: auto;
  padding: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGame: 0,
      reviews: [{
        _id: '0',
        gameId: 0,
        date: `${new Date()}`,
        overall: 1,
        title: '',
        review: '',
        recommend: false,
        nickname: '',
        location: '',
        email: '',
        buyForSelf: false,
        ageBracket: 1,
        gender: 1,
        graphics: 1,
        gameplay: 1,
        appeal: 1,
        ownershipBracket: 1,
        purchaseOnline: false,
        readReviews: false,
        recommendBGS: 1,
        meta: {
          helpful: 1,
          unhelpful: 1,
        },
      }],
      ratingCounts: [],
      ratingAverages: [],
      totalReviews: 0,
    };

    this.REVIEWSBASE = 'http://localhost:3002/reviews/';
    this.fetchReviews = this.fetchReviews.bind(this);
    this.digestReviews = this.digestReviews.bind(this);
  }

  componentDidMount() {
    const gameId = window.location.pathname.match(/\/games\/(\d+)\//);

    this.fetchReviews(gameId[1]);
  }

  fetchReviews(currentGame = this.state.gameId) {
    fetch(`${this.REVIEWSBASE}${currentGame}`)
      .then((response) => response.json())
      .then((data) => { this.digestReviews(currentGame, data); })
      .catch((err) => { console.log(err); });
  }

  digestReviews(gameId, reviews) {
    let oneStarCount = 0;
    let twoStarCount = 0;
    let threeStarCount = 0;
    let fourStarCount = 0;
    let fiveStarCount = 0;
    let starSum = 0;
    let graphicSum = 0;
    let gameplaySum = 0;
    let appealSum = 0;

    for (let i = 0; i < reviews.length; i += 1) {
      if (reviews[i].overall === 1) {
        oneStarCount += 1;
      } else if (reviews[i].overall === 2) {
        twoStarCount += 1;
      } else if (reviews[i].overall === 3) {
        threeStarCount += 1;
      } else if (reviews[i].overall === 4) {
        fourStarCount += 1;
      } else if (reviews[i].overall === 5) {
        fiveStarCount += 1;
      }

      starSum += reviews[i].overall;
      graphicSum += reviews[i].graphics;
      gameplaySum += reviews[i].gameplay;
      appealSum += reviews[i].appeal;
    }

    this.setState({
      gameId,
      reviews,
      ratingCounts: [oneStarCount, twoStarCount, threeStarCount, fourStarCount, fiveStarCount],
      ratingAverages: [
        starSum / reviews.length,
        graphicSum / reviews.length,
        gameplaySum / reviews.length,
        appealSum / reviews.length,
      ],
      totalReviews: reviews.length,
    });
  }

  render() {
    const { reviews, ratingCounts, ratingAverages, totalReviews } = this.state;

    return (
      <Container>
        <SectionHeading>reviews</SectionHeading>
        <Container>
          <ReviewSummary counts={ratingCounts} averages={ratingAverages} total={totalReviews} />
          <ReviewList reviews={reviews} endpoint={this.REVIEWSBASE} redraw={this.fetchReviews} />
        </Container>
      </Container>
    );
  }
}

export default App;

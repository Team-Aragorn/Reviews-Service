import React from 'react';
import styled from 'styled-components';

import ReviewList from './components/ReviewList';

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
    };

    this.REVIEWSBASE = 'http://localhost:3002/reviews/';
  }

  componentDidMount() {
    const gameId = window.location.pathname.match(/\/games\/(\d+)\//);
    this.setState({
      currentGame: gameId[1],
    }, () => {
      this.fetchReviews();
    });
  }

  fetchReviews() {
    const { currentGame } = this.state;

    fetch(`${this.REVIEWSBASE}${currentGame}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          reviews: data,
        });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const { reviews } = this.state;

    return (
      <Container>
        <SectionHeading>reviews</SectionHeading>
        <Container>
          <ReviewList reviews={reviews} endpoint={this.REVIEWSBASE} />
        </Container>
      </Container>
    );
  }
}

export default App;

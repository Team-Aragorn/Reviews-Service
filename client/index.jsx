import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './components/ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGame: 0,
      reviews: [{
        gameId: 0,
        date: Date.now(),
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
    const { currentGame } = this.state;
    const { reviews } = this.state;

    return (
      <div>
        <h4>React is online!</h4>
        And Webpack is watching!
        <br />
        Now viewing the data for game {currentGame}
        <br />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

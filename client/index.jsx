import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGame: 0,
      reviews: [{
        gameId: 0,
        date: Date.now,
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

    this.REVIEWSBASE = 'http://localhost:3002/games/';
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    this.setState({
      currentGame: urlParams.get('gameId'),
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
    const { title } = this.state.reviews[0];

    return (
      <div>
        <h4>React is online!</h4>
        And Webpack is watching!
        <br />
        Now viewing the data for game {currentGame}
        <br />
        The title of the first review for this game is: {title}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

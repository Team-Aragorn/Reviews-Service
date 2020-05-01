import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGame: 0,
      reviews: []
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    this.setState({
      currentGame: urlParams.get('gameId'),
    });
  }

  render() {
    return (
      <div>
        <h4>React is online!</h4>
        And Webpack is watching!<br />
        Now viewing the data for game {this.state.currentGame}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => (
  <div>
    <h4>React is online!</h4>
    And Webpack is watching!
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));

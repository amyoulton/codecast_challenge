import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Questions from '../Components/Questions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Questions} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

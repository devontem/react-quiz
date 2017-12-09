import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import QuizContainer from './containers/QuizContainer/QuizContainer';
import store from './containers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={QuizContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import Header from './common/Header'
import store from './store'
import { Provider } from 'react-redux'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;
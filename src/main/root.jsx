import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import DevTools from './devTools';
import configureStore from '../store/configureStore';

export default class Root extends Component {
  render(){

    const store = configureStore();
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

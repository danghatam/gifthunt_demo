import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import DevTools from '../main/devTools';
import routes from '../routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { createHistory } from 'history';


const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(createLogger()),
  reduxReactRouter({ routes, createHistory }),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if ( module.hot ) {
    module.hot.accept('../reducers', () => {

      const nexRoottReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    })
  }
  return store;
}

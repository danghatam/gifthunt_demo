import * as ActionTypes from '../actions'
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import gifts from './gifts';
import achievements from './achievements';
import friends from './friends';
import merchandises from './merchandises';
import extension from './extension';

const rootReducer = combineReducers({
  gifts,
  friends,
  merchandises,
  achievements,
  extension,
  router
});

export default rootReducer;

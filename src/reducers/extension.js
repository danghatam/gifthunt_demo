import { CHANGE_HEADER, SET_PREVIOUS_STATE } from '../actions';

const extension = ( state = {
  header: 'LADYBUG APP',
  previousState: '/app/send'
}, action ) => {
  switch(action.type){
    case CHANGE_HEADER:
      return {
        previousState: state.previousState,
        header: action.header
      };
    case SET_PREVIOUS_STATE:
      return {
        previousState: action.previousState,
        header: state.header
      };
    default:
      return state;
  }
}

export default extension;

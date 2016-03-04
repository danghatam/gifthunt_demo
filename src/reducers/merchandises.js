import { REQUEST_MERCHANDISES, SELECT_MERCHANDISE, REMOVE_MERCHANDISE } from '../actions';

const merchandises = (
  state = {
    list: [],
    selected: {}
  },
  action
) => {
  switch(action.type){
    case REQUEST_MERCHANDISES:
      return {
        list: action.merchandises,
        selected: {}
      };
    case SELECT_MERCHANDISE:
      return {
        list: state.list,
        selected: action.merchandise
      };
    case REMOVE_MERCHANDISE:
      let merchandises = state.list.filter( merchandise => merchandise.id !== action.id );
      return {
        list: merchandises,
        selected: state.selected
      };
    default:
      return state;
  }
};

export default merchandises;

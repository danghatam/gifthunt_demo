import { REQUEST_FRIENDS, UPDATE_ACTIVE_FRIEND } from '../actions';

const friends = (
  state = {
    list: [],
    active: null
  },
  action) => {
  switch(action.type) {
    case REQUEST_FRIENDS:
      return {
        list: action.friends,
        active: state.active
      };
    case UPDATE_ACTIVE_FRIEND:
      return {
        list: state.list,
        active: action.friend
      };
    default:
      return state;
  }
};

export default friends;

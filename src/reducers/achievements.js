import { REQUEST_ACHIEVEMENTS, REQUEST_ACHIEVEMENT } from '../actions';

const achievements = ( state = {
  list: {
    id: null,
    friends: []
  },
  selected: [
    {
      gift: {},
      merchandise: {}
    }
  ]
}, action ) => {
  switch( action.type ) {
    case REQUEST_ACHIEVEMENTS:
      return {
        list: action.achievements,
        selected: []
      };
    case REQUEST_ACHIEVEMENT:
      return {
        list: state.list,
        selected: action.achievement
      };
    default:
      return state;
  }
};

export default achievements;

import { REQUEST_GIFTS, REMOVE_GIFT } from '../actions';

const gifts = ( state = {
  total: 0,
  gifts: []
}, action ) => {
  switch(action.type) {
    case REQUEST_GIFTS:
      console.log(11111);
      console.log(action.gifts);
      return action.gifts;
    case REMOVE_GIFT:
      let gifts = state.gifts.filter( ({ gift, _ }) => gift.id !== action.id );
      return {
        total: gifts.length,
        gifts: gifts
      }
    default:
      return state;
  }
};

export default gifts;

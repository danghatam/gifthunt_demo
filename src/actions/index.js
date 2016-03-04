////// type actions //////
export const REQUEST_FRIENDS = 'REQUEST_FRIENDS';
export const REQUEST_MERCHANDISES = 'REQUEST_MERCHANDISES';
export const REQUEST_GIFTS = 'REQUEST_GIFTS';
export const REQUEST_ACHIEVEMENTS = 'REQUEST_ACHIEVEMENTS';
export const RECEIVE_GIFTS = 'RECEIVE_GIFTS';
export const SEND_GIFT = 'SEND_GIFT';
export const OPEN_GIFT = 'OPEN_GIFT';
export const LIKE_GIFT = 'LIKE_GIFT';
export const DISLIKE_GIFT = 'DISLIKE_GIFT';
export const UPDATE_ACTIVE_FRIEND = 'UPDATE_ACTIVE_FRIEND';
export const SELECT_MERCHANDISE = 'SELECT_MERCHANDISE';
export const REMOVE_MERCHANDISE = 'REMOVE_MERCHANDISE';
export const REMOVE_GIFT = 'REMOVE_GIFT';
export const REQUEST_ACHIEVEMENT = 'REQUEST_ACHIEVEMENT';
export const CHANGE_HEADER = 'CHANGE_HEADER';
export const SET_PREVIOUS_STATE = 'SET_PREVIOUS_STATE';

////// API //////
const gifts_URL = '/proxy/ladybug/newGifts';
const merchandises_URL = '/proxy/ladybug/giftList';
const achievements_URL = '/proxy/ladybug/achievements';
const sendGift_URL = '/proxy/ladybug/sendGift';
const likeGift_URL = '/proxy/ladybug/like';
const dislikeGift_URL = '/proxy/ladybug/dislike';
const notif_achievements_URL = '/proxy/ladybug/newAchievements';

////// SETTING REQUEST //////
let initGET = {
  method: 'GET',
  credentials: 'same-origin'
};

let initPOST = (payload) => {
  return {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  };
};

let initPUT = {
  method: 'PUT',
  credentials: 'same-origin'
};

////// ACTIONS /////
////////////////////
///////// friend action
function fetchFriends(){
  return dispatch => {
    FB.api(
      "/me/friends",
      function (response) {
        if (response && !response.error) {
          dispatch(loadFriends(response.data));
        }
      }
    );
  }
}

function loadFriends(friends){
  return {
    type: REQUEST_FRIENDS,
    friends
  };
}

function activeFriend(friendID) {
  return dispatch => {
    dispatch({
      type: UPDATE_ACTIVE_FRIEND,
      friend: friendID
    });
  }
}
////////// gift actions
function fetchGifts(existGifts){

  let fetchUrl = () => {
    if(existGifts.length == 0) {
      return gifts_URL;
    } else {
      let query = existGifts.map( ({gift, merchandise}) => gift.id ).join("&oldGiftIds=")
      return gifts_URL + `?oldGiftIds=${query}`;
    }
  };

  return (dispatch, getState) => {
    fetch(fetchUrl(), initGET)
      .then( response => {
        if(response.ok){
          return response.json()
        }
      })
      .then( gifts => {
        if(typeof gifts != 'undefined')
        {
          dispatch(loadGifts(gifts));
          dispatch(fetchGifts(gifts.gifts));
        } else {
          dispatch(fetchGifts(getState().gifts.gifts));
        }
      })
      .catch( err => {
        console.log(err);
      });
  };
}

function loadGifts(gifts){
  return {
    type: REQUEST_GIFTS,
    gifts
  };
}

function sendGift(gift){
  return dispatch => {
    fetch(sendGift_URL, initPOST(gift))
    .then( res => {
      console.log(res);
      if(res.ok){
        dispatch(removeMerchandise(gift.withMerchandise));
      }
    })
    .catch( err => {
      console.log(err);
    });
  };
}

function likeGift(giftID){
  return dispatch => {
    fetch(likeGift_URL + `/${giftID}`, initPUT)
    .then( res => {
      if(res.ok){
        dispatch(removeGift(giftID));
      }
    })
    .catch( err => {
      console.log(err);
    })
  };
}

function dislikeGift(giftID){
  return dispatch => {
    fetch(dislikeGift_URL + `/${giftID}`, initPUT)
    .then( res => {
      if(res.ok){
        dispatch(removeGift(giftID));
      }
    })
    .catch( err => {
      console.log(err);
    })
  }
}

function removeGift(id){
  return {
    type: REMOVE_GIFT,
    id
  }
}

////////// load merchandises to send to a friends
function fetchMerchandises(friendID, page){

  let url = merchandises_URL + `/${friendID}?page=${page}`;

  return dispatch => {
    fetch(url, initGET)
    .then( (response) => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Exception(response.status);
      }
    })
    .then( merchandises => {
      dispatch(loadMerchandises(merchandises));
    })
    .catch( (err) => {
      console.log(err);
    });
  }
}

function loadMerchandises(merchandises){
  return {
    type: REQUEST_MERCHANDISES,
    merchandises
  };
}

function setMerchandise(merchandise){
  return dispatch => {
    dispatch({
      type: SELECT_MERCHANDISE,
      merchandise
    });
  };
}

function removeMerchandise(id){
  return {
    type: REMOVE_MERCHANDISE,
    id
  };
}
////////// load achievements
function fetchAchievements(){
  return dispatch => {
    fetch(achievements_URL, initGET)
    .then( (response) => {
      if(response.ok) {
        dispatch(notifAchievements());
        return response.json();
      } else {
        throw new Exception(response.status);
      }
    })
    .then( achievements => {
      dispatch(loadAchievements(achievements));
    })
    .catch( err => {
      console.log(err);
    });
  }
}

function notifAchievements(){
  return dispatch => {
    fetch(notif_achievements_URL, initGET)
    .then( res => {
      console.log(res.status);
      if(res.status === 200) {
        return res.json();
      }

    } )
    .then( notifications => {
      // if( typeof notifications != 'undefined' ){
      //
      // }
      dispatch(notifAchievements());
    })
    .catch( err => {
      console.log(err);
    });
  }
}

function loadAchievements(achievements){
  return {
    type: REQUEST_ACHIEVEMENTS,
    achievements
  }
}

function fetchAchievement(friendID){
  return dispatch => {
    fetch(achievements_URL + `/${friendID}`, initGET)
    .then( res => res.json() )
    .then( achievement => {
      dispatch(loadAchievement(achievement));
    })
    .catch( err => console.log(err) )
  };
}

function loadAchievement(achievement){
  return {
    type: REQUEST_ACHIEVEMENT,
    achievement
  }
}
////// extionsion action ///////
function changeHeader(header){
  return dispatch => {
    dispatch({
      type: CHANGE_HEADER,
      header
    })
  }
}

function setPreviousState(previousState){
  return dispatch => {
    dispatch({
      type: SET_PREVIOUS_STATE,
      previousState
    })
  }
}

export {
  fetchFriends,
  fetchMerchandises,
  fetchGifts,
  fetchAchievements,
  fetchAchievement,
  sendGift,
  activeFriend,
  setMerchandise,
  likeGift,
  dislikeGift,
  changeHeader,
  setPreviousState
};

'use strict';

const confidant = {
  class: "fa-bed",
  text: "Tri kỷ"
};
const lover = {
  class: "fa-heart-o",
  text: "Để ý, quan tâm đặc biệt"
};
const closeFriend = {
  class: "fa-glass",
  text: "Hơi bị hiểu bạn"
};
const stranger = {
  class: "fa-frown-o",
  text: "Biết sơ sơ"
};
const hater = {
  class: "fa-ambulance",
  text: "Bạn bè kiểu gì mà kì"
};
const enemy = {
  class: "fa-wheelchair",
  text: "Tên này ghét bạn =)))"
};

let relationship = (percent) => {
  switch (percent) {
    case 0 <= percent && percent < 30:
      return enemy;
    case 30 <= percent && percent < 50:
      return hater;
    case 50 <= percent && percent < 70:
      return stranger;
    case 70 <= percent && percent < 85:
      return closeFriend;
    case 85 <= percent && percent < 95:
      return lover;
    default: return confidant;
  }
};


export default relationship;

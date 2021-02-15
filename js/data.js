import {getRandomIntInclusive, getRandomArbitrary, getRandomArrayElement, getRandomArray} from '../js/util.js';
import {TITLES, TYPES, TIMES_CHECKIN_CHECKOUT, FEATURES, DESCRIPTIONS, PHOTOS, ROOMS, GUESTS, MIN_PRICE, MAX_PRICE, MIN_POINT_X, MAX_POINT_X, MIN_POINT_Y, MAX_POINT_Y, FLOAT_COUNT, OBJECT_COUNT} from '../js/const.js';

const createObject = () => {
  const pointLocation = {
    x: getRandomArbitrary(MIN_POINT_X, MAX_POINT_X, FLOAT_COUNT),
    y: getRandomArbitrary(MIN_POINT_Y, MAX_POINT_Y, FLOAT_COUNT),
  }
  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${pointLocation.x}, ${pointLocation.y}`,
      price: getRandomIntInclusive(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntInclusive(ROOMS.MIN, ROOMS.MAX),
      guests: getRandomIntInclusive(GUESTS.MIN, GUESTS.MAX),
      checkin: getRandomArrayElement(TIMES_CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(TIMES_CHECKIN_CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: pointLocation.x,
      y: pointLocation.y,
    },
  };
};

const similarArrays = () => new Array(OBJECT_COUNT).fill(null).map(() => createObject());

export {createObject, similarArrays};

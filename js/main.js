'use strict';

const TITLES = [
  'Квартира целиком',
  'Дом, в котором бьётся пульс города',
  'Уютное бунгало',
  'Ослепительный дворец',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIMES_CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Невероятный дворец с аквадискотекой и маленьким кинотеатром',
  'Светлая и просторная квартира с видом на парк',
  'Небольшой домик в традиционном стиле, но с приятной гостиной',
  'Уютное бунгало в центре города с прекрасным садом',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const ROOMS = {
  MIN: 1,
  MAX: 10,
}

const GUESTS = {
  MIN: 1,
  MAX: 8,
}

const OBJECT_COUNT = 10;
const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;
const MIN_POINT_X = 35.65000;
const MAX_POINT_X = 35.70000;
const MIN_POINT_Y = 139.70000;
const MAX_POINT_Y = 139.80000;
const FLOAT_COUNT = 5;

//Взято с MDN. Получение случайного целого числа в заданном интервале.
const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 0;
}

//Получение случайного числа с плавающей точкой из переданного диапазона включительно.
const getRandomArbitrary = function (min, max, number) {
  if (min >= 0 && max >= 0 && max > min) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    const randomNumber = count.toFixed(number);
    return parseFloat(randomNumber);
  }
  return 0;
}

//Функция случайного элемента из массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

//Возвращает новый массив
const getRandomArray = function (array) {
  return array.slice(0, getRandomIntInclusive(1, array.length));
}

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

const similarArrays = new Array(OBJECT_COUNT).fill(null).map(() => createObject());
similarArrays; //чтобы линтер не ругался

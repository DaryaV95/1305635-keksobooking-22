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

const TYPE_PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;
const MIN_POINT_X = 35.65000;
const MAX_POINT_X = 35.70000;
const MIN_POINT_Y = 139.70000;
const MAX_POINT_Y = 139.80000;
const FLOAT_COUNT = 5;
const OBJECT_COUNT = 10;
const CENTER_TOKYO_LAT = 35.65858;
const CENTER_TOKYO_LNG = 139.74543;
const PIN_WIDTH = 52; //Из демки
const PIN_HEIGHT = 52;
const SCALE_MAP = 12;

export {TITLES, TYPES, TIMES_CHECKIN_CHECKOUT, FEATURES, DESCRIPTIONS, PHOTOS, ROOMS, GUESTS, MIN_PRICE, MAX_PRICE, MIN_POINT_X, MAX_POINT_X, MIN_POINT_Y, MAX_POINT_Y, FLOAT_COUNT, OBJECT_COUNT, CENTER_TOKYO_LAT, CENTER_TOKYO_LNG, PIN_WIDTH, PIN_HEIGHT, SCALE_MAP, TYPE_PRICE};

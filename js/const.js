const TypePrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const MAX_PRICE = 1000000;
const FLOAT_COUNT = 5;
const OBJECT_COUNT = 10;
const NUMBER_OF_ROOMS = 100;
const CENTER_TOKYO_LAT = 35.65858;
const CENTER_TOKYO_LNG = 139.74543;
const PIN_WIDTH = 52;
const PIN_HEIGHT = 52;
const SCALE_MAP = 12;
const ALERT_SHOW_TIME = 5000;
const MIN_FILTER_PRICE = 10000;
const MAX_FILTER_PRICE = 50000;
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const RERENDER_DELAY = 500;
const MAIN_PIN = '../img/main-pin.svg';
const ANOTHER_PIN = '../img/pin.svg';
const PINS = [];
const DEFAULT_VALUE = 'any';

const RECEIVING_SERVER = 'https://22.javascript.pages.academy/keksobooking/data';
const DISPATCH_SERVER = 'https://22.javascript.pages.academy/keksobooking';

export {
  MAX_PRICE,
  FLOAT_COUNT,
  NUMBER_OF_ROOMS,
  OBJECT_COUNT,
  CENTER_TOKYO_LAT,
  CENTER_TOKYO_LNG,
  PIN_WIDTH,
  PIN_HEIGHT,
  SCALE_MAP,
  TypePrice,
  ALERT_SHOW_TIME,
  RECEIVING_SERVER,
  DISPATCH_SERVER,
  MAIN_PIN, ANOTHER_PIN,
  PINS, MIN_FILTER_PRICE,
  MAX_FILTER_PRICE,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  RERENDER_DELAY,
  DEFAULT_VALUE
};

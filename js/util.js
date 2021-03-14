//Взято с MDN. Получение случайного целого числа в заданном интервале.
import {ALERT_SHOW_TIME} from './const.js';

const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 0;
}

const getRandomArbitrary = (min, max, number) => {
  if (min < 0 || max < 0) {
    return 0;
  }

  if (max < min) {
    [min, max] = [max, min];
  }
  const count = (Math.random() * (max - min) + min);
  return count.toFixed(number);
}

//Функция случайного элемента из массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

//Возвращает новый массив
const getRandomArray = function (array) {
  return array.slice(0, getRandomIntInclusive(1, array.length));
}

const getType = function (type) {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      ' ';
  }
};

//при сбое получения данных с сервера
const showAlert = () => {
  const alertDiv = document.createElement('div');
  alertDiv.style.cssText =
    'z-index: 400; position: absolute; left: 0; \
    top: 300px; right: 0; padding: 10px 3px; font-size: 30px; \
    text-align: center; background-color: #ffaa99;';

  alertDiv.textContent = ('Не удалось получить данные с сервера!');

  document.body.append(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Esc' || evt.key === 'Escape';
};

export {
  getRandomIntInclusive,
  getRandomArbitrary,
  getRandomArrayElement,
  getRandomArray,
  getType,
  showAlert,
  isEscEvent
};

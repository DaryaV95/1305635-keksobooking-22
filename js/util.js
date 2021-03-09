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

const showAlert = () => {
  const alertDiv = document.createElement('div');
  alertDiv.style.zIndex = 1000;
  alertDiv.style.position = 'absolute';
  alertDiv.style.left = 0;
  alertDiv.style.top = '300px';
  alertDiv.style.right = 0;
  alertDiv.style.padding = '10px 3px';
  alertDiv.style.fontSize = '30px';
  alertDiv.style.textAlign = 'center';
  alertDiv.style.backgroundColor = '#ffaa99';

  alertDiv.textContent = ('Не удалось получить данные с сервера!');

  document.body.append(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, ALERT_SHOW_TIME);
}

export {getRandomIntInclusive, getRandomArbitrary, getRandomArrayElement, getRandomArray, getType, showAlert};

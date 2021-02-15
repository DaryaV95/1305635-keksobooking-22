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

export {getRandomIntInclusive, getRandomArbitrary, getRandomArrayElement, getRandomArray, getType};

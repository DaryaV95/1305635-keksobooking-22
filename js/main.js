'use strict';
//Взято с MDN. Получение случайного целого числа в заданном интервале.
const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 0;
}
getRandomIntInclusive(1, 56);

//Получение случайного числа с плавающей точкой из переданного диапазона включительно.
const getRandomArbitrary = function (min, max, number) {
  if (min >= 0 && max >= 0 && max > min) {
    const count = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    let randomNumber = count.toFixed(number);
    return parseFloat(randomNumber);
  }
  return 0;
}
getRandomArbitrary(1.6575, 35.7586, 2);

import {MAX_PRICE, TYPE_PRICE} from './const.js';

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const typeOfHousing = document.querySelector('#type');
const priceOfHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

//проверка поля объявления
const userAdForm = document.querySelector('#title');

userAdForm.addEventListener('change', () => {
  const valueLength = userAdForm.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userAdForm.setCustomValidity('Объявление должно состоять минимум из ' + MIN_NAME_LENGTH + ' символов');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userAdForm.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userAdForm.setCustomValidity('');
  }
  userAdForm.reportValidity();
});

//проверка поля цены
typeOfHousing.addEventListener('change', () => {
  const typeValue = typeOfHousing.value;

  priceOfHousing.placeholder = TYPE_PRICE[typeValue];
  priceOfHousing.min = TYPE_PRICE[typeValue];
});

priceOfHousing.addEventListener('change', () => {
  const priceValue = priceOfHousing.value;

  if (priceValue > MAX_PRICE) {
    priceOfHousing.setCustomValidity('Максимальная цена за ночь ' + MAX_PRICE);
  } else {
    priceOfHousing.setCustomValidity('');
  }
  priceOfHousing.reportValidity();
});

//проверка полей комнат и гостей
const rooms = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const checkGuest = () => {
  const roomsValue = Number(rooms.value);
  const guestsValue = Number(capacity.value);

  if (roomsValue !== 100 && guestsValue === 0) {
    capacity.setCustomValidity('Для этого варианта мало гостей');
  } else if (roomsValue < guestsValue) {
    capacity.setCustomValidity('Для этого варианта слишком много гостей')
  } else if (roomsValue === 100 && guestsValue !== 0) {
    capacity.setCustomValidity('Вариант не подходит для гостей')
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
}

capacity.addEventListener('change', () => {
  checkGuest();
})

rooms.addEventListener('change', () => {
  checkGuest();
})

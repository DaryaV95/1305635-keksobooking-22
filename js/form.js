import {MAX_PRICE, TYPE_PRICE, MIN_NAME_LENGTH, MAX_NAME_LENGTH} from './const.js';
import {typeOfHousing, priceOfHousing, timeIn, timeOut, userAdForm, rooms, capacity} from './elements.js';

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

//проверка поля объявления
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

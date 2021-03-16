import {NUMBER_OF_ROOMS, MAX_PRICE, TypePrice, MIN_NAME_LENGTH, MAX_NAME_LENGTH} from './const.js';
import {typeOfHousing, priceOfHousing, timeIn, timeOut, userAdForm, rooms, capacity} from './elements.js';

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

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

typeOfHousing.addEventListener('change', () => {
  const typeValue = typeOfHousing.value;

  priceOfHousing.placeholder = TypePrice[typeValue];
  priceOfHousing.min = TypePrice[typeValue];
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

const checkGuest = () => {
  const roomsValue = Number(rooms.value);
  const guestsValue = Number(capacity.value);

  if (roomsValue !== NUMBER_OF_ROOMS && guestsValue === 0) {
    capacity.setCustomValidity('Для этого варианта мало гостей');
  } else if (roomsValue < guestsValue) {
    capacity.setCustomValidity('Для этого варианта слишком много гостей')
  } else if (roomsValue === NUMBER_OF_ROOMS && guestsValue !== 0) {
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

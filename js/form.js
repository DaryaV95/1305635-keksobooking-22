const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const typeOfHousing = document.querySelector('#type');
const priceOfHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

typeOfHousing.addEventListener('change', () => {
  let placeholder;

  switch (typeOfHousing.value) {
    case 'bungalow':
      placeholder = '0';
      break
    case 'flat':
      placeholder = '1000';
      break
    case 'house':
      placeholder = '5000';
      break
    case 'palace':
      placeholder = '10000';
      break
  }
  priceOfHousing.placeholder = placeholder;
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

//проверка поля объявления
const userAdForm = document.querySelector('#title');

userAdForm.addEventListener('input', () => {
  const valueLength = userAdForm.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userAdForm.classList.add('ad-form__error');
    userAdForm.setCustomValidity('Объявление должно состоять минимум из 30-ти символов');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userAdForm.classList.add('ad-form__error');
    userAdForm.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userAdForm.classList.remove('ad-form__error');
    userAdForm.setCustomValidity('');
  }
  userAdForm.reportValidity();
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

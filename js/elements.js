const mapCanvas = document.querySelector('#map-canvas');
const adFormAddress = document.querySelector('#address');
const adForm = document.querySelector('.ad-form');
const adFieldsetForm = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFieldset = mapFilters.querySelector('fieldset');
const mapSelect = mapFilters.querySelectorAll('select');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');
const typeOfHousing = document.querySelector('#type');
const priceOfHousing = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const userAdForm = document.querySelector('#title');
const rooms = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const adFormReset = adForm.querySelector('.ad-form__reset');
const main = document.querySelector('main');
const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');

export {
  mapCanvas,
  adFormAddress,
  adForm,
  adFieldsetForm,
  mapFilters,
  mapFieldset,
  mapSelect,
  housingType,
  housingPrice,
  housingRooms,
  housingGuests,
  housingFeatures,
  typeOfHousing,
  priceOfHousing,
  timeIn,
  timeOut,
  userAdForm,
  rooms,
  capacity,
  cardTemplate,
  adFormReset,
  main,
  success,
  error
};

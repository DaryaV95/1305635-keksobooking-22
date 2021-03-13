import {mapFilters} from './disable-form.js';
import {removePins} from './create-map.js';
import {MIN_FILTER_PRICE, MAX_FILTER_PRICE} from './const.js';

const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');

// Проверяем значения
const checkedType = (data) => (housingType.value === 'any' || data.offer.type === housingType.value);

const checkedPrice = (data) => {
  switch (housingPrice.value) {
    case 'low':
      return data.offer.price < MIN_FILTER_PRICE;
    case 'middle':
      return data.offer.price >= MIN_FILTER_PRICE && data.offer.price <= MAX_FILTER_PRICE;
    case 'high':
      return data.offer.price > MAX_FILTER_PRICE;
    case 'any':
      return true;
  }
};

const checkedRoom = (data) => (housingRooms.value === 'any' || Number(housingRooms.value) === data.offer.rooms);

const checkedGuest = (data) => (housingGuests.value === 'any' || Number(housingGuests.value) === data.offer.guests);

const checkedFilters = (data) => {
  let value = true;
  housingFeatures.querySelectorAll('input:checked').forEach((feature) => {
    if (data.indexOf(feature.value) === -1) {
      value = false;
    }
  });
  return value;
}

//вернет фильтрованные данные
const getFilterData = (data) => {
  return (
    checkedType(data) &&
    checkedPrice(data) &&
    checkedRoom(data) &&
    checkedGuest(data) &&
    checkedFilters(data.offer.features)
  )
}

const changeFilter = (cb) => {
  mapFilters.addEventListener('change', () => {
    removePins();
    cb();
  });
};

export {changeFilter, getFilterData}

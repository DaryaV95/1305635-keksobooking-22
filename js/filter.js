import {removePins} from './create-map.js';
import {MIN_FILTER_PRICE, MAX_FILTER_PRICE} from './const.js';
import {mapFilters, housingType, housingPrice, housingRooms, housingGuests, housingFeatures} from './elements.js';

// Проверяем значения
const checkedType = (data) => (housingType.value === 'any' || housingType.value === data.offer.type);

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
    if (data.offer.features.indexOf(feature.value) === -1) {
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
    checkedFilters(data)
  )
}

const changeFilter = (cb) => {
  mapFilters.addEventListener('change', () => {
    removePins();
    cb();
  });
};

export {changeFilter, getFilterData}

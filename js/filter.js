import {removePins} from './create-map.js';
import {MIN_FILTER_PRICE, MAX_FILTER_PRICE, DEFAULT_VALUE} from './const.js';
import {mapFilters, housingType, housingPrice, housingRooms, housingGuests, housingFeatures} from './elements.js';

const checkedFilterType = (data) => (housingType.value === DEFAULT_VALUE || housingType.value === data.offer.type);

const checkedFilterPrice = (data) => {
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

const checkedFilterRoom = (data) => (housingRooms.value === DEFAULT_VALUE || Number(housingRooms.value) === data.offer.rooms);

const checkedFilterGuest = (data) => (housingGuests.value === DEFAULT_VALUE || Number(housingGuests.value) === data.offer.guests);

const checkedFilterFeatures = (data) => {
  let value = true;
  housingFeatures.querySelectorAll('input:checked').forEach((feature) => {
    if (data.offer.features.indexOf(feature.value) === -1) {
      value = false;
    }
  });
  return value;
}

const getFilterData = (data) => {
  return (
    checkedFilterType(data) &&
    checkedFilterPrice(data) &&
    checkedFilterRoom(data) &&
    checkedFilterGuest(data) &&
    checkedFilterFeatures(data)
  )
}

const changeFilter = (cb) => {
  mapFilters.addEventListener('change', () => {
    removePins();
    cb();
  });
};

export {changeFilter, getFilterData}

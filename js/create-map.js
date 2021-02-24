/* global L:readonly */

import {similarArrays} from './data.js';
import {FLOAT_COUNT, CENTER_TOKYO_LAT, CENTER_TOKYO_LNG, PIN_WIDTH, PIN_HEIGHT, SCALE_MAP} from './const.js';
import {createCard} from './similar-card.js';

const mapCanvas = document.querySelector('#map-canvas');
const adFormAddress = document.querySelector('#address');
const adForm = document.querySelector('.ad-form');
const adFieldsetForm = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFieldset = mapFilters.querySelector('fieldset');
const mapSelect = mapFilters.querySelectorAll('select');

const disableForm = function () {
  adForm.classList.add('ad-form--disabled');
  adFieldsetForm.forEach((value) => {
    value.setAttribute('disabled', 'disabled');
  });
  mapFilters.classList.add('ad-form--disabled');
  mapFieldset.setAttribute('disabled', 'disabled');
  mapSelect.forEach((value) => {
    value.setAttribute('disabled', 'disabled');
  });

};

disableForm();

const activateForm = function () {
  adForm.classList.remove('ad-form--disabled');
  adFieldsetForm.forEach((value) => {
    value.removeAttribute('disabled', 'disabled');
  });

  mapFilters.classList.remove('ad-form--disabled');
  mapFieldset.removeAttribute('disabled', 'disabled');
  mapSelect.forEach((value) => {
    value.removeAttribute('disabled', 'disabled');
  });
};

//Создаем карту
const map = L.map(mapCanvas)
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: CENTER_TOKYO_LAT,
    lng: CENTER_TOKYO_LNG,
  }, SCALE_MAP); //Масштаб карты

//OpenStreetMap добавляем как слой на нашу созданную карту.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

//Добавляем главную метку
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [PIN_WIDTH, PIN_HEIGHT],
  iconAnchor: [PIN_WIDTH / 2, PIN_HEIGHT],
});

const mainMarker = L.marker(
  {
    lat: CENTER_TOKYO_LAT,
    lng: CENTER_TOKYO_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

adFormAddress.value = '35.65858, 139.74543';

mainMarker.on('move', (evt) => {
  adFormAddress.value = `${evt.target.getLatLng().lat.toFixed(FLOAT_COUNT)}, ${evt.target.getLatLng().lng.toFixed(FLOAT_COUNT)}`;
});

//Вот здесь, похоже, проблема
similarArrays().forEach((ad) => {
  const lat = ad.location.x;
  const lng = ad.location.y;

  const pinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [PIN_WIDTH, PIN_HEIGHT],
    iconAnchor: [PIN_WIDTH / 2, PIN_HEIGHT],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: pinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      createCard(ad),
      {
        keepInView: true,
      },
    );
});

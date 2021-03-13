/* global L:readonly */

import {FLOAT_COUNT, OBJECT_COUNT, CENTER_TOKYO_LAT, CENTER_TOKYO_LNG, PIN_WIDTH, PIN_HEIGHT, SCALE_MAP, MAIN_PIN, ANOTHER_PIN, PINS} from './const.js';
import {createCard} from './similar-card.js';
import {activateForm} from './activate-form.js';
import {getFilterData} from './filter.js';

const mapCanvas = document.querySelector('#map-canvas');
const adFormAddress = document.querySelector('#address');

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
  iconUrl: MAIN_PIN,
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

const createOffers = (offers) => {
  offers
    .slice() //из демки
    .filter(getFilterData)
    .slice(0, OBJECT_COUNT)//выводит не более 10 меток на карте
    .forEach((ad) => {
      const lat = ad.location.lat;
      const lng = ad.location.lng;

      const pinIcon = L.icon({
        iconUrl: ANOTHER_PIN,
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
      PINS.push(marker);
    });
  return PINS
};

const removePins = () => {
  PINS.forEach((marker) => {
    marker.remove();
  })
  map.closePopup();
};

export {createOffers, mainMarker, removePins};

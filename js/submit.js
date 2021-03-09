import {sendData} from './api.js';
import {mainMarker} from './create-map.js';
import {adForm, mapFilters} from './disable-form.js';
import {CENTER_TOKYO_LAT, CENTER_TOKYO_LNG} from './const.js';

const adFormReset = adForm.querySelector('.ad-form__reset');
const main = document.querySelector('main');
const success = document.querySelector('#success').content.querySelector('div');

const isEscEvent = (evt) => {
  return evt.key === 'Esc' || evt.key === 'Escape';
};

const successMessage = () => {
  const element = success.cloneNode(true);
  main.append(element);

  document.addEventListener('keydown', () => {
    if (isEscEvent) {
      element.remove();
    }
  });

  document.addEventListener('click', () => {
    element.remove();
  });
}

const resetFunction = () => {
  adForm.reset();
  mainMarker.setLatLng([CENTER_TOKYO_LAT, CENTER_TOKYO_LNG]);
  mapFilters.reset();
};

adFormReset.addEventListener('click', () => {
  resetFunction();
});

const error = document.querySelector('#error').content.querySelector('div');

const errorMessage = () => {
  const element = error.cloneNode(true);
  main.append(element);

  const errorButton = element.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    element.remove();
  });

  document.addEventListener('keydown', () => {
    if (isEscEvent) {
      element.remove();
    }
  });

  document.addEventListener('click', () => {
    element.remove();
  });
}

const setFormSubmit = (onSuccess, onFail) => {

  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  });
};

setFormSubmit(successMessage, errorMessage);

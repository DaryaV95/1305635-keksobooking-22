import {sendData} from './api.js';
import {mainMarker} from './create-map.js';
import {adForm, mapFilters, adFormReset, main, success, error} from './elements.js';
import {CENTER_TOKYO_LAT, CENTER_TOKYO_LNG} from './const.js';
import {isEscEvent} from './util.js';

//модальное окно при успешной отправке формы
const successMessage = () => {
  const element = success.cloneNode(true);
  element.style.zIndex = 400; //при появлении должен перекрыть карту
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

//возвращает маркер на место
const resetFunction = () => {
  adForm.reset();
  mainMarker.setLatLng([CENTER_TOKYO_LAT, CENTER_TOKYO_LNG]);
  mapFilters.reset();
};

adFormReset.addEventListener('click', () => {
  resetFunction();
});

//модальное окно при ошибке размещения
const errorMessage = () => {
  const element = error.cloneNode(true);
  element.style.zIndex = 400; //при появлении должен перекрыть карту
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
      onSuccess,
      onFail,
      new FormData(evt.target),
    );
  });
};

setFormSubmit(successMessage, errorMessage);

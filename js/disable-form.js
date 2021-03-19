import {adForm, adFieldsetForm, mapFilters, mapFieldset, mapSelect} from './elements.js';

const disableForm = () => {
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

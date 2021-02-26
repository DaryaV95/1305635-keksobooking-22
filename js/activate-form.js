import {adForm, adFieldsetForm, mapFilters, mapFieldset, mapSelect} from './disable-form.js';

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

export {activateForm};

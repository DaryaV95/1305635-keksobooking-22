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

export {adForm, adFieldsetForm, mapFilters, mapFieldset, mapSelect};

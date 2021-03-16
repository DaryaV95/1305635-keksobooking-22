/* global _:readonly */
import './similar-card.js';
import './form.js';
import './create-map.js';
import {getData} from './api.js';
import {createOffers} from './create-map.js';
import './submit.js';
import {changeFilter} from './filter.js';
import {RERENDER_DELAY} from './const.js';

getData((offers) => {
  createOffers(offers);
  changeFilter(_.debounce(
    () => createOffers(offers),
    RERENDER_DELAY,
  ));
});

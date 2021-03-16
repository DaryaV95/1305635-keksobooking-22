import {getType} from './util.js';
import {cardTemplate} from './elements.js';

const createCard = (({author, offer}) => {
  const cardCloneElement = cardTemplate.cloneNode(true);
  cardCloneElement.querySelector('.popup__title').textContent = offer.title;
  cardCloneElement.querySelector('.popup__text--address').textContent = offer.address;
  cardCloneElement.querySelector('.popup__text--price').textContent = offer.price + '₽/ночь';
  cardCloneElement.querySelector('.popup__type').textContent = getType(offer.type);

  let roomsForText = ' комната для '
  let guest = ' гостя'

  if (offer.rooms > 4) {
    roomsForText = ' комнат для ';
  } else if (offer.rooms > 1) {
    roomsForText = ' комнаты для ';
  } else {
    roomsForText = ' комната для ';
  }

  guest = (offer.guests > 1 || offer.guests === 0) ?' гостей' : ' гостя';

  cardCloneElement.querySelector('.popup__text--capacity').textContent = offer.rooms + roomsForText + offer.guests + guest;
  cardCloneElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ' выезд до ' + offer.checkout;

  const featureList = cardCloneElement.querySelector('.popup__features');
  featureList.innerHTML = '';

  for (let i = 0; i < offer.features.length; i++) {
    const featureCreateElement = document.createElement('li');
    const featureName = offer.features[i];
    const featureClassName = 'popup__feature--' + featureName;
    featureCreateElement.classList.add('popup__feature', featureClassName);
    featureList.appendChild(featureCreateElement);
  }

  cardCloneElement.querySelector('.popup__description').textContent = offer.description;

  const photoList = cardCloneElement.querySelector('.popup__photos');
  const offerPhotoItem = cardCloneElement.querySelector('.popup__photo');
  photoList.innerHTML = '';

  for (let i = 0; i < offer.photos.length; i++) {
    let newPhoto = offerPhotoItem.cloneNode(true);
    newPhoto.src = offer.photos[i];
    photoList.appendChild(newPhoto);
  }

  cardCloneElement.querySelector('.popup__avatar').src = author.avatar;

  return cardCloneElement;
});

export {createCard};

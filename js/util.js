import {ALERT_SHOW_TIME} from './const.js';

const getType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      ' ';
  }
};

const showAlert = () => {
  const alertDiv = document.createElement('div');
  alertDiv.style.cssText =
    'z-index: 400; position: absolute; left: 0; \
    top: 300px; right: 0; padding: 10px 3px; font-size: 30px; \
    text-align: center; background-color: #ffaa99;';

  alertDiv.textContent = ('Не удалось получить данные с сервера!');

  document.body.append(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Esc' || evt.key === 'Escape';
};

export {
  getType,
  showAlert,
  isEscEvent
};

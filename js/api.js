import {RECEIVING_SERVER, DISPATCH_SERVER} from './const.js';
import {showAlert} from './util.js';

//Получение данных с сервера
const getData = (onSuccess) => {
  fetch(RECEIVING_SERVER)
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(showAlert);
};

//отправка формы на сервер
const sendData = (onSuccess, onFail, body) => {

  fetch(DISPATCH_SERVER,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    })
};

export {getData, sendData};

import Popup from '../components/Popup.js';

export default class PopupConfirm extends Popup {
  constructor(popup){  //принимает селектор попапа
  super(popup);
  this._form = this._popup.querySelector('.popup__form_confirm-removal');
}


setSubmitAction(submitAction) {
  this._handleSubmitCallback = submitAction;
}


setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._handleSubmitCallback();
  });
}}

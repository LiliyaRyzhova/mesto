import Popup from '../components/Popup.js';

export default class PopupConfirm extends Popup {
  constructor(popupSelector){  //принимает селектор попапа
  super(popupSelector);
  this._form = this._popupSelector.querySelector('.popup__form_confirm-removal');
}


setSubmitAction(submitAction) {
  this._handleSubmitCallback = submitAction;
}


setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._handleSubmitCallback();
    this.close()
  });
}}

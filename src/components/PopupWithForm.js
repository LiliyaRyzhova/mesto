import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit){  //принимает селектор попапа и кол-бэк формы - что должно происходить после нажатия кнопки submit
  super(popupSelector);
  this._handleFormSubmit = handleFormSubmit;

  this._form = this._popupSelector.querySelector('.popup__form')

}
_getInputValues() {
  this._inputList = this._popupSelector.querySelectorAll('.popup__field'); //собираем поля формы
  this._formValues = {};
  this._inputList.forEach(input => this._formValues[input.name] = input.value); //записываем в this._formValues name поля формы = значение поля формы

    return this._formValues;
}
setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (evt) => {
    evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
  });
}
close() {
  super.close();
  this._form.reset;
}
}

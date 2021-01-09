
export default class FormValidator {
  constructor(obj, form) {
    this._obj = obj;
    this._form = form;
  }
  _showInputError(input, errorMessage) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = errorMessage;
    error.classList.add(this._inputInvalidClass);
  }
  _hideInputError(form, input){
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(this._inputInvalidClass);
  }
  _checkInputValidity(form, input){
    if(!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(form, input);
    }
  }

  _toggleButtonState(saveButton, isActive){
    if(isActive) {
      saveButton.classList.remove(this._obj.buttonInvalidClass);
      saveButton.disabled = false;
    } else {
      saveButton.classList.add(this._obj.buttonInvalidClass);
      saveButton.disabled = true;
    }
  }


  _setEventListeners(form){
    const inputsList = Array.from(form.querySelectorAll(this._obj.inputSelector));
    const saveButton = form.querySelector(this._obj.saveButtonSelector);
    inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(form, input);
        this._toggleButtonState(saveButton, this._form.checkValidity());
      });
    });
  };


  enableValidation(){
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    this._setEventListeners(this._form);
  }
}

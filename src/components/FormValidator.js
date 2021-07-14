
export default class FormValidator {
  constructor(obj, form) {
    this._obj = obj;
    this._form = form;
    this._saveButton = form.querySelector(this._obj.saveButtonSelector);
    this._inputsList = Array.from(this._form.querySelectorAll(this._obj.inputSelector));
    // this._inputsList = inputsList;
  }
  _showInputError(input, errorMessage) {
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = errorMessage;
    error.classList.add(this._inputInvalidClass);
  }
  _hideInputError(input){
    const error = this._form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(this._inputInvalidClass);
  }
  _checkInputValidity(input){
    if(!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _toggleButtonState(isActive){
    if(isActive) {
      this._saveButton.classList.remove(this._obj.buttonInvalidClass);
      this._saveButton.disabled = false;
    } else {
      this._saveButton.classList.add(this._obj.buttonInvalidClass);
      this._saveButton.disabled = true;
    }
  }


  _setEventListeners(){
    // const inputsList = Array.from(this._form.querySelectorAll(this._obj.inputSelector));
    // const saveButton = form.querySelector(this._obj.saveButtonSelector);
    this._inputsList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(this._form.checkValidity());
      });
    });
  };

  resetValidation() {
    this._toggleButtonState();

    this._inputsList.forEach((input) => {
      this._hideInputError(input)
    });

  }

  enableValidation(){
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

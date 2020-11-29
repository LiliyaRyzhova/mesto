

const showInputError = (form, input, errorMessage, config) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add(config.inputInvalidClass);
  errorElement.textContent = errorMessage;
}

const hideInputError = (form, input, config) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(config.inputInvalidClass);
    errorElement.textContent = '';
};

const checkInputValidity = (form, input, config) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config);
  } else {
    hideInputError(form, input, config);
  }
};


const toggleButtonState = (saveButton, isActive, config) => {
  if (isActive) {
    saveButton.classList.remove(config.buttonInvalidClass);
    saveButton.disabled = false;
  } else {
    saveButton.classList.add(config.buttonInvalidClass);
    saveButton.disabled = false;
  }
};



const setEventListeners = (form, config) => {
  const inputsList = Array.from(form.querySelectorAll(config.inputSelector));
  const saveButton = document.querySelector(config.saveButtonSelector);
  inputsList.forEach((input) => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input, config);
      toggleButtonState(saveButton, form.checkValidity(), config);
    });
  });
};

function enableValidation (config) {
  const formsList = Array.from(document.querySelectorAll(config.formSelector));
  formsList.forEach((form) => {
    setEventListeners(form, config);
    form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
  const saveButton = form.querySelector(config.saveButtonSelector);
  toggleButtonState(saveButton, form.checkValidity(), config)
});
}

const validationConfig = {
  formSelector: '.popup__form-fields',
  inputSelector: '.popup__field',
  saveButtonSelector: '.popup__save-button',
  inputInvalidClass: 'popup__field_invalid',
  buttonInvalidClass: 'popup__save-button_inactive',
  }

enableValidation (validationConfig);

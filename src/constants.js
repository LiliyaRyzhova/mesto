const editForm = document.querySelector('.popup__form_edit-profile');
const addForm = document.querySelector('.popup__form_add-card');
const showImagePopup = document.querySelector('.popup_open-image');
const editButton = document.querySelector('.profile__edit-button');
const popupCloseButtonEditPopup = document.querySelector('.popup__close-button_edit-popup');
const popupCloseButtonAddPopup = document.querySelector('.popup__close-button_add-popup');
const popupCloseButtonShowImagePopup = document.querySelector('.popup__close-button_open-image');
const nameProfile = document.querySelector('.profile__user-name');
const professionProfile = document.querySelector('.profile__profession');
const nameEditField = document.querySelector('.popup__field_name');
const professionEditField = document.querySelector('.popup__field_profession');
const cardsContainer = document.querySelector('.cards');
const addCardButton = document.querySelector('.profile__add-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const placeField = document.querySelector('.popup__field_place-name');
const linkField = document.querySelector('.popup__field_link');
const popupShowImageCaption = document.querySelector('.popup__image-caption');
const cardImage = document.querySelector('.popup__image');
const escKey = 'Escape';
const formSaveButton = document.querySelector('.popup__save-button');
const formSaveButtonInactive = document.querySelector('.popup__save-button_inactive')

const validationObj = {
  formSelector: '.popup__form-fields',
  inputSelector: '.popup__field',
  saveButtonSelector: '.popup__save-button',
  inputInvalidClass: 'popup__field_invalid',
  buttonInvalidClass: 'popup__save-button_inactive',
  }

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {editForm, addForm, editButton, popupCloseButtonEditPopup, popupCloseButtonAddPopup,
        popupCloseButtonShowImagePopup, nameProfile, professionProfile, nameEditField, professionEditField,
        cardsContainer, addCardButton, popupEditProfile, popupAddCard, placeField, linkField, cardImage, showImagePopup, popupShowImageCaption, initialCards, validationObj, escKey, formSaveButton, formSaveButtonInactive};



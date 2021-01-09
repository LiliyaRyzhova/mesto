import Card from '../scripts/Card.js';
import {showPopup, closePopup, fillProfilePopup, submitPopupEditProfile} from '../scripts/utils.js';
import {editButton, addCardButton, popupCloseButtonEditPopup,popupShowImageCaption,  popupCloseButtonAddPopup, popupCloseButtonShowImagePopup, editForm, addForm, popupEditProfile, popupAddCard, showImagePopup, cardsContainer, initialCards, validationObj, cardImage, linkField, placeField } from '../scripts/data.js';
import FormValidator from '../scripts/FormValidator.js';

// const editForm = document.querySelector('.popup__form_edit-profile');
// const addForm = document.querySelector('.popup__form_add-card');
// // const showImagePopup = document.querySelector('.popup_open-image');
// const editButton = document.querySelector('.profile__edit-button');
// const popupCloseButtonEditPopup = document.querySelector('.popup__close-button_edit-popup');
// const popupCloseButtonAddPopup = document.querySelector('.popup__close-button_add-popup');
// const popupCloseButtonShowImagePopup = document.querySelector('.popup__close-button_open-image');
// const nameProfile = document.querySelector('.profile__user-name');
// const professionProfile = document.querySelector('.profile__profession');
// const nameEditField = document.querySelector('.popup__field_name');
// const professionEditField = document.querySelector('.popup__field_profession');
// const cardsContainer = document.querySelector('.cards');
// const addCardButton = document.querySelector('.profile__add-button');
// const popupEditProfile = document.querySelector('.popup_edit-profile');
// const popupAddCard = document.querySelector('.popup_add-card');
// const placeField = document.querySelector('.popup__field_place-name');
// const linkField = document.querySelector('.popup__field_link');
// // const popupShowImageCaption = document.querySelector('.popup__image-caption');
// const cardImage = document.querySelector('.popup__image');


// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

// function showPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupEsc);
//   document.addEventListener('mousedown', closePopupOverlay);

// }

// //закрытие попап по нажатию ESC//

// function closePopupEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// //закрытие попап по щелчку вне попапа//

// function closePopupOverlay(evt) {
//   if (popupAddCard.contains(evt.target) && !addForm.contains(evt.target)) {
//     popupAddCard.classList.remove('popup_opened');
//   }
//   if (popupEditProfile.contains(evt.target) && !editForm.contains(evt.target)) {
//     popupEditProfile.classList.remove('popup_opened');
//   }
//   if (showImagePopup.contains(evt.target) && !cardImage.contains(evt.target)) {
//     showImagePopup.classList.remove('popup_opened');
//   }
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupEsc);
//   document.removeEventListener('mousedown', closePopupOverlay);
// }

// // редактирование профиля//

// function fillProfilePopup() {
//   nameEditField.value = nameProfile.textContent;
//   professionEditField.value = professionProfile.textContent;
//   showPopup(popupEditProfile);

// }

// function submitPopupEditProfile(event) {
//   event.preventDefault();
//   nameProfile.textContent = nameEditField.value;
//   professionProfile.textContent = professionEditField.value;
//   closePopup(popupEditProfile);
// }

// создание, редактирование карточек//

// function createCard(data) {
//   const cardTemplate = document.querySelector('#card-template').content;
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImage = cardElement.querySelector('.card__image');
//   const cardCaption = cardElement.querySelector('.card__place-name');
//   const removeButton = cardElement.querySelector('.card__remove-button');
//   cardImage.src = data.link;
//   cardImage.alt = data.name;
//   cardCaption.textContent = data.name;
//   cardImage.src = data.link;
//   cardCaption.textContent = data.name;
//   cardElement.querySelector('.card__like-button').addEventListener('click', function (event) {
//     event.target.classList.toggle('card__like-button_active')});
//   removeButton.addEventListener('click', function () {
//     const cardItem = removeButton.closest('.card');
//     cardItem.remove();
//   })
//   cardImage.addEventListener('click', () => showImage(data.link, data.name));
//   return cardElement;
// }

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template', openImagePopup);
  const cardElement = card.createCard();

  cardsContainer.append(cardElement);
});

function openImagePopup(name, link) {
  cardImage.src = link;
  cardImage.alt = name;
  popupShowImageCaption.textContent = name;
  showPopup(showImagePopup);
}

// function addInitialCards (data) {
//   const cardElement = createCard(data);
//   cardsContainer.append(cardElement);
// }

// initialCards.forEach(addInitialCards);

// function addCard(event) {
//   event.preventDefault();
  // const data = {
  //   link: linkField.value,
  //   name: placeField.value
  // };
//   const cardElement = createCard(data);
//   cardsContainer.prepend(cardElement);
//   addForm.reset();
//   closePopup(popupAddCard);
// }

// function showImage (src, alt) {
  // cardImage.src = src;
  // cardImage.alt = alt;
  // popupShowImageCaption.textContent = alt;
//   showPopup(showImagePopup);
// }



editButton.addEventListener('click', () => fillProfilePopup(popupEditProfile));
addCardButton.addEventListener('click', () => showPopup(popupAddCard));
popupCloseButtonEditPopup.addEventListener('click', () => closePopup(popupEditProfile));
popupCloseButtonAddPopup.addEventListener('click', () => closePopup(popupAddCard));
popupCloseButtonShowImagePopup.addEventListener('click', () => closePopup(showImagePopup));
editForm.addEventListener('submit', submitPopupEditProfile);
addForm.addEventListener('submit', (item) => {
  const data = {
    link: linkField.value,
    name: placeField.value
  };
  const card = new Card(data, '.card-template', openImagePopup);
  const cardElement = card.createCard();

  cardsContainer.prepend(cardElement);
  addForm.reset();
  closePopup(popupAddCard)
} );

const editFormValidator = new FormValidator(validationObj, editForm, openImagePopup);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationObj, addForm, openImagePopup);
addFormValidator.enableValidation();

import '../src/pages/index.css';
import Card from './components/Card.js';
// import {submitPopupEditProfile} from '../scripts/utils.js';
import {editButton, addCardButton,editForm, addForm, popupEditProfile,
        popupAddCard, showImagePopup, cardsContainer, initialCards,
        validationObj, linkField, placeField, nameProfile, professionProfile,
        nameEditField, professionEditField} from './constants.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
// import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js'
import PopupWithForm from './components/PopupWithForm.js'
import UserInfo from './components/UserInfo.js';

//функция создания карточки из класса Card

function createCard(item) {
  const card = new Card(item, '.card-template', () => popupTypeOpenImage.open(item.link, item.name));
  const cardElement = card.createCard(item);
  return cardElement;
}

//создаем карточки из массива

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
// здесь хранится инструкция по работе с Card
    const card = createCard(item);
    cardsList.addItem(card);
        },
  },
  '.cards'
  );

  cardsList.renderItems();

// обработка попапов

// const popupTypeAddCard = new Popup(popupAddCard);
// const popupTypeEditProf = new Popup(popupEditProfile);
const popupTypeOpenImage = new PopupWithImage(showImagePopup);
const submitAddCardPopup = new PopupWithForm(popupAddCard, (link, name) => {

      const card = createCard(link, name);
      cardsList.addItemPrepend(card);
});

const userInfo = new UserInfo(nameProfile, professionProfile);
const submitEditProfPopup = new PopupWithForm(popupEditProfile, (formData) => {
   userInfo.setUserInfo(formData);
})


addCardButton.addEventListener('click',() => {
  placeField.value = '';
  linkField.value = ' ';
  submitAddCardPopup.open();});
editButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameEditField.value = userData.userNameInfo;
  professionEditField.value = userData.userProfessionInfo;
  submitEditProfPopup.open();
})

// popupTypeAddCard.setEventListeners();
// popupTypeEditProf.setEventListeners();

popupTypeOpenImage.setEventListeners();
submitAddCardPopup.setEventListeners();
submitEditProfPopup.setEventListeners();





// валидация

const editFormValidator = new FormValidator(validationObj, editForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationObj, addForm);
addFormValidator.enableValidation();



import '../src/pages/index.css';
import Card from './components/Card.js';
import {editButton, addCardButton,editForm, addForm, popupEditProfile,
        popupAddCard, showImagePopup, cardsContainer, initialCards,
        validationObj, linkField, placeField, nameProfile, professionProfile,
        nameEditField, professionEditField, formSaveButton, popupConfirmRemoval,
        popupEditAvatar, editAvatarButton, popupChangeAvatarButton, avatarEditField,
         avatarProfile,formSaveButtonAddCard, changeAvatarForm} from './constants.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js'
import PopupWithForm from './components/PopupWithForm.js'
import UserInfo from './components/UserInfo.js';
import Api from './components/Api.js';
import PopupConfirm from './components/PopupConfirm.js';
let myId;






const api = new Api('https://mesto.nomoreparties.co/v1/cohort-21','9bbcd07b-4715-4a83-9142-c6a4a4b2ad04')

//функция создания карточек массива из класса Card

function createCard(item) {
  const card = new Card(item, '.card-template',myId,{
  handleLikeClick: (cardId,isLiked) => {
    if(isLiked) {
    api.removeLike(cardId,myId)
      .then((likesInfo) => {
        card.setLikes(likesInfo)
      })
      .catch((err) =>
      console.log(err))
  } else {
    api.addLike(cardId, myId)
      .then((likesInfo) => {
      card.setLikes(likesInfo)
      })
      .catch((err) =>
      console.log(err))
  }},
  handleCardClick: () => popupTypeOpenImage.open(item.link, item.name),
  handleDeleteClick: (cardId) => {
    popupTypeConfirm.open();
    // console.log(cardId)
    popupTypeConfirm.setSubmitAction(() => {
      api.cardDelete(cardId)
        .then(() => {
          // console.log(item)
          card.removeCard();

        })
        .catch((err) =>
        console.log(err))
    }
    )}
  });
    // card.hideCardRemoveButton();
    // card.showLikes();
    const cardElement = card.createCard(item);
    return cardElement;
}

//создаем карточки из массива

const cardsList = new Section({
    renderer: (item) => {

// здесь хранится инструкция по работе с Card
    const cardsItem = createCard(item);

    cardsList.addItem(cardsItem);
        },
  },
  '.cards'
  );


  Promise.all([
    api.getUserData(),
    api.getCards()
  ])
    .then(([userData, cards]) => {
      userInfo.setUserInfo(userData);
      userInfo.setUserPhoto(userData);
      myId = userData._id;
      console.log(myId),
      cardsList.renderItems(cards);
    })
    .catch((error) => {
      console.log(error);
    })


// обработка попапов

const popupTypeOpenImage = new PopupWithImage(showImagePopup);
const submitAddCardPopup = new PopupWithForm(popupAddCard, () => {
      api.addNewCard()
      .then((res) => {
      const card = createCard(res);
      cardsList.addItemPrepend(card);
      formSaveButtonAddCard.textContent = 'Создать'
      })
      .catch((err) => {
        console.log(err)
        formSaveButtonAddCard.textContent = 'Создать'
      })
      formSaveButtonAddCard.textContent = 'Сохранение...'
});
const popupTypeConfirm = new PopupConfirm(popupConfirmRemoval);

const submitEditAvatar = new PopupWithForm(popupEditAvatar, () => {
  api.changeAvatar()
    .then((res) => {
      const ava = document.querySelector('.profile__avatar')
      ava.src = avatarEditField.value
    })
    .catch((err) => {
      console.log(err)
    })
    formSaveButton.textContent = 'Сохранение...'
})


const userInfo = new UserInfo(nameProfile, professionProfile, avatarProfile);
const submitEditProfPopup = new PopupWithForm(popupEditProfile, (formData) => {
  api.editUserData() //отправляем новые данные на сервер
    .then((res) => {
      userInfo.setUserInfo(formData) //если данные ушли на сервер, обновляем их на странице
    })
    .catch((err) => {
      console.log(err)
    })
    formSaveButton.textContent = 'Сохранение...'
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
  formSaveButton.textContent = 'Сохранить'
})
editAvatarButton.addEventListener('click', () => {
  submitEditAvatar.open();
  formSaveButton.textContent = 'Сохранить'
})


popupTypeOpenImage.setEventListeners();
submitAddCardPopup.setEventListeners();
submitEditProfPopup.setEventListeners();
submitEditAvatar.setEventListeners();
popupTypeConfirm.setEventListeners();





// валидация

const editFormValidator = new FormValidator(validationObj, editForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationObj, addForm);
addFormValidator.enableValidation();
const editAvatarFormValidator = new FormValidator(validationObj, changeAvatarForm);
editAvatarFormValidator.enableValidation();



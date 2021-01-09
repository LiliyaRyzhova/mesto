import {editForm, addForm, editButton, popupCloseButtonEditPopup, popupCloseButtonAddPopup,
  popupCloseButtonShowImagePopup, nameProfile, professionProfile, nameEditField, professionEditField,
  cardsContainer, addCardButton, popupEditProfile, popupAddCard, placeField, linkField, cardImage, showImagePopup, popupShowImageCaption, initialCards} from '../scripts/data.js';

function showPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupOverlay);

}

//закрытие попап по нажатию ESC//

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//закрытие попап по щелчку вне попапа
//Спасибо за подробные комментарии. Я прочитаю и сделаю более универсальный обработчик для закрытия по крестику и оверлею

function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target)
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupOverlay);
}

// редактирование профиля//

function fillProfilePopup() {
  nameEditField.value = nameProfile.textContent;
  professionEditField.value = professionProfile.textContent;
  showPopup(popupEditProfile);

}

function submitPopupEditProfile(event) {
  event.preventDefault();
  nameProfile.textContent = nameEditField.value;
  professionProfile.textContent = professionEditField.value;
  closePopup(popupEditProfile);
}



export {showPopup, closePopupEsc, closePopupOverlay, closePopup, fillProfilePopup, submitPopupEditProfile};

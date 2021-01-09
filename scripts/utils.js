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

//закрытие попап по щелчку вне попапа//

function closePopupOverlay(evt) {
  if (popupAddCard.contains(evt.target) && !addForm.contains(evt.target)) {
    popupAddCard.classList.remove('popup_opened');
  }
  if (popupEditProfile.contains(evt.target) && !editForm.contains(evt.target)) {
    popupEditProfile.classList.remove('popup_opened');
  }
  if (showImagePopup.contains(evt.target) && !cardImage.contains(evt.target)) {
    showImagePopup.classList.remove('popup_opened');
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

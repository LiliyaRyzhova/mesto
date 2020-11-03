let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let nameProfile = document.querySelector('.profile__user-name');
let professionProfile = document.querySelector('.profile__profession');
let nameEditField = document.querySelector('.popup__name-field');
let professionEditField = document.querySelector('.popup__profession-field');
let saveButton= document.querySelector('.popup__save-button');

console.log(nameEditField)

function showPopup () {
popup.classList.add('popup_opened');
nameEditField.value=nameProfile.textContent;
professionEditField.value=professionProfile.textContent;
}

editButton.addEventListener('click', showPopup)

function closePopup () {
	popup.classList.remove ('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup)

function submitPopup (event) {
	event.preventDefault();
	nameProfile.textContent=nameEditField.value;
	professionProfile.textContent=professionEditField.value;
 popup.classList.remove ('popup_opened');
}

popup.addEventListener('submit', submitPopup)

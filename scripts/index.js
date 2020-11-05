let popup = document.querySelector('.popup');
let form = document.querySelector ('.popup__form');
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let nameProfile = document.querySelector('.profile__user-name');
let professionProfile = document.querySelector('.profile__profession');
let nameEditField = document.querySelector('.popup__field_name');
let professionEditField = document.querySelector('.popup__field_profession');
let saveButton= document.querySelector('.popup__save-button');


function showPopup () {
  popup.classList.add('popup_opened');
  nameEditField.value=nameProfile.textContent;
  professionEditField.value=professionProfile.textContent;
}


function closePopup () {
	 popup.classList.remove ('popup_opened');
}


function submitPopup (event) {
	  event.preventDefault();
	  nameProfile.textContent=nameEditField.value;
  	professionProfile.textContent=professionEditField.value;
   closePopup ();
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', submitPopup);

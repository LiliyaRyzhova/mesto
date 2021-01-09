import  {showPopup} from '../scripts/utils.js';
import {cardImage, showImagePopup, popupShowImageCaption, linkField, placeField} from '../scripts/data.js';



export default class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__image').src = this._link || linkField.value;
    this._element.querySelector('.card__place-name').textContent = this._name || placeField.value;
    this._setEventListeners();
    return this._element;
  }


    _handleLike() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  _removeCard() {
    const cardItem = this._element.querySelector('.card__remove-button').closest('.card');
    cardItem.remove();
  }

  _showImage(src, alt) {
    cardImage.src = src;
    cardImage.alt = alt;
    popupShowImageCaption.textContent = alt;
    showPopup(showImagePopup);
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.card__remove-button').addEventListener('click', () => {
      this._removeCard();
    })
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._showImage(this._link, this._name);
    })
  }

}



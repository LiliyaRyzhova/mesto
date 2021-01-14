
export default class Card {
  constructor({link, name}, cardSelector, handleCardClick) {
    this._link = link;
    this._name = name;
    this._handleCardClick = handleCardClick;
    this._handleCardClickHandler = this._handleCardClickHandler.bind(this);
    this._cardSelector = cardSelector;
  }

  //копируем разметку

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  //создаем карточку

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image')
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__place-name').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

//функциональность добавить/убрать лайк

    _handleLike() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_active');
  }

  // удаление карточки

  _removeCard() {
    const cardItem = this._element.querySelector('.card__remove-button').closest('.card');
    cardItem.remove();
  }

//обработка открытия изображения

  _handleCardClickHandler() {
    this._handleCardClick(this._link, this._name);
  }

 //установка слушателей на кнопки и элементы

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLike();
    });
    this._element.querySelector('.card__remove-button').addEventListener('click', () => {
      this._removeCard();
    })
    this._cardImage.addEventListener('click', () => {
      this._handleCardClickHandler(this._link,  this._name);
    })
  }

}



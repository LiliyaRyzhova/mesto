


export default class Card {
  constructor(item, cardSelector, myId, {handleLikeClick, handleCardClick, handleDeleteClick}) {
    this._item = item;
    this._cardUserId = myId;
    this._handleLikeClick = handleLikeClick;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
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
    this._cardImage.src = this._item.link;
    this._cardImage.alt = this._item.name;
    this._element.querySelector('.card__place-name').textContent = this._item.name;
    this._showLikes();
    this._hideCardRemoveButton();
    this._setEventListeners();
    return this._element;
  }

  //проверяем, нужно ли отображать кнопку удаления на карточке

  _hideCardRemoveButton() {
    if (this._item.owner._id !== this._cardUserId) {
      this._element.querySelector('.card__remove-button').classList.add('card__remove-button_disactive');
    }
  }

  //отображение аутальной информации о лайках
  _showLikes() {
    if (this._getIsLiked()) {
      this._element.querySelector('.card__like-button').classList.add('card__like-button_active');
    }
    this._element.querySelector('.card__like-counter').textContent = this._item.likes.length;
  }

  removeCard() {
    this._element.remove()
  }

//обработка открытия изображения

  _handleCardClickHandler() {
    this._handleCardClick(this._item.link, this._item.name);
  }

//функциональность добавить/убрать лайк

//определяю лайкнута ли карточка пользователем, чтобы понять удалять лайк или добавлять
_getIsLiked() {
  if (this._item.likes.some(like => like._id === this._cardUserId)) {
    return true
  }
  else {
    return false
  }
}

  setLikes(likesInfo) {
    this._item.likes = likesInfo;
    if (this._getIsLiked()) {
      this._element.querySelector('.card__like-button').classList.add('card__like-button_active');
    }
    else {
      this._element.querySelector('.card__like-button').classList.remove('card__like-button_active');
    }
    this._element.querySelector('.card__like-counter').textContent = likesInfo.length;
  }


 //установка слушателей на кнопки и элементы

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleLikeClick(this._item._id, this._getIsLiked());
    });
    this._element.querySelector('.card__remove-button').addEventListener('click', () => {
      this._handleDeleteClick(this._item._id)
      ;
      // console.log(this._item._id)
    })
    this._cardImage.addEventListener('click', () => {
      this._handleCardClickHandler(this._item.link,  this._item.name);
    })
  }

}



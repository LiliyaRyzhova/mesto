
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
  }
  }
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
    this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => this.close());
    this._popupSelector.addEventListener('mousedown', (evt) => this._handleOverlayClose(evt))
  }
}

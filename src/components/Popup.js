import {escKey} from './../../src/constants.js';


export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === escKey) {

      this.close();
  }
  }
  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
    this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-button').addEventListener('click', () => this.close());
    this._popup.addEventListener('mousedown', (evt) => this._handleOverlayClose(evt))
  }
}


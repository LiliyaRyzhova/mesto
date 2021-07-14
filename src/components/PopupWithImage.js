import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._link = popup.querySelector('.popup__image');
    this._name = popup.querySelector('.popup__image-caption');
  }

    open(link, name) {
      this._link.src = link;
      this._link.alt = name;
      this._name.textContent = name;
      super.open();

    }
}


//Перебор массива и отрисовка разметки на его основе
//Класс Section решает отдельную задачу — вставку элементов в разметку


export default class Section {
  constructor({renderer}, containerSelector) {
    // this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);

  }

  //метод ринимает параметр element и вставляет его в контейнер методом append

  addItem(cardElement) {
    this._container.append(cardElement);
  }

  addItemPrepend(cardElement) {
    this._container.prepend(cardElement);
  }
  //метод перебирает массив данных и вставляет в контейнер методом addItem

  renderItems(cards) {

    cards.forEach(item => {
      this._renderer(item);

    });

  }

}

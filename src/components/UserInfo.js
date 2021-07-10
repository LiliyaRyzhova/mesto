// Создайте класс `UserInfo`
// Класс `UserInfo` отвечает за управление отображением информации о пользователе на странице. Этот класс:
// - Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
// - Содержит публичный метод `getUserInfo`, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// - Содержит публичный метод `setUserInfo,` который принимает новые данные пользователя и добавляет их на страницу.

export default class UserInfo {
  constructor(name, profession, avatar) {
    this._name = name;
    this._profession = profession;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      userNameInfo: this._name.textContent,
      userProfessionInfo: this._profession.textContent
    }

  }

  setUserInfo({name, about}) {
    this._name.textContent = name;
    this._profession.textContent = about;

  }

  getUserPhoto() {
    return {
      userPhoto: this._avatar.src

    }
  }

  setUserPhoto({avatar}) {
    this._avatar.src = avatar
  }

}


export default class Api{
  constructor(baseUrl, token){
    this._baseUrl = baseUrl;
    this._token = token;
  }
  // /получаем карточки с сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  //получаем инфо о пользователе с сервера

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  editUserData(inputValues) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputValues.name,
        about: inputValues.about,

    })
  })
    .then(this._checkResponse)
  }

  // создание новой карточки

  addNewCard(inputValues) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputValues.name,
        link: inputValues.link
    })
  })
  .then(this._checkResponse)
}

  addLike(cardId,userId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
          userId: userId ,
       })
    })
    .then(this._checkResponse)
    }


  removeLike(cardId,userId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
          userId: userId ,
       })
    })
    .then(this._checkResponse)
  }

  cardDelete(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }

    })
    .then(this._checkResponse)
  }

  //запрос на обновление аватара

  changeAvatar(inputValues) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'

    },
      body: JSON.stringify({
        avatar: inputValues.avatar
        })
      })
      .then(this._checkResponse)
    }
}

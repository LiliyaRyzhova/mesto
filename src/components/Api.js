import {nameEditField, professionEditField, avatarEditField,placeField,linkField} from './../../src/constants.js';



export default class Api{
  constructor(baseUrl, token){
    this._baseUrl = baseUrl;
    this._token = token;
  }
  // /получаем карточки с сервера

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
        headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
       return res.json();

      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })

  }

  //получаем инфо о пользователе с сервера

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
       return res.json();

      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }
  editUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameEditField.value,
        about: professionEditField.value,

    })
  })
    .then((res) => {
      if (res.ok) {
       return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
    )

  }

  // создание новой карточки

  addNewCard() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: placeField.value,
        link: linkField.value
    })
  })
    .then((res) => {
      if (res.ok) {
        console.log(res)
        console.log('запрос ушел, запись с картой создана')
       return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
  })}

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
    .then((res) => res.json())
      .then((res) => {
        console.log(res.likes)
        console.log('запрос ушел');
         return res.likes;
      })}


  removeLike(cardId,userId) {
    // let method = 'PUT';
    // if(isDeleted) method ='DELETE';
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
    .then((res) => res.json())
      .then((res) => {

          console.log(res.likes);
          console.log('запрос на удаление лайка ушел');
         return res.likes;
      })
  }

  cardDelete(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }

    })
      .then((res) => {
        if (res.ok) {
         return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      }
      )
  }

  //запрос на обновление аватара

  changeAvatar() {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'

    },
      body: JSON.stringify({
        avatar: avatarEditField.value
        })
      })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }
}

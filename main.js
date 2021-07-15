(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r){var i=r.handleLikeClick,a=r.handleCardClick,c=r.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=e,this._cardUserId=o,this._handleLikeClick=i,this._handleCardClick=a,this._handleDeleteClick=c,this._handleCardClickHandler=this._handleCardClickHandler.bind(this),this._cardSelector=n}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._item.link,this._cardImage.alt=this._item.name,this._element.querySelector(".card__place-name").textContent=this._item.name,this._showLikes(),this._hideCardRemoveButton(),this._setEventListeners(),this._element}},{key:"_hideCardRemoveButton",value:function(){this._item.owner._id!==this._cardUserId&&this._element.querySelector(".card__remove-button").classList.add("card__remove-button_disactive")}},{key:"_showLikes",value:function(){this._getIsLiked()&&this._element.querySelector(".card__like-button").classList.add("card__like-button_active"),this._element.querySelector(".card__like-counter").textContent=this._item.likes.length}},{key:"removeCard",value:function(){this._element.remove()}},{key:"_handleCardClickHandler",value:function(){this._handleCardClick(this._item.link,this._item.name)}},{key:"_getIsLiked",value:function(){var e=this;return!!this._item.likes.some((function(t){return t._id===e._cardUserId}))}},{key:"setLikes",value:function(e){this._item.likes=e,this._getIsLiked()?this._element.querySelector(".card__like-button").classList.add("card__like-button_active"):this._element.querySelector(".card__like-button").classList.remove("card__like-button_active"),this._element.querySelector(".card__like-counter").textContent=e.length}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__like-button").addEventListener("click",(function(){e._handleLikeClick(e._item._id,e._getIsLiked())})),this._element.querySelector(".card__remove-button").addEventListener("click",(function(){e._handleDeleteClick(e._item._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClickHandler(e._item.link,e._item.name)}))}}])&&e(n.prototype,o),t}(),n=document.querySelector(".popup__form_edit-profile"),o=document.querySelector(".popup__form_add-card"),r=document.querySelector(".popup__form_change-avatar"),i=document.querySelector(".popup_open-image"),a=document.querySelector(".profile__edit-button"),c=(document.querySelector(".popup__close-button_edit-popup"),document.querySelector(".popup__close-button_add-popup"),document.querySelector(".popup__close-button_open-image"),document.querySelector(".popup__close-button_change-avatar"),document.querySelector(".profile__user-name")),u=document.querySelector(".profile__profession"),s=document.querySelector(".popup__field_name"),l=document.querySelector(".popup__field_profession"),f=(document.querySelector(".cards"),document.querySelector(".profile__add-button")),p=document.querySelector(".popup_edit-profile"),h=document.querySelector(".popup_add-card"),_=document.querySelector(".popup_change-avatar"),d=(document.querySelector(".popup__field_place-name"),document.querySelector(".popup__field_link"),document.querySelector(".popup__image-caption"),document.querySelector(".popup__image"),document.querySelector(".popup__save-button")),y=document.querySelector(".popup__save-button_edit-profile"),v=document.querySelector(".popup__save-button_change-avatar"),m=(document.querySelector(".popup__save-button_inactive"),document.querySelector(".popup__save-button_add-card")),b=(document.querySelector(".card__remove-button"),document.querySelector(".popup_confirm-removal")),k=document.querySelector(".profile__edit-sign"),g=(document.querySelector(".popup__field_avatar_link"),document.querySelector(".profile__avatar")),S=(document.querySelector(".popup__field"),{formSelector:".popup__form-fields",inputSelector:".popup__field",saveButtonSelector:".popup__save-button",inputInvalidClass:"popup__field_invalid",buttonInvalidClass:"popup__save-button_inactive"});function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._obj=t,this._form=n,this._saveButton=n.querySelector(this._obj.saveButtonSelector),this._inputsList=Array.from(this._form.querySelectorAll(this._obj.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._inputInvalidClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._inputInvalidClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(e){e?(this._saveButton.classList.remove(this._obj.buttonInvalidClass),this._saveButton.disabled=!1):(this._saveButton.classList.add(this._obj.buttonInvalidClass),this._saveButton.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputsList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._form.checkValidity())}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputsList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&C(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var L=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&E(t.prototype,n),e}();function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._handleOverlayClose(t)}))}}])&&O(t.prototype,n),e}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(o);if(r){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._link=e.querySelector(".popup__image"),t._name=e.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e,t){this._link.src=e,this._link.alt=t,this._name.textContent=t,P(U(a.prototype),"open",this).call(this)}}])&&I(t.prototype,n),a}(q);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function V(e,t,n){return(V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(o);if(r){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__field"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;V(z(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){V(z(a.prototype),"close",this).call(this),this._form.reset()}}])&&A(t.prototype,n),a}(q);function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var F=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._profession=n,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userNameInfo:this._name.textContent,userProfessionInfo:this._profession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t,this._profession.textContent=n}},{key:"getUserPhoto",value:function(){return{userPhoto:this._avatar.src}}},{key:"setUserPhoto",value:function(e){this._avatar.src=e}}])&&J(t.prototype,n),e}();function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var $=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t,this._token=n}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"editUserData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"addLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({userId:t})}).then(this._checkResponse)}},{key:"removeLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({userId:t})}).then(this._checkResponse)}},{key:"cardDelete",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}}])&&M(t.prototype,n),e}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Q(e,t,n){return(Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z,ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(o);if(r){var n=Y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return X(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form_confirm-removal"),t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;Q(Y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&K(t.prototype,n),a}(q);function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var ne=new $("https://mesto.nomoreparties.co/v1/cohort-21","9bbcd07b-4715-4a83-9142-c6a4a4b2ad04");function oe(e){var n=new t(e,".card-template",Z,{handleLikeClick:function(e,t){t?ne.removeLike(e,Z).then((function(e){n.setLikes(e.likes)})).catch((function(e){return console.log(e)})):ne.addLike(e,Z).then((function(e){n.setLikes(e.likes)})).catch((function(e){return console.log(e)}))},handleCardClick:function(){return ie.open(e.link,e.name)},handleDeleteClick:function(e){ce.open(),ce.setSubmitAction((function(){ne.cardDelete(e).then((function(){n.removeCard(),ce.close()})).catch((function(e){return console.log(e)}))}))}});return n.createCard(e)}var re=new L({renderer:function(e){var t=oe(e);re.addItem(t)}},".cards");Promise.all([ne.getUserData(),ne.getCards()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];se.setUserInfo(r),se.setUserPhoto(r.avatar),Z=r._id,console.log(Z),re.renderItems(i)})).catch((function(e){console.log(e)}));var ie=new x(i),ae=new H(h,(function(e){ne.addNewCard(e).then((function(e){var t=oe(e);re.addItemPrepend(t),ae.close()})).catch((function(e){console.log(e)})).finally((function(){return m.textContent="Создать"})),m.textContent="Сохранение..."})),ce=new ee(b),ue=new H(_,(function(e){ne.changeAvatar(e).then((function(e){se.setUserPhoto(e.avatar),ue.close()})).catch((function(e){console.log(e)})).finally((function(){return v.textContent="Сохранить"})),v.textContent="Сохранение..."})),se=new F(c,u,g),le=new H(p,(function(e){ne.editUserData(e).then((function(t){se.setUserInfo(e),le.close()})).catch((function(e){console.log(e)})).finally((function(){return y.textContent="Сохранить"})),y.textContent="Сохранение..."}));f.addEventListener("click",(function(){ae.open(),fe.resetValidation()})),a.addEventListener("click",(function(){var e=se.getUserInfo();s.value=e.userNameInfo,l.value=e.userProfessionInfo,le.open(),d.textContent="Сохранить"})),k.addEventListener("click",(function(){ue.open(),pe.resetValidation(),d.textContent="Сохранить"})),ie.setEventListeners(),ae.setEventListeners(),le.setEventListeners(),ue.setEventListeners(),ce.setEventListeners(),new w(S,n).enableValidation();var fe=new w(S,o);fe.enableValidation();var pe=new w(S,r);pe.enableValidation()})();
//# sourceMappingURL=main.js.map
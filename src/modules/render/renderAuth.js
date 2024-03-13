import { main } from '../../index.js';
import { authControl } from '../control/authControl.js';

export const renderAuth = () => {
  const layoutContainer = document.createElement('div');
  layoutContainer.classList.add('Layout_container__dVyML');

  const authContainer = document.createElement('div');
  authContainer.classList.add('Auth_auth__container__wfp4f');

  const authWrapper = document.createElement('div');
  authWrapper.classList.add('Auth_auth__wrapper__kAWv0');

  const authForm = document.createElement('form');
  authForm.classList.add('Auth_form__UlHVT');
  authForm.insertAdjacentHTML('beforeend', `
    <legend class="Auth_form__title__r5eX8">Вход в аккаунт</legend>
    <div class="Auth_form__input-wrapper__O5-dR">
      <span class="Auth_form__error__MUAaN"></span>
      <label class="Auth_form__label__LfZbr">Логин</label>
      <input class="Auth_form__input__rmwCS" name="login">
    </div>
    <div class="Auth_form__input-wrapper__O5-dR">
      <span class="Auth_form__error__MUAaN"></span>
      <label class="Auth_form__label__LfZbr">Пароль</label>
      <input type="password" class="Auth_form__input__rmwCS" name="password">
    </div>
    <button class="Auth_form__button__fIzMy button" type="submit">Войти</button>
  `);

  authWrapper.append(authForm);
  authContainer.append(authWrapper);
  layoutContainer.append(authContainer);
  main.append(layoutContainer);

  authControl(authForm);
}
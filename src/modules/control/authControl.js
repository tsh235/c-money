import JustValidate from "just-validate";
import { API_URL, JWT_TOKEN_KEY, main } from "../../index.js";
import { router } from '../utils/router.js';
import { renderError } from "../render/renderError.js";
import { preload } from "../utils/preload.js";

export const authControl = (authForm) => {
  const userLogin = authForm.login;
  const userPass = authForm.password;

  userLogin.addEventListener('mouseenter', ({target}) => target.setAttribute('autocomplete', 'off'));
  userPass.addEventListener('mouseenter', ({target}) => target.setAttribute('autocomplete', 'off'));

  const validateAuth = new JustValidate(authForm, {
    errorLabelStyle: {
      color: '#D11616',
      fontSize: '14px',
    },
  });

  validateAuth
    .addField(userLogin, [
      {
        rule: 'required',
        errorMessage: 'Введите логин',
      },
      {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Логин должен содержать не менее 6 букв латинского алфавита',
      },
      {
        validator: () => {
          userLogin.addEventListener('input', ({target}) => {
            const value = target.value;
            const modifiedValue = value.split('').map(char => /[a-zA-Z]+/gi.test(char) ? char : '').join('');
            target.value = modifiedValue;
          });
          return !!userLogin;
        },
      },
    ])
    .addField(userPass, [
      {
        rule: 'required',
        errorMessage: 'Введите пароль',
      },
      {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Пароль должен содержать не менее 6 букв латинского алфавита или цифр',
      },
      {
        validator: () => {
          userPass.addEventListener('input', ({target}) => {
            const value = target.value;
            const modifiedValue = value.split('').map(char => /^[a-z0-9]+$/gi.test(char) ? char : '').join('');
            target.value = modifiedValue;
          });
          return !!userPass;
        },
      }
    ])
    .onSuccess(async () => {
      const formData = new FormData(authForm);
      const credentails = {
        login: formData.get('login'),
        password: formData.get('password'),
      };

      try {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentails),
        });

        if (response.ok) {
          preload.append();
          const data = await response.json();
          
          if (data.payload) {
            preload.remove();
            authForm.reset();
            localStorage.setItem(JWT_TOKEN_KEY, data.payload.token);
            main.textContent = '';
            router.navigate('/currencies');
          } else {
            renderError(data.error, 'auth');
          }
        } else {
          const { message = 'Неизвестная ошибка' } = await response.json();
          console.log(message);
          throw new Error(message);
        }
      } catch (error) {
        console.error(error.message);
      }
    }); 
}
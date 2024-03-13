import { main } from '../../index.js';

export const renderError = (error, page) => {
  const errorText = document.createElement('p');
  errorText.style.cssText = `
    color: red;
    margin-top: 20px;
    text-align: center;
  `;

  if (page === 'auth') {
    switch(error) {
      case 'No such user':
        errorText.textContent = 'Пользователя с таким логином не существует';
        break;
      case 'Invalid password':
        errorText.textContent = 'Введен неверный пароль';
        break;
    }
    main.querySelector('.Auth_auth__wrapper__kAWv0').append(errorText);
  }

  
  if (page === 'account') {
      switch(error) {
        case 'Invalid account from':
          errorText.textContent = 'Не указан адрес счёта списания, или этот счёт не принадлежит нам';
          break;
        case 'Invalid account to':
          errorText.textContent = 'Не указан счёт зачисления, или этого счёта не существует';
          break;
        case 'Invalid amount':
          errorText.textContent = 'Не указана сумма перевода, или она отрицательная';
          break;
        case 'Overdraft prevented':
          errorText.textContent = 'Вы попытаетесь перевести больше денег, чем доступно на счёте списания';
          break;
      }
      document.querySelector('.Account_transaction__fgGIA').append(errorText);    
  }

  if (page === 'exchange') {
    switch(error) {
      case 'Unknown currency code':
        errorText.textContent = 'Передан неверный валютный код, код не поддерживается системой';
        break;
      case 'Invalid amount':
        errorText.textContent = 'Не указана сумма перевода, или она отрицательная';
        break;
      case 'Not enough currency':
        errorText.textContent = 'На валютном счёте списания недостаточно средств';
        break;
      case 'Overdraft prevented':
        errorText.textContent = 'Вы попытаетесь перевести больше денег, чем доступно на счёте списания';
        break;
    }
    document.querySelector('.Exchange_exchange__wrapper__H4XK5').append(errorText);    
}

  setTimeout(() => {
    errorText.remove();  
  }, 2000);
}
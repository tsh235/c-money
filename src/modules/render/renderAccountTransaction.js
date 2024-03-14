import { transactionControl } from '../control/transactionControl.js';

export const renderAccountTransaction = ({account}) => {
  const accountTransaction = document.createElement('div');
  accountTransaction.classList.add('Account_transaction__fgGIA');
  
  const transactionTitle = document.createElement('h3');
  transactionTitle.classList.add('Account_title__oytHW', 'Account_transaction__title__5k3f-');
  transactionTitle.textContent = 'Перевод';
  
  const transactionForm = document.createElement('form');
  transactionForm.classList.add('Account_transaction__form__mKYvj');
  transactionForm.insertAdjacentHTML('beforeend', `
    <form class="Account_transaction__form__mKYvj">
      <div class="Account_transaction__input-wrap__ORoWP">
        <label class="Account_transaction__label__rsShR">Счет</label>
        <input class="Account_transaction__input__rH-Ae" name="to">
      </div>
      <div class="Account_transaction__input-wrap__ORoWP">
        <label class="Account_transaction__label__rsShR">Сумма</label>
        <input class="Account_transaction__input__rH-Ae" name="amount">
      </div><button class="Account_button__3jGkT button">Перевести</button>
    </form>
  `);
  
  
  accountTransaction.append(transactionTitle, transactionForm);

  transactionControl(account, transactionForm);
  
  return accountTransaction;
};
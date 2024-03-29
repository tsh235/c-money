import { main } from '../../index.js';
import { getData } from '../utils/getData.js';
import { preload } from '../utils/preload.js';
import { renderAccountDynamic } from "./renderAccountDynamic.js";
import { renderAccountHeader } from "./renderAccountHeader.js";
import { renderAccountHistory } from "./renderAccountHistory.js";
import { renderTransactionForm } from "./renderTransactionForm.js";

export const renderAccount = async (id) => {
  main.textContent = '';

  preload.append();
  const data = await getData(`account/${id}`);
  preload.remove();

  const layoutContainer = document.createElement('div');
  layoutContainer.classList.add('Layout_container__dVyML');

  const accountContainer = document.createElement('div');
  accountContainer.classList.add('Account_container__bOskA');

  accountContainer.append(
    renderAccountHeader(data),
    renderAccountDynamic(data),
    renderAccountHistory(data),
    renderTransactionForm(data)
  );
  layoutContainer.append(accountContainer);
  main.append(layoutContainer);
};






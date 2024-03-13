import { main } from '../../index.js';
import { renderAccountDynamic } from "./renderAccountDynamic.js";
import { renderAccountHeader } from "./renderAccountHeader.js";
import { renderAccountHistory } from "./renderAccountHistory.js";
import { renderAccountTransaction } from "./renderAccountTransaction.js";

export const renderAccount = async (data) => {
  main.textContent = '';

  const layoutContainer = document.createElement('div');
  layoutContainer.classList.add('Layout_container__dVyML');

  const accountContainer = document.createElement('div');
  accountContainer.classList.add('Account_container__bOskA');
  accountContainer.append(
    renderAccountHeader(data),
    renderAccountDynamic(data),
    renderAccountHistory(data),
    renderAccountTransaction(data)
  );
  layoutContainer.append(accountContainer);
  main.append(layoutContainer);
};






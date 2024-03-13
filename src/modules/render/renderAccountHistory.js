import { renderRow } from './renderRow.js';

export const renderAccountHistory = ({account, transactions}) => {
  const accountHistory = document.createElement('div');
  accountHistory.classList.add('Account_history__qgCwN');
  
  const historyTitle = document.createElement('h3');
  historyTitle.classList.add('Account_history__title__X1e2S');
  historyTitle.textContent = 'История переводов';

  const historyTableWrapper = document.createElement('div');
  historyTableWrapper.classList.add('Table_table__container__-ExoA');
  
  const historyTable = document.createElement('table');
  historyTable.classList.add('Table_table__lsukp');
  historyTable.insertAdjacentHTML('afterbegin', `
    <thead class="Table_thead__tkFEQ">
      <tr>
      <th class="Table_th__yQviT">Счет</th>
      <th class="Table_th__yQviT">Сумма</th>
      <th class="Table_th__yQviT">Дата</th>
      </tr>
    </thead>
  `);

  const historyTableBody = document.createElement('tbody');
  historyTableBody.classList.add('Table_tbody__-S3Fd');

  const reversTransactions = (transactions).reverse();
  const rows = reversTransactions.map(item => renderRow(account, item));
  historyTableBody.append(...rows);
  historyTable.append(historyTableBody);

  historyTableWrapper.append(historyTable);
  accountHistory.append(historyTitle, historyTableWrapper);
  return accountHistory;
}
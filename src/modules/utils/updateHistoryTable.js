import { renderRow } from '../render/renderRow.js';

export const updateHistoryTable = ({account, transactions}) => {
  const historyTable = document.querySelector('.Table_table__lsukp');
  const historyTableBody = document.querySelector('.Table_tbody__-S3Fd');
  historyTableBody.textContent = '';
  
  const reversTransactions = (transactions).reverse();
  const rows = reversTransactions.map(item => renderRow(account, item));
  historyTableBody.append(...rows);
  historyTable.append(historyTableBody);
  return historyTable;
};


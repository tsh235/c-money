import { getData } from '../utils/getData.js';

export const renderCurrencyTableBody = async () => {
  const data = await getData('currencies');

  const tbody = document.createElement('tbody');

  const rows = [];
  Object.entries(data).forEach(item => {
    if (item[1].amount > 0) {
      const tr = document.createElement('tr');
      const tdCode = document.createElement('td');
      tdCode.classList.add('Exchange_td__code__NW-NP');
      tdCode.textContent = item[1].code;
  
      const tdAmount = document.createElement('td');
      tdAmount.classList.add('Exchange_td__amount__aBkzX');
      tdAmount.textContent = (item[1].amount).toLocaleString('ru-Ru', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  
      tr.append(tdCode, tdAmount);
      rows.push(tr);
    }
  });

  tbody.append(...rows);
  return tbody;
};


import { convertDate } from '../utils/convertDate.js';

export const renderRow = (acc, {amount, date, from, to}) => {
  const row = document.createElement('tr');

  const tdId = document.createElement('td');
  tdId.classList.add('Table_td__HXWLH', 'undefined');
  
  const tdSumm = document.createElement('td');
  tdSumm.classList.add('Table_td__HXWLH', 'Table_td_middle__bXwqs');
  
  if (from === acc) {
    tdId.textContent = to;
    tdSumm.style.color = '#B865D6';
    tdSumm.textContent = `-${(Math.floor(amount)).toLocaleString()}`;
  } else {
    tdId.textContent = from;
    tdSumm.textContent = (Math.floor(amount)).toLocaleString();
  }

  const tdDate = document.createElement('td');
  tdDate.classList.add('Table_td__HXWLH', 'Table_td__date__0bfUN');
  tdDate.textContent = `${convertDate(date)}`

  row.append(tdId, tdSumm, tdDate);

  return row;
};
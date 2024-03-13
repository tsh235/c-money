import { generateChart } from '../utils/generateChart.js';
import { getYears } from '../utils/getYears.js';

export const renderAccountDynamic = ({account, transactions}) => {
  const yearsObj = getYears(transactions);
  const years = Object.keys(yearsObj);

  const accountDynamic = document.createElement('div');
  accountDynamic.classList.add('Account_dynamic__q70XE');
  
  const dynamicHeader = document.createElement('div');
  dynamicHeader.classList.add('Account_dynamic__header__iCPTa');
  
  const dynamicTitle = document.createElement('h3');
  dynamicTitle.classList.add('Account_dynamic__title__JwsS2');
  dynamicTitle.textContent = 'Динамика';
  
  const dynamicYear = document.createElement('span');
  dynamicYear.classList.add('Account_dynamic__year__22YBJ');
  dynamicYear.textContent = new Date().getFullYear();
  
  const dynamicSelect = document.createElement('select');
  dynamicSelect.classList.add('Account_dynamic__select__7zXlN');
  dynamicSelect.insertAdjacentHTML('beforeend', `
    <option hidden="">Год</option>
  `);

  const options = years.map(item => {
    const option = document.createElement('option');
    option.textContent = item;
    return option;
  });
  dynamicSelect.append(...options);

  const dynamicChart = document.createElement('div');

  const year = dynamicYear.textContent;
  generateChart(account, year, yearsObj, dynamicChart);
  
  dynamicSelect.addEventListener('change', ({target}) => {
    dynamicYear.textContent = target.value;
    const year = dynamicYear.textContent;
    generateChart(account, year, yearsObj, dynamicChart);
  });
  

  dynamicHeader.append(dynamicTitle, dynamicYear, dynamicSelect);
  accountDynamic.append(dynamicHeader, dynamicChart);
  return accountDynamic;
}
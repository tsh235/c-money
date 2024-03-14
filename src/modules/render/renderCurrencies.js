import { main, token } from '../../index.js';
import { addNewCount } from '../utils/addNewCount.js';
import { sortList } from '../utils/sortList.js';
import { renderCard } from './renderCard.js';

export const renderCurrencies = async (data) => {
  main.textContent = '';
  const layoutContainer = document.createElement('div');
  layoutContainer.classList.add('Layout_container__dVyML');

  const currenciesContainer = document.createElement('div');
  currenciesContainer.classList.add('Currencies_container__7ljxx');

  const title = document.createElement('h2');
  title.classList.add('Currencies_title__EZeC+');
  title.textContent = `Здравствуйте, Александр!`;

  const openAccountBtn = document.createElement('button');
  openAccountBtn.classList.add('Currencies_button__bDW4g', 'button');
  openAccountBtn.textContent = 'Открыть новый счет';

  const currencies = document.createElement('div');
  currencies.classList.add('Currencies_currencies__+cpi4');

  const currenciesTitle = document.createElement('h3');
  currenciesTitle.classList.add('Currencies_currencies__title__5BSO9');
  currenciesTitle.textContent = 'Мои счета';

  const currenciesSort = document.createElement('div');
  currenciesSort.classList.add('Currencies_sort__jn3o0');
  currenciesSort.insertAdjacentHTML('afterbegin', `
    <span class="Currencies_sort__title__dnFDd">Сортировка:</span>
  `);

  const currenciesSelect = document.createElement('select');
  currenciesSelect.classList.add('Currencies_select__TqOYs');
  currenciesSelect.insertAdjacentHTML('beforeend', `
    <option value="account">Номер счёта</option>
    <option value="balance">Баланс</option>
    <option value="date">Дата открытия</option>
    <option value="last">Дата последней трансзакции</option>
  `);

  currenciesSort.append(currenciesSelect);

  const currenciesList = document.createElement('ul');
  currenciesList.classList.add('Currencies_list__M1Qq1');

  const sortingData = sortList(data, currenciesSelect.value);

  const accounts = sortingData.map(item => renderCard(item));
  currenciesList.append(...accounts);
  
  currencies.append(currenciesTitle, currenciesSort, currenciesList)
  currenciesContainer.append(title, openAccountBtn, currencies)
  layoutContainer.append(currenciesContainer);

  main.append(layoutContainer);

  openAccountBtn.addEventListener('click', async () => {
    addNewCount();
    currenciesList.textContent = '';
    const accounts = data.map(item => renderCard(item));
    currenciesList.append(...accounts);
  });

  currenciesSelect.addEventListener('change', () => {
    currenciesList.textContent = '';
    const sortingData = sortList(data, currenciesSelect.value);
    const accounts = sortingData.map(item => renderCard(item));  
    currenciesList.append(...accounts);
  });
};

import { MY_ACCOUNT, WS_URL, main } from '../../index.js';
import { getData } from '../utils/getData.js';
import { preload } from '../utils/preload.js';
import { renderCurrencyTableBody } from './renderCurrencyTableBody.js';
import { renderExchangeForm } from './renderExchangeForm.js';
import { renderExchangeRow } from './renderExchangeRow.js';

export const renderExchange = async () => {
  main.textContent = '';

  preload.append();
  const data = await getData(`account/${MY_ACCOUNT}`);
  preload.remove();
  const {account, balance} = data;

  const layoutContainer = document.createElement('div');
  layoutContainer.classList.add('Layout_container__dVyML');
  
  const container = document.createElement('div');
  container.classList.add('Exchange_container__pUsrZ');
  container.insertAdjacentHTML('afterbegin', `
    <h2 class="Exchange_title__xD-uT">Обмен валюты</h2>
    <span class="Exchange_text__9DvKs">Счет</span>
    <span class="Exchange_text_white__lsYvt">${account}</span>
    <br>
    <span class="Exchange_text__9DvKs">Баланс </span>
    <span class="Exchange_text_white__lsYvt Exchange_balance__Bp6gG">${balance.toLocaleString()}</span>
  `);
    
  const wrapper = document.createElement('div');
  wrapper.classList.add('Exchange_wrapper__vGtDi');
  
  const ratesWrapper = document.createElement('div');
  ratesWrapper.classList.add('Exchange_rates__wrapper__sHiBR');
  ratesWrapper.insertAdjacentHTML('afterbegin', `
    <h3 class="Exchange_rates__title__nV7pm">Изменение курса в режиме реального времени</h3>
  `);
  const ratesTbody = document.createElement('div');
  ratesTbody.classList.add('Exchange_tbody__qA0Za');
  
  const soket = new WebSocket(`${WS_URL}/currency-feed`);
  ratesTbody.textContent = '';
  soket.addEventListener('message', message => {
    renderExchangeRow(ratesTbody, JSON.parse(message.data));
  });

  soket.addEventListener('error', err => {
    console.log('err: ', err);
    ratesTbody.textContent = 'Ошибка соединения'
  });

  ratesWrapper.append(ratesTbody);
  
  const rightWrapper = document.createElement('div');
  rightWrapper.classList.add('Exchange_right__wrapper__kXr+e');
  
  const exchangeWrapper = document.createElement('div');
  exchangeWrapper.classList.add('Exchange_exchange__wrapper__H4XK5');
  exchangeWrapper.insertAdjacentHTML('afterbegin', `
    <h3 class="Exchange_exchange__title__M+Z+Y">Обмен валюты</h3>
  `);
  exchangeWrapper.append(await renderExchangeForm());

  const currencyTableWrapper = document.createElement('div');
  const currencyTable = document.createElement('table');
  currencyTable.insertAdjacentHTML('afterbegin', `
    <thead>
      <tr>
        <th class="Exchange_currency__title__owIkO" colspan="2">Мои валюты</th>
      </tr>
    </thead>
  `);
  
  currencyTable.append(await renderCurrencyTableBody());
  currencyTableWrapper.append(currencyTable);

  rightWrapper.append(exchangeWrapper, currencyTableWrapper);
  wrapper.append(ratesWrapper, rightWrapper);
  container.append(wrapper);
  layoutContainer.append(container);
  main.append(layoutContainer);
};


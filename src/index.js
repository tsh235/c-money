import './css/style.css';

import { renderNavigation } from './modules/render/renderNavigation.js';
import { renderHeader } from './modules/render/renderHeader.js';
import { renderFooter } from './modules/render/renderFooter.js';
import { router } from './modules/utils/router.js';
import { renderApp } from './modules/render/renderApp.js';
import { preload } from './modules/utils/preload.js';
import { handleHomePage } from './modules/handlers/handleHomePage.js';
import { handlePageAccount } from './modules/handlers/handlePageAccount.js';
import { handlePageExchange } from './modules/handlers/handlePageExchange.js';
import { handlePageCurrencies } from './modules/handlers/handlePageCurrencies.js';

export const API_URL = 'https://foggy-mini-drum.glitch.me';
export const WS_URL = 'ws://foggy-mini-drum.glitch.me'; // если с хостинга, то надо wss прописывать
export const JWT_TOKEN_KEY = 'cmoney';
export const MY_ACCOUNT = '24051911200915061003240821';
export const token = localStorage.getItem(JWT_TOKEN_KEY);
export const {header, main, footer} = renderApp();


const init = () => {
  preload.init();

  try {
    router.on('*', () => {
      renderHeader();
      header.querySelector('.Header_container__vI36D').append(renderNavigation());
      renderFooter();
    });

    router.on('/', handleHomePage);
    router.on('/currencies', handlePageCurrencies)
    router.on('/account/:id', handlePageAccount)
    router.on('/exchange', handlePageExchange)

  } catch (e) {
    const h2 = document.createElement('h2');
    h2.style.textAlign = 'center';
    h2.textContent = 'Что-то пошло не так, попробуйте позже';
    main.append(h2);
  } finally {
    router.resolve();
  }
};

init();

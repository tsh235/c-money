import { JWT_TOKEN_KEY } from '../../index.js';
import { renderCurrencies } from '../render/renderCurrencies.js';
import { getData } from '../utils/getData.js';
import { preload } from '../utils/preload.js';
import { updateNav } from '../utils/updateNav.js';

export const handlePageCurrencies = async () => {
  const token = localStorage.getItem(JWT_TOKEN_KEY);
  if (!!token) {
    updateNav('currencies');
    preload.append();
    const data = await getData('accounts');
    preload.remove();
    renderCurrencies(data);
  }
};
import { renderCurrencies } from '../render/renderCurrencies.js';
import { getData } from '../utils/getData.js';
import { preload } from '../utils/preload.js';

export const handlePageCurrencies = async () => {
  updateNav('currencies');
  preload.append();
  const data = await getData('accounts');
  preload.remove();
  renderCurrencies(data);
};
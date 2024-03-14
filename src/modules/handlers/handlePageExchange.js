import { renderExchange } from '../render/renderExchange.js';
import { updateNav } from '../utils/updateNav.js';

export const handlePageExchange = async () => {
  updateNav('exchange');
  renderExchange();
};
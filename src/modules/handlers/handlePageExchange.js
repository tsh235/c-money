import { MY_ACCOUNT } from '../../index.js';
import { renderExchange } from '../render/renderExchange.js';
import { getData } from '../utils/getData.js';
import { preload } from '../utils/preload.js';
import { updateNav } from '../utils/updateNav.js';

export const handlePageExchange = async () => {
  updateNav('exchange');
  preload.append();
  const data = await getData(`account/${MY_ACCOUNT}`);
  preload.remove();
  renderExchange(data);
};
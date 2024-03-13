import { renderAccount } from '../render/renderAccount.js';
import { getData } from '../utils/getData.js';
import { preload } from '../utils/preload.js';
import { updateNav } from '../utils/updateNav.js';

export const handlePageAccount = async (routerData) => {
  const {id} = routerData.data;
  updateNav('currencies');
  preload.append();
  const data = await getData(`account/${id}`);
  preload.remove();
  renderAccount(data);
};
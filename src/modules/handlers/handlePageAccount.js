import { renderAccount } from '../render/renderAccount.js';
import { updateNav } from '../utils/updateNav.js';

export const handlePageAccount = async (routerData) => {
  const {id} = routerData.data;
  updateNav('currencies');

  renderAccount(id);
};
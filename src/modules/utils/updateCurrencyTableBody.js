import { renderCurrencyTableBody } from '../render/renderCurrencyTableBody.js';

export const updateCurrencyTableBody = async () => {
  const table = document.querySelector('.Exchange_wrapper__vGtDi table');
  const tbody = table.querySelector('tbody');
  tbody.remove();
  
  table.append(await renderCurrencyTableBody());
};


import { API_URL, token } from '../../index.js';
import { renderError } from '../render/renderError.js';
import { updateHistoryTable } from './updateHistoryTable.js';

export const transferFunds = async (form, body) => {
  try {
    const response = await fetch(`${API_URL}/transfer-funds`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const data = await response.json();

      if (data.payload) {
        form.reset();
        updateHistoryTable(data.payload);
      } else {
        renderError(data.error, 'account');
      }
    } else {
      const { message = 'Неизвестная ошибка' } = await response.json();
      throw new Error(message);
    }
  } catch (error) {
    console.error(error.message);
  }
}
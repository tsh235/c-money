import { API_URL, JWT_TOKEN_KEY } from '../../index.js';

export const getData = async (url) => {
  const token = localStorage.getItem(JWT_TOKEN_KEY);
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Basic ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}/${url}`, {
      method: 'GET',
      headers,
    });

    const data = await response.json();

    return data.payload;
  } catch (err) {
    console.error(err);
  }
};
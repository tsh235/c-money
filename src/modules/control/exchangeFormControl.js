import JustValidate from "just-validate";
import { API_URL } from "../../index.js";
import { renderError } from "../render/renderError.js";
import { updateCurrencyTableBody } from "../utils/updateCurrencyTableBody.js";

export const exchangeFormControl = async (form) => {
  const token = localStorage.getItem(JWT_TOKEN_KEY);

  if (!!token) {
    const validateForm = new JustValidate(form, {
      errorLabelStyle: {
        color: '#D11616',
        fontSize: '14px',
      },
    });
    
    validateForm
      .addField(form.from, [
        {
          rule: 'required',
          errorMessage: 'Заполните поле',
        },
      ])
      .addField(form.to, [
        {
          rule: 'required',
          errorMessage: 'Заполните поле',
        },
      ])
      .addField(form.amount, [
        {
          rule: 'required',
          errorMessage: 'Введите сумму перевода',
        },
        {
          rule: 'customRegexp',
          value: /^\d+$/,
          errorMessage: 'Сумма должна содержать только цифры и не быть отрицательной',
        },
      ])
      .onSuccess(async () => {
        const formData = new FormData(form);
        const body = Object.fromEntries(formData);
  
        try {
          const response = await fetch(`${API_URL}/currency-buy`, {
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
              form.to.textContent = '';
              form.reset();
              updateCurrencyTableBody();
            } else {
              renderError(data.error, 'exchange');
            }
          } else {
            const { message = 'Неизвестная ошибка' } = await response.json();
            console.log(message);
            throw new Error(message);
          }
        } catch (error) {
          console.error(error.message);
        }
      });
  }
};
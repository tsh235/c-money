import JustValidate from "just-validate";
import { API_URL, token } from "../../index.js";
import { updateHistoryTable } from "../utils/updateHistoryTable.js";
import { renderError } from "../render/renderError.js";

export const transactionControl = (acc, form) => {
  const validateForm = new JustValidate(form, {
    errorLabelStyle: {
      color: '#D11616',
      fontSize: '14px',
    },
  });
  
  validateForm
    .addField(form.to, [
      {
        rule: 'required',
        errorMessage: 'Введите счет для перевода средств',
      },
      {
        rule: 'customRegexp',
        value: /[0-9]/g,
        errorMessage: 'Счет должен содержать только цифры',
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
      const credentails = {
        from: acc,
        to: form.to.value,
        amount: form.amount.value,
      };

      try {
        const response = await fetch(`${API_URL}/transfer-funds`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Basic ${token}`
          },
          body: JSON.stringify(credentails),
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





      // transferFunds(form, credentails);
    });
};
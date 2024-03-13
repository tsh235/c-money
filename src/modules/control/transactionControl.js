import JustValidate from "just-validate";
import { transferFunds } from "../utils/transferFunds.js";

export const transactionControl = (acc, form) => {
  const to = form.to;
  const summ = form.amount;
  
  const validateForm = new JustValidate(form, {
    errorLabelStyle: {
      color: '#D11616',
      fontSize: '14px',
    },
  });
  
  validateForm
    .addField(to, [
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
    .addField(summ, [
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
    .onSuccess(() => {
      const credentails = {
        from: acc,
        to: to.value,
        amount: summ.value,
      };
      transferFunds(form, credentails);
    });
};
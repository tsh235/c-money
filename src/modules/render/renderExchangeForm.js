import { exchangeFormControl } from '../control/exchangeFormControl.js';
import { getData } from '../utils/getData.js';

export const renderExchangeForm = async () => {
  const data = await getData('all-currencies');

  const form = document.createElement('form');
  form.classList.add('Exchange_form__gPwQA');

  const inputsWrapper = document.createElement('div');
  inputsWrapper.classList.add('Exchange_inputs__wrapper__vShHt');

  const fromWrapper = document.createElement('div');
  fromWrapper.classList.add('Exchange_input-wrapper__XZjjI');
  fromWrapper.insertAdjacentHTML('afterbegin', `
    <label class="Exchange_label__8lbg3">Откуда</label>
  `);

  const fromSelect = document.createElement('select');
  fromSelect.classList.add('Exchange_input__jpL1I');
  fromSelect.name = 'from';
  fromSelect.value = '';
  fromSelect.insertAdjacentHTML('afterbegin', `
  <option></option>
  `)

  const optionsFrom = data.map(item => {
    const option = document.createElement('option');
    option.textContent = item;
    return option;
  });

  fromSelect.append(...optionsFrom);
  fromWrapper.append(fromSelect);

  const toWrapper = document.createElement('div');
  toWrapper.classList.add('Exchange_input-wrapper__XZjjI');
  toWrapper.insertAdjacentHTML('afterbegin', `
    <label class="Exchange_label__8lbg3">Куда</label>
  `);

  const toSelect = document.createElement('select');
  toSelect.classList.add('Exchange_input__jpL1I');
  toSelect.name = 'to';
  
  fromSelect.addEventListener('change', ({target}) => {
    const from = target.value;

    const optionsTo = data.map(item => {
      if (!from) {
        toSelect.textContent = '';
      } else {
        if (item !== from) {
          const option = document.createElement('option');
          option.textContent = item;
          return option;
        }
      }
    });
    
    toSelect.append(...optionsTo);
  })

  toWrapper.append(toSelect);
  
  const summWrapper = document.createElement('div');
  summWrapper.classList.add('Exchange_input-wrapper__XZjjI');
  summWrapper.insertAdjacentHTML('afterbegin', `
    <span class="Exchange_form__error__pV5i6"></span>
    <label class="Exchange_label__8lbg3">Сумма</label>
    <input class="Exchange_input__jpL1I" name="amount">
  `);
  
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('Exchange_button__VfyeB', 'button');
  submitBtn.textContent = 'Обменять';
  
  inputsWrapper.append(fromWrapper, toWrapper, summWrapper);
  form.append(inputsWrapper, submitBtn);

  await exchangeFormControl(form);

  return form;
};
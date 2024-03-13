import { main } from '../../index.js';
import { router } from '../utils/router.js';

export const renderAccountHeader = ({account}) => {
  const accountHeader = document.createElement('div');
  accountHeader.classList.add('Account_container__header__MABYz');

  const accountTitle = document.createElement('h2');
  accountTitle.classList.add('Account_title__oytHW');
  accountTitle.textContent = `Счет №${account}`;

  const backBtn = document.createElement('a');
  backBtn.classList.add('Account_button__3jGkT', 'button');
  backBtn.style.cursor = 'pointer';
  backBtn.insertAdjacentHTML('beforeend', `
    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.83 5.5L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.09L3.83 7.5L16 7.5V5.5L3.83 5.5Z" fill="white"></path>
    </svg>
    Вернуться
  `);

  backBtn.addEventListener('click', () => {
    main.textContent = '';
    router.navigate('/currencies');
  });

  accountHeader.append(accountTitle, backBtn);
  return accountHeader;
}
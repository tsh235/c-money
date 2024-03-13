import { router } from '../utils/router.js';
import { JWT_TOKEN_KEY, main } from '../../index.js';
import { preload } from './preload.js';

export const updateNav = (page) => {
  const nav = document.querySelector('.Header_nav__J8WFt');

  if (nav.childNodes.length > 0) {
    if (page === 'currencies') {
      nav.childNodes[0].classList.add('active');
      if (nav.childNodes[1].classList.contains('active')) {
        nav.childNodes[1].classList.remove('active');
      }
    } else {
      nav.childNodes[0].classList.remove('active');
      nav.childNodes[1].classList.add('active');
    }
  } else {
    const linkCurrencies = document.createElement('a');
    linkCurrencies.style.cursor = 'pointer';
    linkCurrencies.classList.add('active');
    linkCurrencies.textContent = 'Счета';
    
    const linkExchange = document.createElement('a');
    linkExchange.style.cursor = 'pointer';
    linkExchange.textContent = 'Обмен';
  
    const logoutBtn = document.createElement('button');
    logoutBtn.classList.add('Header_exit__QnsIX');
    logoutBtn.textContent = 'Выйти';
    logoutBtn.insertAdjacentHTML('beforeend', `
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="Header_arrow__UOjtE">
        <path d="M5.5675 9.6925L6.625 10.75L10.375 7L6.625 3.25L5.5675 4.3075L7.5025 6.25H0.25V7.75H7.5025L5.5675 9.6925ZM12.25 0.25H1.75C0.9175 0.25 0.25 0.925 0.25 1.75V4.75H1.75V1.75H12.25V12.25H1.75V9.25H0.25V12.25C0.25 13.075 0.9175 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V1.75C13.75 0.925 13.075 0.25 12.25 0.25Z" fill="white"></path>
      </svg>
    `);

    linkCurrencies.addEventListener('click', () => {
      main.textContent = '';
      router.navigate('/currencies');
    });
    
    linkExchange.addEventListener('click', () => {
      main.textContent = '';
      router.navigate('/exchange');
    });
  
    nav.append(linkCurrencies, linkExchange, logoutBtn);
  
    logoutBtn.addEventListener('click', () => {
      nav.remove();
      main.textContent = '';
      preload.append();
      setTimeout(() => {
        preload.remove();
        router.navigate('/');
        localStorage.removeItem(JWT_TOKEN_KEY);
      }, 2000);
    });
  
    return nav;
  }
};
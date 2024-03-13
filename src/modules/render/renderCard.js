import { router } from '../utils/router.js';
import { convertDate } from '../utils/convertDate.js';
import { main } from '../../index.js';

export const renderCard = (data) => {
  const dateTransaction = (data.transactions).length > 0 ? convertDate(data.transactions[0].date) : '-';
  const card = document.createElement('li');
  card.classList.add('Card_card__GMSLx');

  const cardLink = document.createElement('a');
  cardLink.style.cursor = 'pointer';
  cardLink.insertAdjacentHTML('beforeend', `
    <p class="Card_id__ocrqy">${data.account}</p>
    <p class="Card_balance__6XpLd">${(data.balance).toLocaleString()}</p>
    <div class="Card_info__dEaPs">
      <div>
        <p>открыт</p>
        <p>${convertDate(data.date)}</p>
      </div>
      <div>
        <p>последняя операция</p><time datetime="${dateTransaction}">${dateTransaction}</time>
      </div>
    </div>
  `);

  cardLink.addEventListener('click', () => {
    main.textContent = '';
    router.navigate(`account/${data.account}`);
  });

  card.append(cardLink);

  return card;
};

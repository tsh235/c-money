export const renderExchangeRow = (elem, {from, to, rate, change}) => {
  const row = document.createElement('div');
  row.classList.add('Exchange_tr_e__CgKO9');

  
  row.insertAdjacentHTML('beforeend', `
    <span class="Exchange_td__first__6MLbU">${from}/${to}</span>
    <span class="Exchange_td__second__7J+zh"></span>
  `);
    
  const spanRate = document.createElement('span');
  spanRate.classList.add('Exchange_td__third__WOTIX');

  let color;
  if (change === 1) {
    color = '#0EFF0A';
    spanRate.insertAdjacentHTML('beforeend', `
      ${rate}
      <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z" fill="${color}"></path>
      </svg>
    `)
  } else if (change === -1) {
    color = '#F10000';
    spanRate.insertAdjacentHTML('beforeend', `
      ${rate}
      <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 6.5L0.602886 0.5H8.39711L4.5 6.5Z" fill="${color}"></path>
      </svg>
    `)
  } else {
    spanRate.insertAdjacentHTML('beforeend', `
      ${rate}
    `);
  }

  row.append(spanRate);
  elem.prepend(row);
  if (elem.childNodes.length > 10) {
    elem.childNodes[10].remove();
  }
};
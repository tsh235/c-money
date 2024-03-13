import Chart from 'chart.js/auto';

export const generateChart = (accountNumber, year, data, elem) => {
  const monthsNames = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  if (data[year]) {
    const monthesObj = data[year].reduce((acc, curr) => {
      const month = (new Date(curr.date)).getMonth();
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(curr);
      return acc;
    }, {});
  
    const months = Object.keys(monthesObj);
    const incomeMonth = months.map(item => monthsNames[item].toLowerCase());
  
    let incomeAmount = [];
    months.forEach((key) => {
      const obj = monthesObj[key];
      let summ = 0;
      obj.forEach(item => {
        if (item.to === accountNumber) {
          summ += item.amount;
        }
      });
      incomeAmount.push(summ);
    });
  
    let expensesAmount = [];
    months.forEach((key) => {
      const obj = monthesObj[key];
      let summ = 0;
      obj.forEach(item => {
        if (item.from === accountNumber) {
          summ += item.amount;
        }
      });
      expensesAmount.push(summ);
    });
  
    const balanceAmount = incomeAmount.map((income, i) => income - expensesAmount[i]);
  
    let myChart;
  
    const clearChart = () => {
      elem.textContent = '';
    }
  
    const canvasChart = document.createElement('canvas');
    clearChart();
    elem.style.margin = '20px 0';
    elem.append(canvasChart);
  
    const ctx = canvasChart.getContext('2d');
  
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: incomeMonth,
        datasets: [
          {
            label: 'Доходы',
            data: incomeAmount,
            borderWidth: 1,
            hidden: false,
          },
          {
            label: 'Расходы',
            data: expensesAmount,
            borderWidth: 1,
            hidden: true,
          },
          {
            label: 'Баланс',
            data: balanceAmount,
            borderWidth: 2,
            hidden: true,
          },
        ],
      }
    });
  } else {
    const error = document.createElement('h3');
    error.style.cssText = `
      margin-top: 20px;
      color: red;
      text-align: center;
    `;
    error.textContent = 'Нет данных для отображения динамики';
    elem.append(error);
  }
};
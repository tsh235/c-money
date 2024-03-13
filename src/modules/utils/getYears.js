export const getYears = (data) => {
  const yearsObj = data.reduce((acc, curr) => {
    const year = curr.date.split('-')[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(curr);
    return acc;
  }, {});

  return yearsObj;
}
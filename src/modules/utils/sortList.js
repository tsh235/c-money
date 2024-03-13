export const sortList = (data, key) => {  
  let sortData = [];
  if (key === 'list') {
    key = 'transactions'
    sortData = data.sort((a, b) => {
      if(a[key].length > 0) {
        return a[key][0].date > b[key][0].date ? 1 : -1;
      }
    });
    
  } else {
    sortData = data.sort((a, b) => a[key] > b[key] ? 1 : -1);
  }

  return sortData;
};
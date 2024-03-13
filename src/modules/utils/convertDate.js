export const convertDate = (dateStr) => {
  const date = (new Date(dateStr)).toLocaleString('ru-ru', { timeZone: 'UTC' });
  return date.split(', ')[0];
}
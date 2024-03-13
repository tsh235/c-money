export const renderApp = () => {
  const app = document.querySelector('#root');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  app.textContent = '';
  app.append(header, main, footer);

  return {header, main, footer};
}
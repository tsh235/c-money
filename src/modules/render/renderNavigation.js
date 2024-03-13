export const renderNavigation = () => {
  const headerNav = document.querySelector('.Header_nav__J8WFt');
  if (headerNav) return headerNav;

  const nav = document.createElement('div');
  nav.classList.add('Header_nav__J8WFt');
  return nav;
};

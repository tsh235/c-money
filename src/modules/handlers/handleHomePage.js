import { router } from '../utils/router.js';
import { main, token } from "../../index.js";
import { renderAuth } from '../render/renderAuth.js';

export const handleHomePage = () => {
  if (!!token) {
    router.navigate('/currencies')
  } else {
    main.textContent = '';
    renderAuth();
  }
};
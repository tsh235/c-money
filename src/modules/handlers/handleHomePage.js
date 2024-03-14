import { router } from '../utils/router.js';
import { JWT_TOKEN_KEY, main} from "../../index.js";
import { renderAuth } from '../render/renderAuth.js';

export const handleHomePage = () => {
  const token = localStorage.getItem(JWT_TOKEN_KEY);
  if (!!token) {
    router.navigate('/currencies')
  } else {
    main.textContent = '';
    renderAuth();
  }
};
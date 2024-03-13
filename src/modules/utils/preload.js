import { main } from '../../index.js';

export const preload = {
  elem: document.createElement('div'),
  loader: `
    <div class="preloader">
      <div class="inner one"></div>
      <div class="inner two"></div>
      <div class="inner three"></div>
    </div>
  `,
  append() {
    main.style.display = 'flex';
    main.style.margin = 'auto';
    main.append(this.elem);
  },
  remove() {
    this.elem.remove();
    main.style.display = '';
    main.style.margin = '';
  },
  init() {
    this.elem.innerHTML = this.loader;
  }
};
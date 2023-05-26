import './pages/index.scss';

import AboutAnimation from './components/AboutAnimation';
import LooksAnimation from './components/LooksAnimation';
import Menu from './components/Menu';



// About section animation initialization
const aboutAnimation = new AboutAnimation();
aboutAnimation.start();


// Looks section animation initialization
const looksAnimation = new LooksAnimation('.looks__image-container', 'img');
looksAnimation.startAnimation();

// Menu initialization
const menu = new Menu('.header__button_menu', 'menu');
const headerButton = document.querySelector('.header__button_menu');

headerButton.addEventListener('click', (event) => {
  event.stopPropagation();
  menu.openMenu(event);
});
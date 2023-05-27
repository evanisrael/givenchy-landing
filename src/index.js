import './pages/index.scss';

import AboutAnimation from './components/AboutAnimation';
import LooksAnimation from './components/LooksAnimation';
import Menu from './components/Menu';



// About section animation initialization
const aboutAnimation = new AboutAnimation();
aboutAnimation.start();


// Looks section animation initialization
const looksAnimation = new LooksAnimation('.looks__image-container', '.looks__image');
looksAnimation.startAnimation();

// Menu initialization
const menu = new Menu('.header__button_menu', 'menu');
const headerButton = document.querySelector('.header__button_menu');

headerButton.addEventListener('click', (event) => {
  event.stopPropagation();
  menu.openMenu(event);
});


// Header Subscribe button behavior
const subscribeButton = document.querySelector('#subscribe');
const emailInput = document.querySelector('#email');

subscribeButton.addEventListener('click', () => {
  emailInput.scrollIntoView({ behavior: 'smooth' });
  emailInput.focus();
});


// Submit button behavior
const footerForm = document.querySelector('#form');

footerForm.addEventListener('submit', (evt) =>{
  evt.preventDefault();
});


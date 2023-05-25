import './pages/index.scss';

import AboutAnimation from './components/AboutAnimation';
import LooksAnimation from './components/LooksAnimation';



// About section animation initialization
const aboutAnimation = new AboutAnimation();
aboutAnimation.start();


// Looks section animation initialization
const looksAnimation = new LooksAnimation('.looks__image-container', 'img');
looksAnimation.startAnimation();

















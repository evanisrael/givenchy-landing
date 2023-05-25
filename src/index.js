import './pages/index.scss';

import AboutAnimation from './components/AboutAnimation';
import LooksAnimation from './components/LooksAnimation';



// About section animation initialization
const aboutAnimation = new AboutAnimation();
aboutAnimation.start();


// Looks section animation initialization
const looksAnimation = new LooksAnimation('.looks__image-container', 'img');
looksAnimation.startAnimation();



// const imageContainer = document.querySelector('.looks__image-container');
// const images = Array.from(imageContainer.getElementsByTagName('img'));
// const minDelay = 1000;
// const maxDelay = 1500;
// const maxImagesToChange = 3;

// function getRandomIndex(max) {
//   return Math.floor(Math.random() * max);
// }

// function toggleImages() {
//   const numImagesToChange = Math.min(getRandomIndex(maxImagesToChange) + 1, images.length);
//   const delay = getRandomIndex(maxDelay - minDelay) + minDelay;

//   const imageIndices = [];
//   while (imageIndices.length < numImagesToChange) {
//     const index = getRandomIndex(images.length);
//     if (!imageIndices.includes(index)) {
//       imageIndices.push(index);
//     }
//   }

//   images.forEach((image, index) => {
//     if (imageIndices.includes(index)) {
//       image.classList.add('show');
//     } else {
//       image.classList.remove('show');
//     }
//   });

//   setTimeout(toggleImages, delay);
// }

// toggleImages();

















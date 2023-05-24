import './pages/index.scss';



// About section animation



function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  return rect.top <= windowHeight && rect.bottom >= 0;
}

function animateElement(element, className) {
  element.classList.add(className);
}

function removeAnimationClass(element, className) {
  element.classList.remove(className);
}

function handleScrollAnimation() {

  const firstImage = document.getElementById('about-img1');
  const secondImage = document.getElementById('about-img2');
  const thirdImage = document.getElementById('about-img3');
  const firstText = document.getElementById('about-text1');
  const secondText = document.getElementById('about-text2');
  const thirdText = document.getElementById('about-text3');

  if (isElementVisible(firstImage)) {
    animateElement(firstImage, 'about__animation_first');
  } else {
    removeAnimationClass(firstImage, 'about__animation_first');
  }

  if (isElementVisible(secondImage)) {
    animateElement(secondImage, 'about__animation_second');
  } else {
    removeAnimationClass(secondImage, 'about__animation_second');
  }

  if (isElementVisible(thirdImage)) {
    animateElement(thirdImage, 'about__animation_third');
  } else {
    removeAnimationClass(thirdImage, 'about__animation_third');
  }

  if (isElementVisible(firstText)) {
    animateElement(firstText, 'about__animation_first');
  } else {
    removeAnimationClass(firstText, 'about__animation_first');
  }

  if (isElementVisible(secondText)) {
    animateElement(secondText, 'about__animation_second');
  } else {
    removeAnimationClass(secondText, 'about__animation_second');
  }

  if (isElementVisible(thirdText)) {
    animateElement(thirdText, 'about__animation_third');
  } else {
    removeAnimationClass(thirdText, 'about__animation_third');
  }
}


window.addEventListener('scroll', handleScrollAnimation);






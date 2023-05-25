class AboutAnimation {
  constructor() {
    this.animationClass = 'about__animation';
    this.elements = [
      {
        id: 'about-img1',
        initialTranslateX: 0,
        visibleTranslateX: -175
      },
      {
        id: 'about-img2',
        initialTranslateX: -175,
        visibleTranslateX: 0
      },
      {
        id: 'about-img3',
        initialTranslateX: 175,
        visibleTranslateX: 0
      },
      {
        id: 'about-text1',
        initialTranslateX: -175,
        visibleTranslateX: 0
      },
      {
        id: 'about-text2',
        initialTranslateX: 175,
        visibleTranslateX: 0
      },
      {
        id: 'about-text3',
        initialTranslateX: -175,
        visibleTranslateX: 0
      }
    ];
  }

  // Check if the element is on the screen
  _isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    return rect.top <= windowHeight && rect.bottom >= 0;
  }

  _addAnimationClass(element) {
    element.classList.add(this.animationClass);
  }

  _removeAnimationClass(element) {
    element.classList.remove(this.animationClass);
  }

  _handleAboutAnimation() {
    this.elements.forEach((elementData) => {
      const element = document.getElementById(elementData.id);
      const visibleTranslateX = elementData.visibleTranslateX;
      const initialTranslateX = elementData.initialTranslateX;

      if (this._isElementVisible(element)) {
        this._addAnimationClass(element);
        element.style.transform = `translateX(${visibleTranslateX}px)`;
      } else {
        this._removeAnimationClass(element);
        element.style.transform = `translateX(${initialTranslateX}px)`;
      }
    });
  }

  start() {
    window.addEventListener('scroll', this._handleAboutAnimation.bind(this));
  }
}

export default AboutAnimation
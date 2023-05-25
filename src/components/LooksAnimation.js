class LooksAnimation {
  constructor(containerSelector, imageSelector) {
    this.container = document.querySelector(containerSelector);
    this.images = Array.from(this.container.querySelectorAll(imageSelector));
    this.minDelay = 1000;
    this.maxDelay = 1500;
    this.maxImagesToChange = 3;
  }

  _getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  _toggleImages() {
    const numImagesToChange = Math.min(
      this._getRandomIndex(this.maxImagesToChange) + 1,
      this.images.length
    );
    const delay = this._getRandomIndex(this.maxDelay - this.minDelay) + this.minDelay;

    const imageIndices = [];
    while (imageIndices.length < numImagesToChange) {
      const index = this._getRandomIndex(this.images.length);
      if (!imageIndices.includes(index)) {
        imageIndices.push(index);
      }
    }

    this.images.forEach((image, index) => {
      if (imageIndices.includes(index)) {
        image.classList.add('show');
      } else {
        image.classList.remove('show');
      }
    });

    setTimeout(this._toggleImages.bind(this), delay);
  }

  startAnimation() {
    this._toggleImages();
  }
}


export default LooksAnimation;
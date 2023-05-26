export default class Menu {
  constructor(headerButtonSelector, menuTemplateId) {
    this.headerButton = document.querySelector(headerButtonSelector);
    this.menuTemplate = document.getElementById(menuTemplateId);
    this.menuContainer = null;
    this.menuButton = null;

    this.openMenu = this.openMenu.bind(this);
    this._closeMenu = this._closeMenu.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);

    this.headerButton.addEventListener('click', this.openMenu);
  }

  openMenu(event) {
    event.stopPropagation();

    if (!this.menuContainer) {
      this.menuContainer = this.menuTemplate.content.cloneNode(true).firstElementChild;
      this.headerButton.parentNode.insertBefore(this.menuContainer, this.headerButton);
      this.menuButton = this.menuContainer.querySelector('.menu__button');
      this.menuButton.addEventListener('click', this._closeMenu);
    }

    this.menuContainer.style.display = 'block';
    document.addEventListener('click', this._handleOutsideClick);
  }

  _closeMenu() {
    if (this.menuContainer) {
      document.removeEventListener('click', this._handleOutsideClick);
      this.menuContainer.parentNode.removeChild(this.menuContainer);
      this.menuContainer = null;
      this.menuButton = null;
    }
  }

  _handleOutsideClick(event) {
    const isOutsideMenu = !event.target.closest('.menu__container');
    if (isOutsideMenu) {
      this._closeMenu();
    }
  }
}

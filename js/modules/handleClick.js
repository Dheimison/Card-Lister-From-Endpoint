class handleClick {
  constructor() {
    this.btnFilter = document.querySelector('.filter');
    this.btnClose = document.querySelector('.close');
    this.navBar = document.querySelector('main > nav');
    this.dropdownBtn = document.querySelector('main > nav > a');
    this.listHost = document.querySelector('main > nav > ul');
  }

  filterClick() {
    this.btnFilter.addEventListener('click', () => {
      this.btnFilter.classList.add('dropDown');
      this.btnFilter.setAttribute('disabled', '');
      this.btnClose.classList.add('active');
      this.navBar.classList.add('active');
    })
  }

  dropdownClick() {
    this.dropdownBtn.addEventListener('click', () => {
      this.dropdownBtn.classList.toggle('clicked');
      this.listHost.classList.toggle('active');
    })
  }

  closeClick() {
    this.btnClose.addEventListener('click', () => {
      this.btnFilter.classList.remove('dropDown');
      this.btnFilter.removeAttribute('disabled', '');
      this.btnClose.classList.remove('active');
      this.navBar.classList.remove('active');
    })
  }

  init() {
    this.filterClick();
    this.dropdownClick();
    this.closeClick();
  }
}

export default new handleClick();
class handleClick {
  constructor() {
    this.btnFilter = document.querySelector('.filter');
    this.btnClose = document.querySelector('.close');
    this.navBar = document.querySelector('main > nav');
    this.dropdownBtn = document.querySelector('main > nav > a');
    this.listHost = document.querySelector('main > nav > ul');
    this.eventList = ['click', 'touchend'];
  }

  filterClick() {
    this.eventList.forEach((oneEvent) => {
      this.btnFilter.addEventListener(oneEvent, () => {
        this.btnFilter.classList.add('dropDown');
        this.btnFilter.setAttribute('disabled', '');
        this.btnClose.classList.add('active');
        this.navBar.classList.add('active');
      })
    })
  }

  dropdownClick() {
    this.eventList.forEach((oneEvent) => {
      this.dropdownBtn.addEventListener(oneEvent, () => {
        event.preventDefault();
        this.dropdownBtn.classList.toggle('clicked');
        this.listHost.classList.toggle('active');
      })
    })
  }

  closeClick() {
    this.eventList.forEach((oneEvent) => {
      this.btnClose.addEventListener(oneEvent, () => {
        this.btnFilter.classList.remove('dropDown');
        this.btnFilter.removeAttribute('disabled', '');
        this.btnClose.classList.remove('active');
        this.navBar.classList.remove('active');
      })
    })
  }

  init() {
    this.filterClick();
    this.dropdownClick();
    this.closeClick();
  }
}

export default new handleClick();
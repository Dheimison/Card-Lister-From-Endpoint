class handleClick {
  constructor() {
    this.btnFilter = document.querySelector('.filter');
    this.btnClose = document.querySelector('.close');
    this.navBar = document.querySelector('main > nav');
    this.dropdownBtn = document.querySelector('main > nav > a');
    this.listHost = document.querySelector('main > nav > ul');
    this.eventList = ['click', 'touchstart'];
  }

  filterClick() {
    this.eventList.forEach((oneEvent) => {
      this.btnFilter.addEventListener(oneEvent, () => {
        event.preventDefault();
        this.btnFilter.classList.add('dropDown');
        this.btnFilter.setAttribute('disabled', '');
        this.btnClose.classList.add('active');
        this.btnClose.setAttribute('disabled', '');
        this.navBar.classList.add('active');
        this.btnClose.removeAttribute('disabled', '')
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
        event.preventDefault();
        this.btnFilter.classList.remove('dropDown');
        this.btnClose.classList.remove('active');
        this.navBar.classList.remove('active');
        this.btnFilter.removeAttribute('disabled', '');          
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
import renderCard from './renderCard.js';

class domainFilter {
  constructor() {
    this.container = document.querySelector('main > ul');
    this.inputs = document.querySelectorAll('main > nav > ul > li > input');
    this.domainArray = [];
  };

  addOnArray() {
    this.inputs.forEach(input => {

      input.addEventListener('change', () => {

        if (input.checked) {

          this.domainArray.push(input.value);
          return this.filterEmail();

        } else if (input.checked === false) {

          if (this.domainArray.find(item => item === input.value)) {

            this.domainArray.splice(this.domainArray.indexOf(input.value), 1);

            return this.filterEmail();
          }
        }

      })
    });
  };

  filterEmail() {
    if (this.domainArray.length === 0) {
      renderCard.removeCard();
      renderCard.init();
    };

    this.userArray = [];

    this.domainArray.forEach((host) => {

      this.regex = new RegExp("\\" + host + "$", "gi")

      renderCard.userData.forEach((user) => {

        if (user.email.search(this.regex) > 0) {
          renderCard.removeCard();
          this.userArray.push(user);
          renderCard.render(this.userArray);
        };
      })
    })

  };

  async init() {
    // await renderCard.data();
    this.addOnArray();
  };
};

export default new domainFilter();
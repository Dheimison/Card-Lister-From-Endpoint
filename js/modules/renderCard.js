class renderCard {
  constructor() {
    this.url = 'http://jsonplaceholder.typicode.com/users';
    this.container = document.querySelector('main > ul');
  }

  async data() {
    this.userData = await (await fetch(this.url)).json();
  }

  render(userArray) {
    userArray.forEach(user => {
      this.filho = document.createElement('li');
      this.filho.innerHTML = `
      <img src="./img/UserIcon.svg" alt="Icone de usuário">
      <h3>${user.name}</h3>
      <p>Username: ${user.username}</p>
      <p>${user.email}</p>
      <p>Telefone: ${user.phone}</p>
      <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <div class="address">
        <h3>Endereço</h3>
        <p>Rua: ${user.address.street}</p>
        <p>Apt: ${user.address.suite}</p>
        <p>Cidade: ${user.address.city}</p>
        <p>Zipcode: ${user.address.zipcode}</p>
      </div>
      `;
      return this.container.append(this.filho);
    })
  }

  removeCard() {
    while (this.container.firstElementChild) {
      this.container.removeChild(this.container.firstElementChild);
    }
  }

  async init() {
    await this.data();
    this.render(this.userData);
  }
}

export default new renderCard();
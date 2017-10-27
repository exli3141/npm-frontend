class World {
  constructor(mes) {
    this.message = mes.join('');
  }
}

export default new World(message);
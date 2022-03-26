import Character from './character';

export default class MathClass extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = undefined;
    this.distance = undefined;
    this.stoned = false;
  }

  get attack() {
    let result = this._attack * (1 - (this.distance - 1) / 10);
    if (this._stoned) {
      result -= Math.log2(this._distance) * 5;
    }
    return result;
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  }
}

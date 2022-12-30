/* eslint no-underscore-dangle: 0 */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  tostring() {
    return `[Object ${this.code}]`;
  }
}

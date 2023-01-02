/* eslint no-underscore-dangle: 0 */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._color = color;
    this._motor = motor;
  }

  cloneCar() {
    const NewCar = this.constructor || [Symbol.species];
    return new NewCar();
  }
}

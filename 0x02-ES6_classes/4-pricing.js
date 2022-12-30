/* eslint no-underscore-dangle: 0 */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw TypeError('amount should be a number');
    }
    this.amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value !== Currency) {
      throw TypeError('currency should be a Currency object');
    }
    this.currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

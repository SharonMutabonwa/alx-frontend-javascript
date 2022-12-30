/* eslint no-underscore-dangle: 0 */
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('You cannot create an instance of an abstract class');
    }
  }

  get sqft() {
    return this._sqft;
  }
}

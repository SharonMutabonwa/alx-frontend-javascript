/* eslint no-underscore-dangle: 0 */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('You cannot create an instance of an abstract class');
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

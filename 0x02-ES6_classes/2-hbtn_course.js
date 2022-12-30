/* eslint no-underscore-dangle: 0 */
export default class HolbertonCourse {
  constructor(name, length, student) {
    this._name = name;
    this._length = length;
    this._student = student;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (!(typeof newName === 'string')) {
      throw TypeError('Name must be a string');
    }

    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (!(typeof newLength === 'number')) {
      throw TypeError('Length must be a number');
    }

    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw TypeError('Students must be an array of strings');
    }

    if (!(newStudents.every((val) => typeof val === 'string'))) {
      throw TypeError('Students must be an array of strings');
    }

    this._students = newStudents;
  }
}

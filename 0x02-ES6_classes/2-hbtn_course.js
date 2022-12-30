/* eslint no-underscore-dangle: 0 */

export default class HolbertonCourse {
  constructor(name, length, student) {
    this.name = name;
    this.length = length;
    this.student = student;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      for (const student of students) {
        if (typeof student !== 'string') {
          throw TypeError('student must be a string');
        }
      }
      this._students = students;
    } else {
      throw TypeError('Students must be an array');
    }
  }
}

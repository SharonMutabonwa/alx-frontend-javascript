/* eslint no-underscore-dangle: 0 */

export default class HolbertonCourse {
  constructor(name, length, student) {
    this._name = name;
    this._length = length;
    this._student = student;
  }
}
get name() {
  return this._name;
}

set name(name) {
  if (typeof name !== 'string') throw TypeError('Name must be a string');
  this._name = name;
}
get length() {
  return this._length;
}

set length(length) {
  if (typeof length !== 'number') throw TypeError('Length must be a number');
  this._length = length;
}

get students() {
  return this._students;
}

set students(students) {
  if (
    !Array.isArray(students)
    || students.every((student) => typeof student !== 'string')
  ) throw TypeError('Students must be an array of strings');

  this._students = students;
}

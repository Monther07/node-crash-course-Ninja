// how to import and export
const {people, age} = require('./people');

console.log(people, age);
//console.log(people)
//----------------------//
const os = require('os');
//console.log(os);
console.log(os.platform(), os.homedir());
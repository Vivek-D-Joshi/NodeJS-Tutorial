const name = require('./nameModule');
const sayHi = require('./sayHiModule');

require('./functionModule')

console.log(sayHi(name.john));

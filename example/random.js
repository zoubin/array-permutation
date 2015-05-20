var random = require('..').random;

console.log(random(5));                 // [ 3, 2, 4, 1, 0  ]
console.log(random(2, 5));              // [ 4, 3, 2  ]
console.log(random(1, 5, 2));           // [ 3, 1  ]
console.log(random([1, 2, 3, 4, 5]));   // [ 4, 5, 3, 1, 2  ]

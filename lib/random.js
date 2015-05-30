var fromInversions = require('./fromInversions.js');
var range = require('./range.js');

module.exports = random;

function random(low, high) {
    if (Array.isArray(low)) {
        return randomA(low);
    }
    return randomN.apply(null, arguments);
}

// produce an array of numbers which falls in [low, high)
function randomN() {
    var input = range.apply(null, arguments);
    return randomA(input);
}

function randomA(input) {
    var n = input.length;
    if (!n) {
        return [];
    }
    var inversions = randomInversions(input.length);
    return fromInversions(inversions).map(function (i) {
        return input[i];
    });
}

function randomInversions(n) {
    var inversions = [];
    // n is the length of Number Array
    // inversions of 0 falls in [0, n-1]
    // inversions of 1 falls in [0, n-2]
    // ...
    // inversions of n-2 falls in [0, 1]
    // inversions of n-1 falls in [0], which means ZERO is the only possible value.
    while (n > 1) {
        inversions.push(Math.floor(n * Math.random()));
        n--;
    }
    inversions.push(0);
    return inversions;
}


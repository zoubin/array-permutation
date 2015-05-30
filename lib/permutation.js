var fromInversions = require('./fromInversions.js');
var inversions = require('./inversions.js');
var range = require('./range.js');

module.exports = permutation;
module.exports._permutation = _permutation;

function permutation(input) {
    if (Array.isArray(input)) {
        return permutationA(input);
    }
    return permutationN.apply(null, arguments);
}

function * permutationN() {
    var input = range.apply(null, arguments);
    yield * permutationA(input);
}

function _permutation() {
    var iter = permutation.apply(null, arguments);
    var output = [];
    for (var perm of iter) {
        output.push(perm);
    }
    return output;
}

function * permutationA(input) {
    var n = input.length;
    if (n < 2) {
        return input;
    }
    for (var i of inversions(n)) {
        yield fromInversions(i).map(function (i) {
            return input[i];
        });
    }
}


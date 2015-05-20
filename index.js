module.exports = permutation;
module.exports._permutation = _permutation;
module.exports.range = range;
module.exports.random = random;
module.exports.randomN = randomN;
module.exports.randomA = randomA;
module.exports.permutationN = permutationN;
module.exports.permutationA = permutationA;
module.exports.fromInversions = fromInversions;

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
    var inversions = input.map(function (v, k) {
        return k ? 0 : -1;
    });
    var done;
    while (!(done = nextInversions(inversions, 0, n))) {
        yield fromInversions(inversions).map(function (i) {
            return input[i];
        });
    }
}

function fromInversions(inversions) {
    var ret = [];
    var n = inversions.length;
    inversions.forEach(function (i, k) {
        var t = 0;
        for (var j = 0; j <= n; j++) {
            if (ret[j] == null && ++t === i + 1) {
                ret[j] = k;
                return;
            }
        }
    });
    return ret;
}

function nextInversions(inversions, i, n) {
    if (i >= n - 1) {
        // the end
        return true;
    }
    inversions[i] = inversions[i] || 0;
    if (inversions[i] < n - i - 1) {
        inversions[i]++;
        return false;
    } else {
        inversions[i] = 0;
        return nextInversions(inversions, i + 1, n);
    }
}

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

function range(low, high, step) {
    if (arguments.length === 1) {
        high = low;
        low = 0;
    }
    low = +low || 0;
    high = +high || 0;
    step = +step || 1;
    var ret = [];
    var inc = step > 0;
    while (true) {
        if (inc && low >= high) {
            break;
        }
        if (!inc && low <= high) {
            break;
        }
        ret.push(low);
        low = low + step;
    }
    return ret;
}

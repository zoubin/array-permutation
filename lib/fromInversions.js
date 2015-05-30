module.exports = fromInversions;

// build a permutation from their inversions
function fromInversions(inversions) {
    var ret = [];
    var n = inversions.length;
    inversions.forEach(function (i, k) {
        // the inversions of number `k` is `i`
        // `k` should be put at the position before which there are exactly `i` available positions for numbers greater than `k`
        // because any number less than `k` has no affect on the inversions of `k`
        // so we need displace these numbers from low to high,
        // to make sure all available positions detected currently are only preserved for numbers greater than `k`
        var t = 0;
        for (var j = 0; j < n; j++) {
            if (ret[j] == null && ++t === i + 1) {
                ret[j] = k;
                return;
            }
        }
    });
    return ret;
}


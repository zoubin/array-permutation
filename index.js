
exports.fromInversions = fromInversions;

function fromInversions(inversions) {
    var positions = posFromInversions(inversions);
    var ret = [];
    positions.forEach(function (pos, v) {
        ret[pos] = v;
    });
    return ret;
}

function posFromInversions(inversions) {
    var positions = [];
    for (var i = 0, n = inversions.length; i < n; i++) {
        var pos = inversions[i];
        for (var j = 0; j < i; j++) {
            if (pos >= positions[j]) {
                pos++;
            }
        }
        positions[i] = pos;
    }
    return positions;
}

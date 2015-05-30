
module.exports = inversions;

// from [0,0,...,0] to [n-1,n-2,...,0]

function * inversions(n) {
    var inversions = [];
    for (var i = 0; i < n; i++) {
        inversions.push(0);
    }
    do {
        yield inversions;
    } while(addOne(inversions, n));
}

function addOne(inversions, n) {
    var i = 0;
    while (i < n - 1) {
        // the current level is cool
        if (inversions[i] < n - i - 1) {
            inversions[i]++;
            return true;
        }
        // now we have to go to the next level
        // until we reach the last level,
        // which means failing to add 1
        // i.e. number `n-1` can not have any inversions
        inversions[i] = 0;
        i++;
    }
    return false;
}

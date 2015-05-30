var random = require('./random.js');

module.exports = shuffle;

function shuffle(arr) {
    var ret = random(arr.length)
        .map(function (i) {
            return arr[i];
        });
    arr.forEach(function (v, i) {
        arr[i] = ret[i];
    });
    return ret;
}

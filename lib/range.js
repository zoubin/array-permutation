module.exports = range;
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

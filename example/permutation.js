var perm = require('..');
var iter = perm([1, 2, 3, 4]);
for (var p of iter) {
    console.log(p);
}

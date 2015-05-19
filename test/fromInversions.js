var test = require('tape');
var perm = require('..');

test('fromInversions', function (t) {
    t.same(perm.fromInversions([5,3,4,0,2,1,1,0]), [4,8,6,2,5,1,3,7]);
    t.end();
});

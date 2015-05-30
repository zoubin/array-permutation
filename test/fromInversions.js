var test = require('tape');
var fromInversions = require('../lib/fromInversions.js');

test('fromInversions', function (t) {
    t.same(fromInversions([0]), [0]);
    t.same(fromInversions([0,0]), [0,1]);
    t.same(fromInversions([1,0]), [1,0]);
    t.same(fromInversions([0,0,0]), [0,1,2]);
    t.same(fromInversions([0,1,0]), [0,2,1]);
    t.same(fromInversions([1,0,0]), [1,0,2]);
    t.same(fromInversions([2,0,0]), [1,2,0]);
    t.same(fromInversions([2,1,0]), [2,1,0]);
    t.same(fromInversions([1,1,0]), [2,0,1]);
    t.same(fromInversions([5,3,4,0,2,1,1,0]), [4,8,6,2,5,1,3,7].map(function (v) { return v - 1; }));
    t.end();
});

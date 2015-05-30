var test = require('tape');
var perm = require('..');
var _perm = perm._permutation;

var results = [ [ 0, 1, 2  ], [ 1, 0, 2  ], [ 1, 2, 0  ], [ 0, 2, 1  ], [ 2, 0, 1  ], [ 2, 1, 0  ]  ];
test('permutation(n)', function (t) {
    var actual = [];
    for (var i of perm(3)) {
        actual.push(i);
    }
    t.same(actual, results);
    t.end();
});

test('permutation([])', function (t) {
    var actual = [];
    for (var i of perm([0,1,2])) {
        actual.push(i);
    }
    t.same(actual, results);
    t.end();
});

test('_permutation(n)', function (t) {
    t.same(_perm(3), results);
    t.end();
});

test('_permutation([])', function (t) {
    t.same(_perm([0,1,2]), results);
    t.end();
});

var test = require('tape');
var random = require('..').random;

var results = [ [ 0, 1, 2  ], [ 1, 0, 2  ], [ 1, 2, 0  ], [ 0, 2, 1  ], [ 2, 0, 1  ], [ 2, 1, 0  ]  ];
test('random(n)', function (t) {
    var i = 0;
    while (i++ < 10) {
        t.same(indexOf(results, random(3)) === -1, false);
    }
    t.end();
});

test('random([])', function (t) {
    var i = 0;
    while (i++ < 10) {
        t.same(indexOf(results, random([0,1,2])) === -1, false);
    }
    t.end();
});

function same(a, b) {
    for (var i = 0, len = a.length; i < len; ++i) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

function indexOf(a, b) {
    for (var i = 0, len = a.length; i < len; ++i) {
        if (same(a[i], b)) {
            return i;
        }
    }
    return -1;
}

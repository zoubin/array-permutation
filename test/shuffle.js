var test = require('tape');
var shuffle = require('..').shuffle;

var results = [ [ 0, 1, 2  ], [ 1, 0, 2  ], [ 1, 2, 0  ], [ 0, 2, 1  ], [ 2, 0, 1  ], [ 2, 1, 0  ]  ];

test('shuffle([])', function (t) {
    var arr = [0,1,2];
    var i = 0;
    while (i++ < 10) {
        shuffle(arr);
        t.same(indexOf(results, arr) === -1, false);
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


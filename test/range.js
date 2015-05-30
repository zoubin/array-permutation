var test = require('tape');
var range = require('..').range;

test('range(n)', function (t) {
    t.same(
        range(3),
        [0,1,2]
    );
    t.end();
});

test('range(low, high)', function (t) {
    t.same(
        range(0, 3),
        [0,1,2]
    );
    t.end();
});

test('range(low, high, step)', function (t) {
    t.same(
        range(0, 6, 2),
        [0,2,4]
    );
    t.same(
        range(6, 0, -2),
        [6,4,2]
    );
    t.end();
});

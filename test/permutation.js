var test = require('tape');
var perm = require('..')._permutation;

test('permutation', function (t) {
    t.same(perm(3), [ [ 0, 1, 2  ], [ 1, 0, 2  ], [ 1, 2, 0  ], [ 0, 2, 1  ], [ 2, 0, 1  ], [ 2, 1, 0  ]  ]);
    t.end();
});

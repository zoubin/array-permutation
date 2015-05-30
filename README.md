# array-permutation
permutation utils. Return `Iterable` for iterating all permutations of an array.

## Usage

```javascript
var permutation = require('array-permutation');
var range = permutation.range;
var random = permutation.random;
var shuffle = permutation.shuffle;
```
### range(n)

Return [0,..,n-1]

### range(low, high, step)

Return [low, low + step, low + 2 * step,..., low + k * step], with `low + k * step < high`

### random(n)

Return an array populated with a random permutation of `range(n)`

### random(low, high, step)

Return an array populated with a random permutation of `range(low, high, step)`

### permutation(n)

Return an iterable, for iterating all permutations of `range(n)`

### permutation(low, high, step)

Return an iterable, for iterating all permutations of `range(low, high, step)`

### permutation([])

Return an iterable, for iterating all permutations of the given array.

### shuffle([])

Shuffle the given array, and return it.

## Example

### permutation

```javascript
var perm = require('..');
var iter = perm([1, 2, 3, 4]);
for (var p of iter) {
    console.log(p);
}

```

output:

```
⌘ node example/permutation.js
[ 1, 2, 3, 4 ]
[ 2, 1, 3, 4 ]
[ 2, 3, 1, 4 ]
[ 2, 3, 4, 1 ]
[ 1, 3, 2, 4 ]
[ 3, 1, 2, 4 ]
[ 3, 2, 1, 4 ]
[ 3, 2, 4, 1 ]
[ 1, 3, 4, 2 ]
[ 3, 1, 4, 2 ]
[ 3, 4, 1, 2 ]
[ 3, 4, 2, 1 ]
[ 1, 2, 4, 3 ]
[ 2, 1, 4, 3 ]
[ 2, 4, 1, 3 ]
[ 2, 4, 3, 1 ]
[ 1, 4, 2, 3 ]
[ 4, 1, 2, 3 ]
[ 4, 2, 1, 3 ]
[ 4, 2, 3, 1 ]
[ 1, 4, 3, 2 ]
[ 4, 1, 3, 2 ]
[ 4, 3, 1, 2 ]
[ 4, 3, 2, 1 ]
```

### random

```javascript
var random = require('..').random;

console.log(random(5));                 // [ 3, 2, 4, 1, 0  ]
console.log(random(2, 5));              // [ 4, 3, 2  ]
console.log(random(1, 5, 2));           // [ 3, 1  ]
console.log(random([1, 2, 3, 4, 5]));   // [ 4, 5, 3, 1, 2  ]
```

output:

```
⌘ node example/random.js
[ 4, 0, 1, 2, 3 ]
[ 4, 2, 3 ]
[ 3, 1 ]
[ 3, 4, 1, 5, 2 ]
```

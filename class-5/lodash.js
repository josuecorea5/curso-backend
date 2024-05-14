var _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6];
const mixOfValues = [1, false, "", 3, 2, []];

const result = _.chunk(arr, 2);
const resultCompact = _.compact(mixOfValues);

console.log(result);
console.log(resultCompact);

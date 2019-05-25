// new Arr, len
const len = 5;
let x = new Array(len);

// loop
for (let i = 0; i < x.length; i++) {
  // each, new Arr
  x[i] = new Array(len).fill(false);
}

console.log(x);

// array.fill.map
// callback func
// array.fill.map
const matrix = new Array(len).fill(false).map(() => new Array(len).fill(false));

//console.log(matrix);
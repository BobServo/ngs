// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


const circle = {
  label: 'circleX',
  radius: 2,
};

<<<<<<< HEAD
const circleArea = ({ radius }, { precsion = 2}) =>
  (PI * radius * radius).toFixed(precsion);

console.log(
  circleArea(circle, {})
=======
const circleArea = ({ radius }, {precision} = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  cfircleArea(circle, {precision: 5})
>>>>>>> 2d5260f60485a2efc7699f634725d101e61f0381
);

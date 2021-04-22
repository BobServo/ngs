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

const circleArea = ({ radius }, {precision} = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  cfircleArea(circle, {precision: 5})
);

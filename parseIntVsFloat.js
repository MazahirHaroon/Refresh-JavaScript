'use strict';

function parse(r) {
  return {
    int: parseInt(r),
    float: parseFloat(r),
    intWithRadix: parseInt(r, 10),
  };
}

console.log(parse('12px'));
console.log(parse('4.567'));
console.log(parse('42'));
console.log(parse('8'));
console.log(parse('0o10'));
console.log(parse('0x16'));
console.log(parse('4.567abcdefgh'));
console.log(parse('abcdefgh'));

/* 
Results

{int: 4, float: 4.567, intWithRadix: 4, floatWithRadix: 4.567}
{int: 42, float: 42, intWithRadix: 42, floatWithRadix: 42}
{int: 8, float: 8, intWithRadix: 8, floatWithRadix: 8}
{int: 0, float: 0, intWithRadix: 0, floatWithRadix: 0}
{int: 22, float: 0, intWithRadix: 0, floatWithRadix: 0}
{int: 4, float: 4.567, intWithRadix: 4, floatWithRadix: 4.567}
{int: NaN, float: NaN, intWithRadix: NaN, floatWithRadix: NaN}

*/

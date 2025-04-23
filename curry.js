// const multiply = (x, y) => x * y;

// const multiplyByTwo = multiply.bind(this, 2);

// console.log(multiplyByTwo(3));

const multiply = (x) => {
  return (y) => x * y;
};

const square = multiply(2);
console.log(square(3));

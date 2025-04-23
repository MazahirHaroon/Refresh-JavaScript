'use strict';

const parentObject = {
  j: 1,
  k: 1,
  obj: {
    a: 10,
    x() {
      console.log(this);
    },
  },
};
parentObject.obj.x();
const y = parentObject.obj.x;
y.call(parentObject);

// const obj = {
//   a: 10,
//   x() {
//     console.log(this);
//   },
// };

// const parentObject = {
//   parentA: 11,
//   childObject: obj,
// };
// obj.x();
// parentObject.childObject.x();
// }
// main();

// const obj = {
//   a: 10,
//   x() {
//     const b = 10;
//     // const y = () => {
//     //   const c = 10;
//     //   console.log(this);
//     // };
//     function y() {
//       const c = 10;
//       console.log(this);
//     }
//     y.call(this);
//   },
// };

// const obj2 = {
//   a: 12,
// };

// obj.x();
// obj.x.call(obj2);

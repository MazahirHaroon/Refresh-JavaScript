let worker = {
  name: 'Mazahir',
  someOtherMethod: () => {
    return 1;
  },
  slow: (x) => {
    // some heavy job
    console.log(`called with ${x} - ${this.name}`);
    return x;
  },
};

worker.slow(2);

// let worker = {
//   name: 'Mazahir',
//   someOtherMethod: () => 1,
//   init() {
//     const self = this; // Capture `this`
//     slow = (x) => {
//       console.log(`called with ${x} - ${self.name}`);
//       return x;
//     };
//   },
// };

// worker.init(); // Initialize slow function
// worker.slow(2); // ✅ Output: "called with 2 - Mazahir"

// const cachingDecorator = (func) => {
//   const cache = new Map();

//   return (x) => {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x);

//     cache.set(x, result);
//     return result;
//   };
// };

// const cachedSlow = cachingDecorator(slow);

// console.log(cachedSlow(1));
// console.log(cachedSlow(2));
// console.log(cachedSlow(1));

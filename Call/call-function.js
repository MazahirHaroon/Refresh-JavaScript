const slow = (x) => {
  // some heavy job
  console.log(`called with ${x}`);
  return x;
};

const cachingDecorator = (func) => {
  const cache = new Map();

  return (x) => {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);

    cache.set(x, result);
    return result;
  };
};

const cachedSlow = cachingDecorator(slow);

console.log(cachedSlow(1));
console.log(cachedSlow(2));
console.log(cachedSlow(1));

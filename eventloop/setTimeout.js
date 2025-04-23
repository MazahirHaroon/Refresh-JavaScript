const main = () => {
  let count = 0;
  const intervalId = setInterval(() => {
    console.log(count);
    count += 1;
  }, 1000);
  count = 1;
  setTimeout(() => clearInterval(intervalId), 7000);
};

main();

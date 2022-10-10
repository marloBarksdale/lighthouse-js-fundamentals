const range = (start, end, step) => {
  const arr = [];
  while (start <= end) {
    if (!(step > 0)) {
      break;
    }
    arr.push(start);
    start += step;
  }

  return arr;
};

console.log(range(3, 2, 0));

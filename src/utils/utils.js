function range(from, to) {
  const arr = [];
  for (let i = from; i < to; i++) {
    arr.push(i);
  }
  return arr;
}

export default {
  range
};
const params = [4, 7, 3, 4, 2, 1];
const sum = (a, b = 0) => a + b;

const infiniteSum = (p) => {
  var total = 0;
  p.map((v) => (total += v));
  return total;
};
const mult = (a, b = 1) => a * b;
console.log(sum(8), infiniteSum(params), mult(4));

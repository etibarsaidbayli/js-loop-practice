

let N = 10000000;

let sum = 0;
for (let k = 1; k <= N; k++) {
  sum += Math.pow(-1, k + 1) / (2 * k - 1);
}

sum = 4 * sum;

console.log(sum);

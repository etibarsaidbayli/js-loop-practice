
let N = 999;

let sum = 0;

while (N > 0) {
  const lastDigit = N % 10;
  sum = sum + lastDigit;
  N = Math.floor(N / 10);
}

console.log(sum);

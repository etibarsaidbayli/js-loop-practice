
let N;

do {
  N = Number(prompt("Enter a number"));
} while (Number.isNaN(N));

let sum = 0;
for (let i = 1; i <= N; i++) {
  sum = sum + i;
}

console.log(sum);

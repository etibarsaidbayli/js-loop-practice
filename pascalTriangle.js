
let N = 10;

let result = '';
for (let i = 1; i <= N; i++) {
  let coef = 1;
  for (let j = 1; j <= i; j++) {
    result = result + coef + ' ';
    coef = coef * ((i - j) / j);
  }
  result = result + '\n';
}

console.log(result);

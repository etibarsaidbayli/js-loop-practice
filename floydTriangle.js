
const N = 10;

let result = '';
let k = 1;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    result = result + k + ' ';
    k++;
  }
  result = result + '\n';
}

console.log(result);

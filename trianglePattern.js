
const N = 5;

let result = '';
for (let row = 0; row < N; row++) {

  for (let k = N - 1; k >= row; k--) {
    result = result + ' ';
  }

  for (let j = 0; j <= row; j++) {
    result = result + '*';
  }

  result = result + '\n';
}

console.log(result);


const N = 4;

let result = '';

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    result = result + '* ';
  }
  result = result + '\n';
}

console.log(result);

/*

FOR CEFER

for (let i = 1; i <= N * N; i++) {
  result = result + '* ';

  if (i % N === 0) {
    result = result + '\n';
  }
}

*/

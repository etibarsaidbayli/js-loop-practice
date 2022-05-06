
const N = 100;

let count = 0;
for (let i = 2; i <= N; i++) {

  let prime = true;
  for (let k = 2; k < i; k++) {
    if (i % k === 0) {
      prime = false;
      break;
    }
  }

  if (prime === true) {
    console.log(i + ' is prime.');
    count++;
  }
}

console.log(count);

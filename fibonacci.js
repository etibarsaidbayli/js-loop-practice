
const N = 10;

let first = 0;
let second = 1;

for (let i = 0; i < N; i++) {
  let current = first + second;
  console.log(current);
  first = second;
  second = current;
}

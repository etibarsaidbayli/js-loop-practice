
const binary = '1001001';

let decimal = 0;
let sup = 0;

for (let i = binary.length - 1; i >= 0; i--) {
  let currentDigit = Number(binary[i]);
  decimal += currentDigit * Math.pow(2, sup);
  sup++;
}

console.log(decimal);

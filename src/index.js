import nameStock from "./constants/index.js";

function generateName(gender) {
  const stock = nameStock[gender];

  const prefixIdx = Math.floor(Math.random() * stock.prefixes.length);
  const suffixIdx = Math.floor(Math.random() * stock.suffixes.length);
  const prefix = stock.prefixes[prefixIdx];
  const suffix = stock.suffixes[suffixIdx];

  return `${prefix.slice(0,1).toUpperCase()}${prefix.slice(1)}${suffix}`;
}

console.log(generateName('male'));
console.log(generateName('male'));
console.log(generateName('male'));
console.log('')
console.log(generateName('female'));
console.log(generateName('female'));
console.log(generateName('female'));

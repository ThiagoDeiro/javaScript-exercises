function findDigits(n) {
  let splitNumber = n.toString().split("");
  let count = 0;
  for (let i = 0; i < splitNumber.length; i++) {
    if (n % splitNumber[i] === 0) {
      count++;
    }
  }

  return count;
}

console.log(findDigits(123456789));

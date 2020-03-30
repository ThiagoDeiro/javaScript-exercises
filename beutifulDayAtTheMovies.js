function beautifulDays(i, j, k) {
  var numbers = [];
  var count = 0;
  for (let y = i; y <= j; y++) {
    numbers.push(y);
  }
  for (let x = 0; x < numbers.length; x++) {
    let reverseNumb = numbers[x]
      .toString()
      .split("")
      .map(Number)
      .reverse()
      .join("");

    let original = numbers[x]
      .toString()
      .split("")
      .map(Number)
      .join("");
    let totalSum = Math.abs(original - reverseNumb);
    if (totalSum % k === 0) {
      count++;
    }
  }

  console.log(count);
}

beautifulDays(20, 23, 6);

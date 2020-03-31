function birthdayCakeCandles(ar) {
  let candles = 0;
  const arr = [...ar].sort();

  var largest = Math.max.apply(Math, arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === largest) {
      candles++;
    }
  }

  return candles;
}

console.log(birthdayCakeCandles([2, 2, 1, 2]));

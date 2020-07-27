function rotLeft(a, d) {
  let newArr = [...a];
  newArr.length = d;
  let arrFrom = [];
  for (let i = d; i < a.length; i++) {
    arrFrom.push(a[i]);
  }
  arrFrom.reverse();
  for (let i = 0; i < arrFrom.length; i++) {
    newArr.unshift(arrFrom[i]);
  }

  return newArr;
}

console.log(
  rotLeft(
    [
      41,
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51,
    ],
    10
  )
);

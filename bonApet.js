function bonAppetit(bill, k, b) {
  var arra = [...bill].slice();
  var newArr = arra.splice(k, 1);

  const sum = bill.reduce((a, b) => a + b, 0);
  const sumDif = arra.reduce((a, b) => a + b, 0);

  const sumTotal2 = sumDif / 2;

  const totalOfdif = b - sumTotal2;

  if (totalOfdif === 0) {
    console.log("Bon Appetit");
  } else {
    console.log(totalOfdif);
  }
}

bonAppetit([3, 10, 2, 9], 1, 12);

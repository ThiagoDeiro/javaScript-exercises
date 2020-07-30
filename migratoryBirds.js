function migratoryBirds(arr) {
  var mf = 1;
  var counter = 0;
  var item;

  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) counter++;
      if (mf < counter) {
        mf = counter;
        item = arr[i];
      }
    }

    counter = 0;
  }
  return item;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

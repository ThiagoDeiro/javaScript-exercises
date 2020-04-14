function catAndMouse(x, y, z) {
  const distanceCatA = Math.abs(x - z);
  const distanceCatB = Math.abs(y - z);
  if (distanceCatA === distanceCatB) {
    return "Mouse C";
  } else if (distanceCatA < distanceCatB) {
    return "Cat A";
  } else {
    return "Cat B";
  }
}

console.log(catAndMouse(2, 5, 4));

function jumpingOnClounds(c) {
  let jumps = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      jumps++;
      i++;
    } else if (c[i + 2] === 1) {
      jumps++;
    }
  }
  return jumps;
}

console.log(jumpingOnClounds([0, 0, 1, 0, 0, 1, 0]));

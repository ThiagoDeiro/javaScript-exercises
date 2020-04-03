function birthday(s, d, m) {
  let cunt = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = s[i];
    for (let j = 1; j < m; j++) {
      sum += s[i + j];
    }
    if (sum == d) {
      cunt++;
    }
  }
  return cunt;
}

console.log(birthday([1, 1, 1, 1, 1], 3, 2));

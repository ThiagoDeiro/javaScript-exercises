function pageCount(n, p) {
  let fisrt = Math.floor(p / 2);
  let second = Math.floor(n / 2 - fisrt);

  if (fisrt < second) {
    return fisrt;
  } else if (fisrt > second) {
    return second;
  } else if (fisrt === second) {
    return fisrt;
  }
}

console.log(pageCount(1, 1));

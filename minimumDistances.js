function minimumDistances(a) {
  let min = -1;
  for (let i = 0; i < a.length; i++) {
    let id = i + 1;
    for (let j = 0; j < a.length; j++) {
      if (id !== 0) {
        id = a.indexOf(a[i], id) + 1;
        const diff = id - 1 - i;
        min = diff >= 0 && (diff < min || min === -1) ? diff : min;
      }
    }
  }
  return min;
}

minimumDistances([7, 1, 3, 4, 1, 7]);

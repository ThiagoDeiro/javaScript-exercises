function breakingRecords(scores) {
  let best = 0;
  let worst = 0;

  let bestScore = scores[0];
  let worstScore = scores[0];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > bestScore) {
      bestScore = scores[i];
      best++;
    } else if (scores[i] < worstScore) {
      worstScore = scores[i];
      worst++;
    }
  }

  console.log(best, worst);
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);

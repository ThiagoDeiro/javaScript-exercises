function gradingStudents(grades) {
  let gradeRound = [];
  for (let i = 0; i < grades.length; i++) {
    let round = Math.ceil(grades[i] / 5) * 5;
    if (round < 38) {
      gradeRound.push(grades[i]);
    } else if (round - grades[i] < 3) {
      gradeRound.push(round);
    } else {
      gradeRound.push(grades[i]);
    }
  }

  return gradeRound;
}

console.log(gradingStudents([73, 67, 40, 33]));

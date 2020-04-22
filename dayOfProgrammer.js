function dayOfProgrammer(year) {
  let dayProgram = 256;
  let mouth = 9;
  let mouths = [1, 2, 3, 4, 5, 6, 7, 8];
  let arrOfDays = [];
  for (let i = 0; i < mouths.length; i++) {
    arrOfDays.push(new Date(year, mouths[i], 0).getDate());
  }
  let totalOfDaysInMouths = arrOfDays.reduce((a, b) => a + b);
  let theDayOfProgrammer = dayProgram - totalOfDaysInMouths;
  console.log(theDayOfProgrammer + "." + "0" + mouth + "." + year);
}

dayOfProgrammer(1984);

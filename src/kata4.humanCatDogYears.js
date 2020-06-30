const humanCatDogYears = number => {
  let dogYears = 0;
  let catYears = 0;

  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  }

  if (number === 2) {
    catYears = 24;
    dogYears = 24;
  }

  if (number >= 3) {
    catYears = 24 + (number - 2) * 4;
    dogYears = 24 + (number - 2) * 5;
  }

  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;

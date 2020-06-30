const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns an array of three numbers", () => {
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});
